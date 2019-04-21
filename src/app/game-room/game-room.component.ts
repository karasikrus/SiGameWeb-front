import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {GameRoom} from '../interfaces';
import {ROOMS} from '../mock-gameRooms';
import {User} from '../interfaces';
import {GameRoomListService} from '../game-room-list.service';


@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.css']
})
export class GameRoomComponent implements OnInit {
  id: number;

  host: User;

  getId(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  getHost(): void {
    this.gameRoomListService.getHost(this.id)
      .subscribe(host => this.host = host);
  }

  constructor(
    private gameRoomListService: GameRoomListService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getId();
    this.getHost();
  }

}
