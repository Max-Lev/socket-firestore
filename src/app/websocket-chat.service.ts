import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebsocketChatService {

  socket: SocketIOClient.Socket;

  constructor() {
    this.connect();
  };

  connect() {
    this.socket = io(environment.websocket_url);
  }

  sendMessage(msg) {
    this.socket.emit('chat', msg)
  }

  recieveMessage(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('chatEvent', (message) => {
        observer.next(message)
      });
    });
  };

}
