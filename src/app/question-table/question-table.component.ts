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
  chooseQuestion(categoryId: number, questionId: number) {
    this.gameRoomListService.chooseQuestion(this.room.id, categoryId, questionId);
  }
  getRoom(): void {
    this.gameRoomListService.getRoom(this.room.id)
      .subscribe(x => this.room = x);
  }

  constructor(private gameRoomListService: GameRoomListService) { }

  ngOnInit() {
    this.getRoom();
  }

}
