import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/card';

const GoToHomeCard: React.FC = () => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <Link
        className="btn bg-green largefont block"
        to="/"
      >
        Voltar ao início
      </Link>
    </Card>
  );
}

export default GoToHomeCard;