import React, { forwardRef } from 'react';

import Modal, { ModalHandles } from '../../components/modal';
import RegisterForm from '../../forms/registerform';
import Divider from '../../components/divider';
import LoginForm from '../../forms/loginform';
import { FormContainer, FormsContainer } from './style';

const SignInUpModal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
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
          <LoginForm onSubmit={(e) => { e.preventDefault(); }}/>
        </FormContainer>
      </FormsContainer>
    </Modal>
  );
}

export default forwardRef(SignInUpModal);