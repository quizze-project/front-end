export interface AnswerInterface {
  id: number;
  answer: string;
}

export interface QuestionInterface {
  id: number;
  statement: string;
  answers: AnswerInterface[];
  checkedAnswer?: number;
}

export interface QuizzeInterface {
  id: number;
  name: string;
  description: string;
  image: string;
  questions: QuestionInterface[];
  editingQuestion?: number;
  editingAnswer?: number;
}