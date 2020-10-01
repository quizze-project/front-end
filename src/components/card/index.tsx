import React, { HTMLAttributes } from 'react';
import { CardContainer } from './style';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  cardTitle?: string;
}

const Card: React.FC<CardProps> = ({ cardTitle, children, ...rest }) => {
  return (
    <CardContainer {...rest}>
      {cardTitle ? (<h1>{cardTitle}</h1>) : null}
      {children}
    </CardContainer>
  );
}

export default Card;