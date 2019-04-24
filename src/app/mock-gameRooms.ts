import {GameRoom, GameRoomList, GameRoomState, Player, User} from './interfaces';


export const ROOMS: GameRoom[] = [
  { id: 2,
    currentRound: 0,
    currentCategoryId: null,
    currentQuestionId: null,
    gameRounds: [{name: 'разминочка', questionCategories: [{
      name: 'Имена', id: 0, comment: '', questions: [
          {
            id: 0, comment: '', answered: false, answeringPlayer: null, choosingPlayer: null, text: 'Как зовут автора пака?',
            answerText: 'Иван', cost: 100, type: null
          },
          {
            id: 1, comment: '', answered: false, answeringPlayer: null, choosingPlayer: null,
            text: 'Как звали последнего царя династии Рюриковичей?',
            answerText: 'Иван', cost: 300, type: null
          },
          {
            id: 2, comment: '', answered: false, answeringPlayer: null, choosingPlayer: null, text: 'Самое популярное мужское имя в России',
            answerText: 'Александр', cost: 500, type: null
          },
        ]
      },
        {
          name: 'Фамилии', id: 1, comment: '', questions: [
            {
              id: 0, comment: '', answered: false, answeringPlayer: null, choosingPlayer: null, text: 'Династия российских императоров',
              answerText: 'Романовы', cost: 100, type: null
            },
            {
              id: 1, comment: '', answered: false, answeringPlayer: null, choosingPlayer: null, text: 'Фамилия Ленина',
              answerText: 'Ульянов', cost: 300, type: null
            },
            {
              id: 2, comment: '', answered: false, answeringPlayer: null, choosingPlayer: null, text: 'Самое популярная фамилия в России',
              answerText: 'Смирнов', cost: 500, type: null
            },
          ]
        }]}],
    host: {name: 'vanya', avatarPictureUrl: null},
    maxPlayers: 3,
    name: 'room one',
    password: null,
    players: [{user: {name: 'vlad', avatarPictureUrl: null}, score: 0}, {user: {name: 'petr', avatarPictureUrl: null}, score: 0}],
    state: GameRoomState.WaitingForStart,
    playerTurn: false,
    hostTurn: true,
    activePlayerName: null
  },
  { id: 7,
    currentRound: null,
    currentCategoryId: null,
    currentQuestionId: null,
    gameRounds: null,
    host: {name: 'maxim', avatarPictureUrl: null},
    maxPlayers: 2,
    name: 'room two',
    password: null,
    players: [],
    state: GameRoomState.WaitingForStart,
    playerTurn: false,
    hostTurn: true,
    activePlayerName: null
  },
  { id: 8,
    currentRound: null,
    currentCategoryId: null,
    currentQuestionId: null,
    gameRounds: null,
    host: {name: 'Kolya', avatarPictureUrl: null},
    maxPlayers: 3,
    name: 'Веселая игра(нет)',
    password: null,
    players: [{user: {name: 'a', avatarPictureUrl: null}, score: 1100}, {user: {name: 'b', avatarPictureUrl: null}, score: 0}, {user: {name: 'x', avatarPictureUrl: null}, score: -300}],
    state: GameRoomState.WaitingForStart,
    playerTurn: false,
    hostTurn: true,
    activePlayerName: null
  }
];
