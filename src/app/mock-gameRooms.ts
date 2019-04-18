import {GameRoom, GameRoomList, GameRoomState, Player, User} from './interfaces';


export const ROOMS: GameRoom[] = [
  { currentRound: null,
    gameRounds: null,
    host: {name: 'vanya', avatarPictureUrl: null},
    maxPlayers: 3,
    name: 'room one',
    password: null,
    players: [],
    state: GameRoomState.WaitingForStart,
  },
  { currentRound: null,
    gameRounds: null,
    host: {name: 'maxim', avatarPictureUrl: null},
    maxPlayers: 2,
    name: 'room two',
    password: null,
    players: [],
    state: GameRoomState.WaitingForStart, }
];
