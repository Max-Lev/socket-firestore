import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FbComponent } from '../components/fb/fb.component';
import { SocketComponent } from '../components/socket/socket.component';

const routes: Routes = [
  {
    path:'',component:FbComponent
  },
  {
    path:'socket',component:SocketComponent
  },
  {
    path:'',redirectTo:'',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
