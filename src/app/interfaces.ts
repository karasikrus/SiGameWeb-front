export interface User {
  name: string;
  avatarPictureUrl?: string;
}
export interface Player {
  user: User;
  score: number;
}
export enum QuestionType {
  standart,
  cat,
  auction,
  sponsored,
}
export interface Question {
  type: QuestionType;
  text: string;
  comment: string;
  pictureUrl?: string;
  videoUrl?: string;
  cost: number;
  choosingPlayer: Player; // Player who've chosen the question
  answeringPlayer: Player; // Player who is answering the question
  answerText: string;
  answerPictureUrl?: string;
  answerVideoUrl?: string;
  answered: boolean;
}
export interface QuestionCategory {
  name: string;
  comment: string;
  questions: Question[];
}
export interface GameRound {
  name: string;
  questionCategories: QuestionCategory;
}
export enum GameRoomState {
  WaitingForStart,
  GameInProcess,
  GameFinished,
}
export interface GameRoom {
  name: string;
  maxPlayers: number;
  players: Player[];
  host: User;
  password?: string;
  state: GameRoomState;
  gameRounds: GameRound[];
  currentRound: number;


}

export interface GameRoomList {
  gameRooms: GameRoom[];
}

