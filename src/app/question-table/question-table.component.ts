import {Component, Input, OnInit} from '@angular/core';
import {GameRoomListService} from '../game-room-list.service';
import {GameRoom} from '../interfaces';

@Component({
  selector: 'app-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.css']
})
export class QuestionTableComponent implements OnInit {
  @Input() room: GameRoom;

  constructor(private gameRoomListService: GameRoomListService) { }

  ngOnInit() {
  }

}
