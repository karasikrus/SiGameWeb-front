import {Component, Input, OnInit} from '@angular/core';
import {GameRoomListService} from '../game-room-list.service';

@Component({
  selector: 'app-host-approve-answer',
  templateUrl: './host-approve-answer.component.html',
  styleUrls: ['./host-approve-answer.component.css']
})
export class HostApproveAnswerComponent implements OnInit {
  @Input() hostIsApproving: boolean;
  @Input() roomId: number;

  correct(): void {
    this.gameRoomListService.answerIsCorrect(this.roomId);
  }
  incorrect(): void {
    this.gameRoomListService.answerIsIncorrect(this.roomId);
  }

  constructor(private gameRoomListService: GameRoomListService) { }

  ngOnInit() {
  }

}
