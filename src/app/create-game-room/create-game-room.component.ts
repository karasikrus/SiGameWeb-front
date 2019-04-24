import {Component, Input, OnInit} from '@angular/core';
import {GameRoom, GameRoomState} from '../interfaces';
import {GameRoomListService} from '../game-room-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-game-room',
  templateUrl: './create-game-room.component.html',
  styleUrls: ['./create-game-room.component.css']
})
export class CreateGameRoomComponent implements OnInit {
  @Input() isCreating: boolean;

  newRoom: GameRoom = {
    id: null,
    name: null,
    maxPlayers: null,
    players: [],
    host: null,
    password: null,
    state: GameRoomState.WaitingForStart,
    gameRounds: [],
    currentRound: 0,
    currentCategoryId: null,
    currentQuestionId: null,
    playerTurn: false,
    hostTurn: false,
    activePlayer: null,
  };
  createAsHost(): void {
    const id = this.gameRoomListService.createNewRoom(this.newRoom);
    this.gameRoomListService.enterRoomAsHost(id);
    this.isCreating = false;
    this.router.navigate(['/room/' + id]);
  }
  createAsPlayer(): void {
    const id = this.gameRoomListService.createNewRoom(this.newRoom);
    this.gameRoomListService.enterRoomAsPlayer(id);
    this.isCreating = false;
    this.router.navigate(['/room/' + id]);
  }

  constructor(private router: Router, private gameRoomListService: GameRoomListService) { }

  ngOnInit() {
  }

}
