import {Component, Input, OnInit} from '@angular/core';
import {GameRoom, Player} from '../interfaces';
import {GameRoomListService} from '../game-room-list.service';

@Component({
  selector: 'app-game-room-players',
  templateUrl: './game-room-players.component.html',
  styleUrls: ['./game-room-players.component.css']
})
export class GameRoomPlayersComponent implements OnInit {
  @Input() room: GameRoom;

  constructor() { }

  ngOnInit() {
  }

}
