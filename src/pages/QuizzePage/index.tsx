import React, { useState } from 'react';

import Card from '../../components/card';
import { LeftCardsContainer } from '../../styles/Containers';
import GoToHomeCard from '../../nodes/go_to_home_card'
import { Redirect, useParams } from 'react-router-dom';
import { Answer, AnswerList } from './style';

interface QuizzeParams {
  id: string | undefined;
}

interface Question {
  question: string;
  answers: string[];
}

interface Quizze {
  name: string;
  description: string;
  image: string;
  questions: Question[];
}

const QuizzePage: React.FC = () => {
  const { id } = useParams<QuizzeParams>();
  const [ quizzeInfo, setQuizzeInfo ] = useState<Quizze>({
    name: 'O quanto você sabe sobre programação?',
    description: 'In code we trust',
    image: 'http://getwallpapers.com/wallpaper/full/1/c/f/145265.jpg',
    questions: [
      {
        question: 'Qual linguagem usa "public static void main"?',
        answers: ['Java', 'Kotlin', 'Python', 'C']
      },
      {
        question: 'Qual linguagem surgiu recentemente para competir com o Java?',
        answers: ['Cobol', 'Fortran', 'Kotlin', 'Assembly']
      },
      {
        question: 'Quem é o mestre da programação?',
        answers: ['Linus Torwalds', 'Bill Gates', 'Ian Guimarães', 'Chris']
      },
    ]
  });

  const [ currentQuestion, setCurrentQuestion ] = useState(0);

  if(!id) {
    return (
      <Redirect to="/" />
    );
  }

  return (<>
    <LeftCardsContainer>
      <Card
        style={{ marginBottom: '10px' }}
        cardTitle={quizzeInfo.name}
        cardSubtitle={quizzeInfo.description}
        cardHeaderImage={quizzeInfo.image}
      />
      <GoToHomeCard/>
    </LeftCardsContainer>

    <Card
      style={{ flex: '1' }}
      cardTitle={quizzeInfo.questions[currentQuestion].question}
      cardSubtitle={`Pergunta ${currentQuestion + 1} de ${quizzeInfo.questions.length}`}
    >
      <AnswerList>
        {
          quizzeInfo.questions[currentQuestion].answers.map(answer => {
          return (<Answer key={answer}>{answer}</Answer>);
          })
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
          currentQuestion !== quizzeInfo.questions.length - 1 ? (
            <button
              className="btn bg-green" 
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Próxima pergunta
            </button>
          ) : (
            <button
              className="btn bg-black" 
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