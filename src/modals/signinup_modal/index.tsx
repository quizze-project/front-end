import React, { forwardRef, useCallback } from 'react';

import Modal, { ModalHandles } from '../../components/modal';
import RegisterForm from '../../forms/registerform';
import Divider from '../../components/divider';
import LoginForm from '../../forms/loginform';
import { FormContainer, FormsContainer } from './style';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../store/actions/UserActions';

const SignInUpModal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const dispatch = useDispatch();

  const handleSubmitLogin = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(doLogin(1, 'Dery'));
  }, [dispatch]);

  return (
    <Modal 
      title='Opa...'
      subtitle='Infelizmente, você ainda não tem uma conta :/'
      ref={ref}
    >
      <h1 style={{ textAlign: 'center', margin: 0 }}>Mas não se preocupe...</h1>
      <FormsContainer>
        <FormContainer>
          <p style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>
            Você pode criar uma aqui
          </p>
          <RegisterForm onSubmit={(e) => { e.preventDefault(); }}/>
        </FormContainer>
        <Divider text="OU"/>
        <FormContainer>
          <p style={{ 
            textAlign: 'center', fontSize: '0.9rem', 
            fontWeight: 600, margin: '0 0 1rem 0' 
          }}>
            Entre com uma conta já existente!
          </p>
          <LoginForm onSubmit={handleSubmitLogin}/>
        </FormContainer>
      </FormsContainer>
    </Modal>
  );
}

export default forwardRef(SignInUpModal);