import {Component, Input, OnInit} from '@angular/core';
import {GameRoomListService} from '../game-room-list.service';

@Component({
  selector: 'app-host-approve-answer',
  templateUrl: './host-approve-answer.component.html',
  styleUrls: ['./host-approve-answer.component.css']
})
export class HostApproveAnswerComponent implements OnInit {
  @Input() hostIsApproving: boolean;

  correct(): void {
    this.gameRoomListService.answerIsCorrect();
  }
  incorrect(): void {
    this.gameRoomListService.answerIsIncorrect();
  }

  constructor(private gameRoomListService: GameRoomListService) { }

  ngOnInit() {
  }

}
