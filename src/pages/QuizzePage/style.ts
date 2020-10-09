import styled from 'styled-components';

interface AnswerProps {
  checked?: boolean;
  checkedcolor?: string;
}

export const AnswerList = styled.ol.attrs({
  type: "A"
})`
  list-style-position: inside;
  margin: 0;
  padding: 0;
`;

export const Answer = styled.li.withConfig({
  shouldForwardProp: () => true
})<AnswerProps>`
  padding: 10px 16px;
  border: solid 3px var(--${props => props.checked ? props.checkedcolor || 'black' : 'gray'});
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