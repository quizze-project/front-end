import styled from 'styled-components';

interface AnswerProps {
  checked?: boolean;
}

export const AnswerList = styled.ol.attrs({
  type: "A"
})`
  list-style-position: inside;
  margin: 0;
  padding: 0;
`;

export const Answer = styled.li<AnswerProps>`
  padding: 10px 16px;
  border: solid 3px var(${props => props.checked ? '--green' : '--gray'});
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;