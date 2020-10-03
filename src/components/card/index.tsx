import React, { HTMLAttributes } from 'react';
import { CardBody, CardContainer, CardHeader, CardSubtitle, CardTitle } from './style';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  cardTitle?: string;
  cardSubtitle?: string;
  cardHeaderImage?: string;
}

const Card: React.FC<CardProps> = (
  { cardTitle, cardSubtitle, cardHeaderImage, children, ...rest }
) => {
  return (
    <CardContainer {...rest}>
      {cardTitle || cardSubtitle ? (
        <CardHeader backgroundImage={cardHeaderImage}>
          {cardTitle ? (<CardTitle>{cardTitle}</CardTitle>) : null}
          {cardSubtitle ? (<CardSubtitle>{cardSubtitle}</CardSubtitle>) : null}
        </CardHeader>
        ) : null
      }
      {children ? (
        <CardBody>
          {children}
        </CardBody>
        ) : null
      }
    </CardContainer>
  );
}

export default Card;