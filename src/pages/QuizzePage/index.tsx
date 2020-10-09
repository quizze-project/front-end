import React, { useCallback, useReducer, useState } from 'react';

import Card from '../../components/card';
import { LeftCardsContainer } from '../../styles/Containers';
import GoToHomeCard from '../../nodes/go_to_home_card'
import { Redirect, useParams } from 'react-router-dom';
import { Answer, AnswerList } from './style';
import QuizzeReducer from '../../reducers/quizze_reducer';
import { doSelectAnswer } from '../../reducers/quizze_reducer/actions';

const FakeQuizze = require('../../FakeQuizze.json');

interface QuizzeParams {
  id: string | undefined;
}

const QuizzePage: React.FC = () => {
  const { id } = useParams<QuizzeParams>();
  const [ quizze, dispatch ] = useReducer(QuizzeReducer, FakeQuizze);
  const [ currentQuestion, setCurrentQuestion ] = useState(0);

  const handleSelect = useCallback((questionId: number, answerId: number) => {
    if(quizze) {
      dispatch(doSelectAnswer(questionId, answerId));
    }
  }, [quizze]);

  const handleSubmit = useCallback(() => {
    
  }, []);

  if(!id) {
    return (
      <Redirect to="/" />
    );
  }

  if(!quizze) {
    return (<>
      <LeftCardsContainer>
        <GoToHomeCard/>
      </LeftCardsContainer>

      <Card style={{ flex: '1' }} cardSubtitle='Carregando...'/>
    </>);
  }

  return (<>
    <LeftCardsContainer>
      <Card
        style={{ marginBottom: '10px', overflow: 'hidden' }}
        cardTitle={quizze.name}
        cardSubtitle={quizze.description}
        cardHeaderImage={quizze.image}
      />
      <GoToHomeCard/>
    </LeftCardsContainer>

    <Card
      style={{ flex: '1' }}
      cardTitle={quizze.questions[currentQuestion].statement}
      cardSubtitle={`Pergunta ${currentQuestion + 1} de ${quizze.questions.length}`}
    >
      <AnswerList>
        {
          quizze.questions[currentQuestion].answers.map(answer => (
            <Answer
              key={answer.id}
              onClick={
                quizze.questions[currentQuestion].checkedAnswer === answer.id ? undefined :
                () => handleSelect(quizze.questions[currentQuestion].id, answer.id)
              } 
              checked={quizze.questions[currentQuestion].checkedAnswer === answer.id}
            >
              {answer.answer}
            </Answer>
          ))
        }
      </AnswerList>
      <div className="justify-between">
        {
          currentQuestion !== 0 ? (
            <button
              className="btn bg-red" 
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              Pergunta anterior
            </button>
          ) : (
            <button className="btn bg-black">Pergunta anterior</button>
          )
        }
        {
          currentQuestion !== quizze.questions.length - 1 ? (
            <button
              className="btn bg-green" 
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Próxima pergunta
            </button>
          ) : (
            <button
              className="btn bg-green" 
              onClick={handleSubmit}
            >
              Enviar resposta
            </button>
          )
        }
      </div>
    </Card>
  </>);
}

export default QuizzePage;