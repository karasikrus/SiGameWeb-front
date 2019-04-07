interface User {
  name: string;
  avatarPictureUrl?: string;
}
interface Player {
  user: User;
  score: number;
}
enum QuestionType {
  standart,
  cat,
  auction,
  sponsored,
}
interface Question {
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
interface QuestionCategory {
  name: string;
  comment: string;
  questions: Question[];
}
interface GameRound {
  name: string;
  questionCategories: QuestionCategory;
}
enum GameRoomState {
  WaitingForStart,
  GameInProcess,
  GameFinished,
}
interface GameRoom {
  name: string;
  maxPlayers: number;
  players: Player[];
  host: User;
  password?: string;
  state: GameRoomState;
  gameRounds: GameRound[];
  currentRound: number;
}
interface GameRoomList {
  gameRooms: GameRoom[];
}

