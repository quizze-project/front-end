import { QuizzeInterface } from "../../interfaces/QuizzeInterfaces";
import QuizzeActions from "./actions";

const QuizzeReducer = (
  quizze: QuizzeInterface,
  action: QuizzeActions
): QuizzeInterface => {
  const { questionId, answerId, editing } = action;
  const question = quizze.questions.find(q => q.id === questionId);

  switch(action.type) {
    case "SELECTANSWER":
      if(question) {
        question.checkedAnswer = answerId;
        return { ...quizze, questions: quizze.questions.map(q => {
          if(q.id === questionId) {
            return { ...q, checkedAnswer: answerId };
          }
          return q;
        }) };
      }
      return quizze;
    case "EDITANSWER":
      return {
        ...quizze,
        editingQuestion: undefined,
        editingAnswer: editing ? answerId : undefined,
        questions: editing ? quizze.questions : quizze.questions.map(q => {
          if(q.id === questionId) {
            q.answers = q.answers.filter(a => a.id !== -1);
          }
          return q;
        })
      };
    case "ADDANSWER":
      return {
        ...quizze,
        editingQuestion: undefined,
        editingAnswer: -1,
        questions: quizze.questions.map(q => {
          if(q.id === questionId)
            q.answers = [ ...q.answers.filter(a => a.id !== -1), { id: -1, answer: "" } ];

          return q;
        })
      };
    case "SAVEANSWER":
      const { answer } = action;

      if((answer as string).trim().length === 0)
        return quizze;
      
      return { 
        ...quizze,
        editingAnswer: undefined,
        questions: quizze.questions.map(q => {
          if(q.id === questionId) {
            q.answers = q.answers.map(a => {
              if(a.id === answerId)
                a.answer = answer;

              return a;
            });
          }
          return q;
        })
      };
    case "EDITQUESTION":
      return {
        ...quizze,
        editingQuestion: editing ? questionId : undefined,
        editingAnswer: undefined,
        questions: questionId === -1 ? quizze.questions.filter(q => q.id !== -1) : quizze.questions
      };
    case "ADDQUESTION":
      return { ...quizze, editingQuestion: -1, questions: [ 
        ...quizze.questions.filter(q => q.id !== -1),
        { id: -1, statement: "", answers: [] }
      ]};
    case "DELETEQUESTION":
      return { 
        ...quizze,
        editingQuestion: quizze.editingQuestion === questionId ? undefined : quizze.editingQuestion,
        questions: quizze.questions.filter(q => q.id !== questionId)
      };
    case "SAVEQUESTION":
      const { statement } = action;

      if((statement as string).trim().length === 0)
        return quizze;
      
      return { 
        ...quizze,
        editingQuestion: undefined,
        questions: quizze.questions.map(q => {
          if(q.id === questionId) {
            if(q.id === -1) q.id = quizze.questions.length * -1;
            q.statement = statement;
          }
          return q;
        })
      };
  }
}

export default QuizzeReducer;