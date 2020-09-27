import React, { HTMLAttributes } from 'react';
import { CardContainer } from './style';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  cardTitle: string;
}

const Card: React.FC<CardProps> = ({ cardTitle, children }) => {
  return (
    <CardContainer>
      <h1>{cardTitle}</h1>
      {children}
    </CardContainer>
  );
}

export default Card;