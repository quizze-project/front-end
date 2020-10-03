import React, { useCallback, useRef, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/FontImport.css';
import GlobalStyle from './styles/GlobalStyle';
import Index from './pages/Index';
import { AppContainer } from './styles/Containers';
import { ModalHandles } from './components/modal';
import SignInUpModal from './modals/signinup_modal';
import CreateQuizzeModal from './modals/create_quizze_modal';
import AppNavbar from './nodes/app_navbar';
import UserContext, { User } from './UserContext';
import MeusQuizzes from './pages/MeusQuizzes';
import QuizzePage from './pages/QuizzePage';

function App() {
  const modalRef = useRef<ModalHandles>(null);

  const [ user, setUser ] = useState<User | undefined>({
    id: 1, name: 'Dery gabaritator'
  }); // fetch from backend

  const logout = useCallback(() => {
    setUser(undefined);
  }, []);
  
  return (
    <UserContext.Provider value={{ user, logout }}>
      <BrowserRouter>
        <AppNavbar modalRef={modalRef}/>

        <AppContainer>
          <Route path='/' exact={true} component={Index} />
          <Route path='/meusquizzes' component={MeusQuizzes} />
          <Route path='/quizze/:id?' component={QuizzePage} />
        </AppContainer>
      </BrowserRouter>

      {
        user ? 
        (<CreateQuizzeModal ref={modalRef}/>) :
        (<SignInUpModal ref={modalRef}/>)
      }
      <GlobalStyle/>
    </UserContext.Provider>
  );
}

export default App;