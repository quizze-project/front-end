import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Card from '../../components/card';

const GoToHomeCard: React.FC = () => {
  const location = useLocation();

  return (
    location.pathname !== '/' ?
    (<Card style={{ marginBottom: '10px' }}>
      <Link
        className="btn bg-green largefont block"
        to="/"
      >
        Voltar ao início
      </Link>
    </Card>) : null
  );
}

export default GoToHomeCard;