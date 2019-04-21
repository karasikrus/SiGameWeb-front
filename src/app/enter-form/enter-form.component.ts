import { Component, OnInit } from '@angular/core';
import { EnterFormData } from './enter-form-data';
import {Router} from '@angular/router';
import {GameRoomListService} from '../game-room-list.service';
import {User} from '../interfaces';

@Component({
  selector: 'app-enter-form',
  templateUrl: './enter-form.component.html',
  styleUrls: ['./enter-form.component.css']
})
export class EnterFormComponent implements OnInit {

  onEnterMessage = 'Введите ваше имя';
  enterFormData: EnterFormData = {
    name: 'John',
    avatarImageUrl: null,
};
  handleClick() {
    alert('name = ' + this.enterFormData.name + '\nurl = ' + this.enterFormData.avatarImageUrl);
    const user: User = {
      name: this.enterFormData.name,
      avatarPictureUrl: this.enterFormData.avatarImageUrl
    };
    this.gameRoomListService.enter(user);
    this.router.navigate(['/rooms']);
  }
  constructor(private router: Router, private gameRoomListService: GameRoomListService) { }

  ngOnInit() {
  }



}
