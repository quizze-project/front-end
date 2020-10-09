import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { 
  QuizzeContainer, QuizzeDescription, QuizzeImage, QuizzeInformation, QuizzeOptions, QuizzeTitle 
} from './style';

interface QuizzeProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  owner?: boolean;
}

const Quizze: React.FC<QuizzeProps> = ({ id, title, description, imageUrl, owner }) => {
  const history = useHistory();

  return (
    <QuizzeContainer onClick={() => history.push(`/quizze/${id}`)}>
      <QuizzeImage imageUrl={imageUrl}></QuizzeImage>
      <QuizzeInformation>
        <QuizzeTitle>{title}</QuizzeTitle>
        <QuizzeDescription>{description}</QuizzeDescription>
      </QuizzeInformation>
      {
        owner ? (
          <QuizzeOptions>
            <Link 
              style={{ margin: '0 5px 5px 0' }}
              className="btn bg-green block"
              to={`/edit/${id}`}
              onClick={e => e.stopPropagation()}
            >
              Editar
            </Link>
            <button style={{ margin: '0 0 5px 0' }} className="btn bg-red block">Deletar</button>
          </QuizzeOptions>
        ) : null
      }
    </QuizzeContainer>
  );
}

export default Quizze;