import React, { forwardRef } from 'react';
import CheckBox from '../../components/checkbox';

import Modal, { ModalHandles } from '../../components/modal';

const CreateQuizzeModal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  return (
    <Modal
      title='Bora lá!'
      subtitle='Vamos criar seu Quizze!'
      ref={ref}
    >
      <form method="post" onSubmit={e => {
        e.preventDefault();
        console.table(new FormData(e.currentTarget));
      }}>
        <div className="form-group">
          <label htmlFor="quizzename">Diga-nos, qual seria um bom nome para o seu Quizze?</label>
          <input
            type="text"
            className="custominput block"
            placeholder="O quanto você sabe sobre Super Chock?"
            maxLength={Number(process.env.REACT_APP_QUIZZE_NAME_LIMIT)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quizzedescription">Que tal uma descrição que indique sobre o que é o seu Quizze?</label>
          <input
            type="text"
            className="custominput block"
            placeholder="O quanto você sabe sobre Super Chock?"
          />
        </div>
        <div className="form-group">
          <label>Agora, personalize as configurações do seu Quizze!</label>
          <CheckBox name="needlogin" text="Precisa de cadastro para responder"/>
          <CheckBox name="needlink" text="Quero que só quem tenha o link possa acessar meu Quizze"/>
        </div>
        <p style={{ textAlign: 'end', color: 'var(--red)', fontWeight: 600, fontSize: '0.9rem' }}>
          * Você poderá adicionar perguntas mais tarde!
        </p>
        <button type="submit" className="btn bg-green large block">Cria meu Quizze aí, bicho!</button>
      </form>
    </Modal>
  );
}

export default forwardRef(CreateQuizzeModal);