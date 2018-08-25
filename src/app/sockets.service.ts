import { Injectable } from '@angular/core';
import { WebSocketService } from './websocket-greeting.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  messages: Subject<any>;

  constructor(private webSocketservice: WebSocketService) {
    
    this.messages = <Subject<any>>this.webSocketservice.connect$().map((response) => {
      return response;
    });

  };

  sendMsg(msg: any) {
    this.messages.next(msg);
  };


}
