import React from 'react';
import { 
  QuizzeContainer, QuizzeDescription, QuizzeImage, QuizzeInformation, QuizzeOptions, QuizzeTitle 
} from './style';

interface QuizzeProps {
  title: string;
  description: string;
  imageUrl: string;
  owner?: boolean;
}

const Quizze: React.FC<QuizzeProps> = ({ title, description, imageUrl, owner }) => {
  return (
    <QuizzeContainer>
      <QuizzeImage imageUrl={imageUrl}></QuizzeImage>
      <QuizzeInformation>
        <QuizzeTitle>{title}</QuizzeTitle>
        <QuizzeDescription>{description}</QuizzeDescription>
      </QuizzeInformation>
      {
        owner ? (
          <QuizzeOptions>
            <button style={{ margin: '0 5px 5px 0' }} className="btn bg-green block">Editar</button>
            <button style={{ margin: '0 0 5px 0' }} className="btn bg-red block">Deletar</button>
          </QuizzeOptions>
        ) : null
      }
    </QuizzeContainer>
  );
}

export default Quizze;