import {Component, Input, OnInit} from '@angular/core';
import {GameRoom, User} from '../interfaces';
import {ROOMS} from '../mock-gameRooms';
import {GameRoomListService} from '../game-room-list.service';

// gets game rooms from mock file
@Component({
  selector: 'app-game-room-list',
  templateUrl: './game-room-list.component.html',
  styleUrls: ['./game-room-list.component.css']
})

export class GameRoomListComponent implements OnInit {

  rooms: GameRoom[];
  selectedRoom: GameRoom;
  isCreating: boolean;
  getRooms(): void {
    this.gameRoomListService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }
  createRoom(): void {
    this.isCreating = true;
  }

  onSelect(room: GameRoom): void {
    this.selectedRoom = room;
  }

  constructor(private gameRoomListService: GameRoomListService) { }

  ngOnInit() {
    this.getRooms();
    this.isCreating = false;
  }

}
