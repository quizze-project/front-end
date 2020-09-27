import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/FontImport.css';
import GlobalStyle from './styles/GlobalStyle';
import Index from './pages/Index';
import Navbar from './components/nav';
import AppContainer from './styles/AppContainer';
import FilterCard from './components/filter_card';

require('dotenv').config()

function App() {
  return (
    <>
      <Navbar>
        <h1 className="white">Olá, visitante!</h1>
        <button className="btn bg-light-purple">Criar um quizze!</button>
      </Navbar>
      <AppContainer>
        <FilterCard/>
        <BrowserRouter>
          <Route path='/' exact={true} component={Index} />
        </BrowserRouter>
      </AppContainer>
      <GlobalStyle/>
    </>
  );
}

export default App;
