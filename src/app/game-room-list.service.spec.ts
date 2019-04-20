import { TestBed } from '@angular/core/testing';

import { GameRoomListService } from './game-room-list.service';

describe('GameRoomListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameRoomListService = TestBed.get(GameRoomListService);
    expect(service).toBeTruthy();
  });
});
