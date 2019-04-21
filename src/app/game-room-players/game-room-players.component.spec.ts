import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomPlayersComponent } from './game-room-players.component';

describe('GameRoomPlayersComponent', () => {
  let component: GameRoomPlayersComponent;
  let fixture: ComponentFixture<GameRoomPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
