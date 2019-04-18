import { Component, OnInit, Input } from '@angular/core';
import {GameRoom, GameRoomState} from '../interfaces';

@Component({
  selector: 'app-game-room-info',
  templateUrl: './game-room-info.component.html',
  styleUrls: ['./game-room-info.component.css']
})



export class GameRoomInfoComponent implements OnInit {


  constructor() { }

  @Input() room: GameRoom;

  getState(room: GameRoom): string {
    switch (room.state) {
      case GameRoomState.WaitingForStart : {
        return 'Ожидание игры';
      }
      case GameRoomState.GameFinished: {
        return 'Игра окончена';
      }
      case GameRoomState.GameInProcess: {
        return 'Идёт игра';
      }
      default: {
        return'No info';
      }
    }
  }
  EnterAsHost(): void {
    alert('Вы вошли как ведущий в комнату ' + this.room.name);
    // доделать, когда будет связь с сервисом
  }
  EnterAsPlayer(): void {
    alert('Вы вошли как игрок в комнату ' + this.room.name);
    // доделать, когда будет связь с сервисом
  }



  ngOnInit() {
  }

}
