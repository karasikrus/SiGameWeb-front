import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ROOMS} from '../mock-gameRooms';
import {User, GameRoom} from '../interfaces';
import {GameRoomListService} from '../game-room-list.service';


@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.css']
})
export class GameRoomComponent implements OnInit {
  id: number;
  room: GameRoom;
  host: User;
  hostIsApproving: boolean;

  getRoom(): void {
    this.gameRoomListService.getRoom(this.id)
      .subscribe(room => this.room = room);
  }
  initiateHostApproval(): void {
    this.gameRoomListService.initiateHostApproval();
  }
  getHostApproval(): void {
    this.gameRoomListService.getHostApproval()
      .subscribe(hostIsApproving => this.hostIsApproving = hostIsApproving);
  }


  getId(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  getHost(): void {
    this.host = this.room.host;
  }

  constructor(
    private gameRoomListService: GameRoomListService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getId();
    this.getRoom();
    this.getHost();
    this.getHostApproval();
  }

}
