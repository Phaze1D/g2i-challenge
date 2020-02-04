
export enum Difficulties {
  EASY='easy',
  MEDIUM='medium',
  HARD='hard'
};

export enum Answers {
  TRUE = 'True',
  FALSE = 'False'
}

export type QuizParams = {
  amount: number
  difficulty: Difficulties
  type: string
};

export type PayloadModel = {
  id: string
  type: string
  data: any
};


export type QuestionType = {
  id?: string
  category: string
  type: string
  difficulty: Difficulties
  question: string
  correct_answer: Answers
  incorrect_answers: string[]
  user_answer: Answers
};

export type AnswerParams = {
  questionId: string
  user_answer: Answers
}
