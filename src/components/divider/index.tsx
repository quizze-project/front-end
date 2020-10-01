import React from 'react';
import DividerText from './style';

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <DividerText>{text}</DividerText>
  );
}

export default Divider;