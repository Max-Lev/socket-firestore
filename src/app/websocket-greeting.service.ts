import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import { Observable, Subject } from "rxjs";
import * as Rx from 'rxjs/Rx';
import { environment } from "../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class WebSocketService {

    // Our socket connection
    private socket;

    constructor() { }

    // connect$(): Rx.Subject<MessageEvent> {
    connect$(): Subject<any> {
        const sub$:Subject<any> = new Subject();
        this.socket = io(environment.websocket_url);

        // We define our observable which will observe any incoming messages
        // from our socket.io server.
        let observable = new Observable(observer => {
            this.socket.on('greeting', (data) => {
                console.log("Received message from Websocket Server")
                observer.next(data);
            });
            return () => { 
                this.socket.disconnect();
            };
        });


        // We define our Observer which will listen to messages
        // from our other components and send messages back to our
        // socket server whenever the `next()` method is called.
          let observer = {
              next: (data: Object) => {
                  this.socket.emit('greeting', JSON.stringify(data));
              },
          };

        // we return our Rx.Subject which is a combination
        // of both an observer and observable.
          return Rx.Subject.create(observer, observable);
    }
}