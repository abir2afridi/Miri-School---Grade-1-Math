export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Equation {
  left: string;
  right: string;
  result: string;
}

export enum SpiralPosition {
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  NONE = 'none'
}