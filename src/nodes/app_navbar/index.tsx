import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import CreateQuizzeModal from '../../modals/create_quizze_modal';
import SignInUpModal from '../../modals/signinup_modal';
import { ModalHandles } from '../../components/modal';
import Navbar from '../../components/nav';
import { doLogout } from '../../store/actions/UserActions';
import { User } from '../../store/reducers/UserReducer';

const AppNavbar: React.FC = () => {
  const { id, name } = useSelector<any, User>(state => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const modalRef = useRef<ModalHandles>(null);

  return (<>
    <Navbar>
      <h1 className="white">Olá, { id ? name : 'visitante' }!</h1>
      <div>
      <button className="btn bg-light-purple" 
        onClick={() => modalRef.current?.open()}
      >
        Criar um quizze!
      </button>
      {
        id ?
        (<>
          <Link to="/meusquizzes" style={{ marginLeft: '10px', flex: 1 }} className="btn bg-light-purple">
            Meus Quizzes
          </Link>
          <button style={{ marginLeft: '10px' }} className="btn bg-red" 
            onClick={() => {
                dispatch(doLogout());
                history.push('/');
            }}
          >
            Desconectar
          </button>
        </>) : null
      }
      </div>
    </Navbar>
    {
      id ? 
      <CreateQuizzeModal ref={modalRef}/> :
      <SignInUpModal ref={modalRef}/>
    }
  </>);
}

export default AppNavbar;