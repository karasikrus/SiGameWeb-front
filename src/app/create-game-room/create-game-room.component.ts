import {Component, Input, OnInit} from '@angular/core';
import {GameRoom, User} from '../interfaces';
import {GameRoomListService} from '../game-room-list.service';

@Component({
  selector: 'app-create-game-room',
  templateUrl: './create-game-room.component.html',
  styleUrls: ['./create-game-room.component.css']
})
export class CreateGameRoomComponent implements OnInit {
  @Input() isCreating: boolean;

  newRoom: GameRoom;
  createAsHost(): void {
    const id = this.gameRoomListService.createNewRoom(this.newRoom);
    this.gameRoomListService.enterRoomAsHost(id);
    this.isCreating = false;
  }
  createAsPlayer(): void {
    const id = this.gameRoomListService.createNewRoom(this.newRoom);
    this.gameRoomListService.enterRoomAsPlayer(id);
    this.isCreating = false;
  }

  constructor(private gameRoomListService: GameRoomListService) { }

  ngOnInit() {
  }

}
