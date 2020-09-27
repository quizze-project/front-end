import React from 'react';
import { QuizzeContainer, QuizzeDescription, QuizzeImage, QuizzeInformation, QuizzeTitle } from './style';

interface QuizzeProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Quizze: React.FC<QuizzeProps> = ({ title, description, imageUrl }) => {
  return (
    <QuizzeContainer>
      <QuizzeImage imageUrl={imageUrl}></QuizzeImage>
      <QuizzeInformation>
        <QuizzeTitle>{title}</QuizzeTitle>
        <QuizzeDescription>{description}</QuizzeDescription>
      </QuizzeInformation>
    </QuizzeContainer>
  );
}

export default Quizze;