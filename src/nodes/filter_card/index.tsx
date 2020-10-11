import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../../components/card';
import CheckBox from '../../components/checkbox';
import Range from '../../components/range';
import { doUpdate } from '../../store/actions/SearchActions';

const FilterCard: React.FC = () => {
  const dispatch = useDispatch();
  const [ questionsNumber, setQuestionsNumber ] = useState(5);
  
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const text = data.get('text') as string;
    const registrationRequired = data.get('registrationRequired') !== null;
    const questionsAmount = Number(data.get('questionsAmount'));

    dispatch(doUpdate(text.trim(), registrationRequired, questionsAmount));
  }, [dispatch]);

  return (
    <form action="" onSubmit={handleSubmit}>
      <Card cardTitle='Dá um quizze!' style={{ marginBottom: '10px' }}>
        <input 
          type="text" 
          className="custominput large block" 
          placeholder="Filmes, séries, jogos... O que eu quero responder?"
          title="Filmes, séries, jogos... O que eu quero responder?"
          name="text"
        />

        <h3>Filtra para mim, mano</h3>
        <CheckBox name="registrationRequired" text="Precisa de cadastro"/>

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
            name="questionsAmount"
          />
        </div>

        <button className="btn bg-green largefont block">Me traz quizzes!</button>
      </Card>
    </form>
  );
}

export default FilterCard;