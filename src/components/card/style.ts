import styled, { css } from 'styled-components';

interface CardHeaderProps {
  backgroundImage?: string;
}

export const CardContainer = styled.div`
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const CardHeader = styled.div<CardHeaderProps>`
  padding: 16px 1.5rem;

  ${props => props.backgroundImage && css`
    background: url(${props.backgroundImage}) center/cover no-repeat;

    & ${CardTitle}, & ${CardSubtitle} {
      color: white;
    }
  `}
`;

export const CardBody = styled.div`
  padding: 16px 1.5rem;

  ${CardHeader} + & {
    padding: 0 1.5rem 16px 1.5rem;
  }
`;

export const CardTitle = styled.h1`
  margin: 0;
`;

export const CardSubtitle = styled.p`
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.6;
`;