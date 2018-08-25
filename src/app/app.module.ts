import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SocketsService } from './sockets.service';
import { WebsocketChatService } from './websocket-chat.service';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FbComponent } from './components/fb/fb.component';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { SocketComponent } from './components/socket/socket.component';



@NgModule({
  declarations: [
    AppComponent,
    FbComponent,
    SocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig,'Artists'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    // AngularFireStorageModule,
    RoutingModule,
    RouterModule
  ],
  providers: [
    SocketsService,
    WebsocketChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
