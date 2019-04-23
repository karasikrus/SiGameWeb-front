import {GameRoom, GameRoomList, GameRoomState, Player, User} from './interfaces';


export const ROOMS: GameRoom[] = [
  { id: 2,
    currentRound: null,
    gameRounds: null,
    host: {name: 'vanya', avatarPictureUrl: null},
    maxPlayers: 3,
    name: 'room one',
    password: null,
    players: [{user: {name: 'vlad', avatarPictureUrl: null}, score: 0}, {user: {name: 'petr', avatarPictureUrl: null}, score: 0}],
    state: GameRoomState.WaitingForStart,
    playerTurn: false,
    hostTurn: true,
    activePlayer: null
  },
  { id: 7,
    currentRound: null,
    gameRounds: null,
    host: {name: 'maxim', avatarPictureUrl: null},
    maxPlayers: 2,
    name: 'room two',
    password: null,
    players: [],
    state: GameRoomState.WaitingForStart,
    playerTurn: false,
    hostTurn: true,
    activePlayer: null
  },
  { id: 8,
    currentRound: null,
    gameRounds: null,
    host: {name: 'Kolya', avatarPictureUrl: null},
    maxPlayers: 3,
    name: 'Веселая игра(нет)',
    password: null,
    players: [{user: {name: 'a', avatarPictureUrl: null}, score: 1100}, {user: {name: 'b', avatarPictureUrl: null}, score: 0}, {user: {name: 'x', avatarPictureUrl: null}, score: -300}],
    state: GameRoomState.WaitingForStart,
    playerTurn: false,
    hostTurn: true,
    activePlayer: null
  }
];
