import {Component, Input, OnInit} from '@angular/core';
import {GameRoomListService} from '../game-room-list.service';
import {Question, GameRoom} from '../interfaces';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() roomId: number;

  currentQuestion: Question;

  getCurrentQuestion(): void {
    this.gameRoomListService.getCurrentQuestion(this.roomId)
      .subscribe(question => this.currentQuestion = question);
  }

  constructor(private gameRoomListService: GameRoomListService) { }

  ngOnInit() {
    this.getCurrentQuestion();
  }

}
