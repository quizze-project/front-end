import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModalHandles } from '../../components/modal';
import Navbar from '../../components/nav';
import UserContext from '../../UserContext';

interface Props {
  modalRef: React.RefObject<ModalHandles>
}

const AppNavbar: React.FC<Props> = ({ modalRef }) => {
  const userContext = useContext(UserContext);

  return (
    <Navbar>
      <h1 className="white">Olá, { userContext.user ? userContext.user.name : 'visitante' }!</h1>
      <div>
      <button className="btn bg-light-purple" 
        onClick={() => modalRef.current?.open()}
      >
        Criar um quizze!
      </button>
      {
        userContext.user ?
        (<>
          <Link to="/meusquizzes" style={{ marginLeft: '10px', flex: 1 }} className="btn bg-light-purple">
            Meus Quizzes
          </Link>
          <button style={{ marginLeft: '10px' }} className="btn bg-red" 
            onClick={() => userContext.logout()}
          >
            Desconectar
          </button>
        </>) : null
      }
      </div>
    </Navbar>
  );
}

export default AppNavbar;