import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterFormComponent} from './enter-form/enter-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import { GameRoomListComponent } from './game-room-list/game-room-list.component';
import { GameRoomInfoComponent } from './game-room-info/game-room-info.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { GameRoomPlayersComponent } from './game-room-players/game-room-players.component';
import { CreateGameRoomComponent } from './create-game-room/create-game-room.component';
import { HostApproveAnswerComponent } from './host-approve-answer/host-approve-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterFormComponent,
    GameRoomListComponent,
    GameRoomInfoComponent,
    GameRoomComponent,
    GameRoomPlayersComponent,
    CreateGameRoomComponent,
    HostApproveAnswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
