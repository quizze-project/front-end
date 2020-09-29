import React, { useRef } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/FontImport.css';
import GlobalStyle from './styles/GlobalStyle';
import Index from './pages/Index';
import Navbar from './components/nav';
import AppContainer from './styles/AppContainer';
import FilterCard from './components/filter_card';
import Modal, { ModalHandles } from './components/modal';

function App() {
  const modalRef = useRef<ModalHandles>(null);

  return (
    <>
      <Navbar>
        <h1 className="white">Olá, visitante!</h1>
        <button className="btn bg-light-purple" 
          onClick={() => { modalRef.current?.open(); }}
        >
          Criar um quizze!
        </button>
      </Navbar>
      <AppContainer>
        <FilterCard/>
        <BrowserRouter>
          <Route path='/' exact={true} component={Index} />
        </BrowserRouter>
      </AppContainer>
      <Modal 
        title='Opa...'
        subtitle='Infelizmente, você ainda não tem uma conta :/'
        ref={modalRef}
      >
        <h1 style={{ textAlign: 'center' }}>Mas não se preocupe...</h1>
      </Modal>
      <GlobalStyle/>
    </>
  );
}

export default App;