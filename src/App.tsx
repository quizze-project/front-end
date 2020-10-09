import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/FontImport.css';
import GlobalStyle from './styles/GlobalStyle';
import Index from './pages/Index';
import { AppContainer } from './styles/Containers';
import AppNavbar from './nodes/app_navbar';
import MeusQuizzes from './pages/MeusQuizzes';
import QuizzePage from './pages/QuizzePage';
import EditPage from './pages/EditPage';
import ProtectedRoute from './components/protectedroute';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppNavbar/>

        <AppContainer>
          <Switch>
            <Route path='/' exact={true} component={Index} />
            <Route path='/quizze/:id?' component={QuizzePage} />
            <ProtectedRoute path='/meusquizzes' component={MeusQuizzes} />
            <ProtectedRoute path='/edit/:id?' component={EditPage} />
          </Switch>
        </AppContainer>
      </BrowserRouter>
      <GlobalStyle/>
    </Provider>
  );
}

export default App;