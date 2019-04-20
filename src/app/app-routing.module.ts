import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameRoomListComponent} from './game-room-list/game-room-list.component';
import {EnterFormComponent} from './enter-form/enter-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/enter', pathMatch: 'full' },
  {path: 'rooms', component: GameRoomListComponent},
  {path: 'enter', component: EnterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
