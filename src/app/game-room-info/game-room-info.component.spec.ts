import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomInfoComponent } from './game-room-info.component';

describe('GameRoomInfoComponent', () => {
  let component: GameRoomInfoComponent;
  let fixture: ComponentFixture<GameRoomInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
