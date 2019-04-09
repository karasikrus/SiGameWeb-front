import { Component, OnInit } from '@angular/core';
import { EnterFormData } from './enter-form-data';

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
  }
  constructor() { }

  ngOnInit() {
  }



}
