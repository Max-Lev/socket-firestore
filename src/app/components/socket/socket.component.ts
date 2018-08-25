import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { SocketsService } from '../../sockets.service';
import { WebsocketChatService } from '../../websocket-chat.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {

  artistsForm: FormGroup;

  constructor(private formsBuilder: FormBuilder, private webSocketChatService: WebsocketChatService, private socketsService: SocketsService) {

    this.artistsForm = this.formsBuilder.group({
      name: new FormControl('')
    });

  };

  ngOnInit(): void {

    this.socketsService.messages.subscribe((msg) => {
      console.log('msg: ', msg)
    });

    this.webSocketChatService.recieveMessage().subscribe((msg) => {
      console.log('chat: ', msg)
    });

  };

  ngAfterViewInit(): void {

  }


  submit() {
    console.log('submit - send msg');
    const msg: string = this.artistsForm.controls['name'].value;
    this.socketsService.sendMsg(msg);
  };


  message: string;
  sendMessage() {
    this.webSocketChatService.sendMessage(this.message);
  }


}
