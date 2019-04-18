import { Component, OnInit } from '@angular/core';
import {GameRoom} from '../interfaces';
import {ROOMS} from '../mock-gameRooms';

// gets game rooms from mock file
@Component({
  selector: 'app-game-room-list',
  templateUrl: './game-room-list.component.html',
  styleUrls: ['./game-room-list.component.css']
})

export class GameRoomListComponent implements OnInit {

  rooms = ROOMS;
  selectedRoom: GameRoom;

  onSelect(room: GameRoom): void {
    this.selectedRoom = room;
  }

  constructor() { }

  ngOnInit() {
  }

}
