type QuizzeActionsNames = "SELECTANSWER" | "EDITANSWER" | "ADDANSWER" | "SAVEANSWER"
                          | "EDITQUESTION" | "ADDQUESTION" | "DELETEQUESTION" | "SAVEQUESTION";

interface QuizzeActions {
  type: QuizzeActionsNames;
  questionId: number;
  answerId?: number;
  editing?: boolean;
  [other: string]: any;
}

export const doSelectAnswer = (questionId: number, answerId: number): QuizzeActions => ({
  type: "SELECTANSWER", questionId, answerId
});

export const doEditAnswer = (questionId: number, answerId: number, editing: boolean): QuizzeActions => ({ 
  type: "EDITANSWER", questionId, answerId, editing
});

export const doAddAnswer = (questionId: number): QuizzeActions => ({ 
  type: "ADDANSWER", questionId
});

export const doSaveAnswer = (questionId: number, answerId: number, answer: string): QuizzeActions => ({ 
  type: "SAVEANSWER", questionId, answerId, answer
});

export const doEditQuestion = (questionId: number, editing: boolean): QuizzeActions => ({ 
  type: "EDITQUESTION", questionId, editing
});

export const doAddQuestion = (): QuizzeActions => ({ type: "ADDQUESTION", questionId: -1 });

export const doDeleteQuestion = (questionId: number): QuizzeActions => ({ 
  type: "DELETEQUESTION", questionId
});

export const doSaveQuestion = (questionId: number, statement: string): QuizzeActions => ({ 
  type: "SAVEQUESTION", questionId, statement
});

export default QuizzeActions;