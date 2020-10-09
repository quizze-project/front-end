import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { User } from '../../store/reducers/UserReducer';

interface Props extends RouteProps {
  component: any;
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { id } = useSelector<any, User>(state => state);

  return (
    <Route
      { ...rest }
      render={props => id ? <Component {...props} /> : (<Redirect to='/' />)}
    />
  );
}

export default ProtectedRoute;