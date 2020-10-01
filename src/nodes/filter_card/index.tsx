import React, { useState } from 'react';

import Card from '../../components/card';
import CheckBox from '../../components/checkbox';
import Range from '../../components/range';

const FilterCard: React.FC = () => {
  const [ questionsNumber, setQuestionsNumber ] = useState(5);

  return (
    <Card cardTitle='Dá um quizze!' style={{ marginBottom: '10px' }}>
      <input 
        type="text" 
        className="custominput large block" 
        placeholder="Filmes, séries, jogos... O que eu quero responder?"
        title="Filmes, séries, jogos... O que eu quero responder?"
      />

      <h3>Filtra para mim, mano</h3>
      <CheckBox name="cadastro" text="Precisa de cadastro"/>

      <h3>Hoje estou animado</h3>
      <div>
        <span className="w600" style={{ marginBottom: '20px' }}>
          Quero responder no mínimo {questionsNumber} perguntas
        </span>
        <Range 
          className="block"
          min="1"
          max="20"
          value={questionsNumber}
          onChange={e => setQuestionsNumber(Number(e.currentTarget.value))}
        />
      </div>

      <button className="btn bg-green largefont block">Me traz quizzes!</button>
    </Card>
  );
}

export default FilterCard;