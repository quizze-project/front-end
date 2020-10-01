import React, { useCallback, useRef, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/FontImport.css';
import GlobalStyle from './styles/GlobalStyle';
import Index from './pages/Index';
import { AppContainer, LeftCardsContainer } from './styles/Containers';
import FilterCard from './nodes/filter_card';
import { ModalHandles } from './components/modal';
import SignInUpModal from './modals/signinup_modal';
import CreateQuizzeModal from './modals/create_quizze_modal';
import AppNavbar from './nodes/app_navbar';
import UserContext, { User } from './UserContext';
import GoToHomeCard from './nodes/go_to_home_card';
import MeusQuizzes from './pages/MeusQuizzes';

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
          <LeftCardsContainer>
            <FilterCard/>
            <GoToHomeCard/>
          </LeftCardsContainer>

          <Route path='/' exact={true} component={Index} />
          <Route path='/meusquizzes' exact={true} component={MeusQuizzes} />
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