import {Component, Input, OnInit} from '@angular/core';
import {GameRoom, GameRoomState} from '../interfaces';
import {GameRoomListService} from '../game-room-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-room-info',
  templateUrl: './game-room-info.component.html',
  styleUrls: ['./game-room-info.component.css']
})



export class GameRoomInfoComponent implements OnInit {


  constructor(private router: Router, private gameRoomListService: GameRoomListService) { }

  @Input() room: GameRoom;

  getState(room: GameRoom): string {
    switch (room.state) {
      case GameRoomState.WaitingForStart : {
        return 'Ожидание игры';
      }
      case GameRoomState.GameFinished: {
        return 'Игра окончена';
      }
      case (GameRoomState.GameInProcess || GameRoomState.AnswerIsShown ||
        GameRoomState.PlayerIsAnswering || GameRoomState.PlayerIsChoosingQuestion || GameRoomState.QuestionIsShown): {
        return 'Идёт игра';
      }
      default: {
        return'No info';
      }
    }
  }
  EnterAsHost(): void {
    alert('Вы вошли как ведущий в комнату ' + this.room.name);
    this.gameRoomListService.enterRoomAsHost(this.room.id);
    this.router.navigate(['/room/' + this.room.id]);
  }
  EnterAsPlayer(): void {
    alert('Вы вошли как игрок в комнату ' + this.room.name);
    this.gameRoomListService.enterRoomAsPlayer(this.room.id);
    this.router.navigate(['/room/' + this.room.id]);
  }



  ngOnInit() {
  }

}
