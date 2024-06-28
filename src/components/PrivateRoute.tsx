// src/components/PrivateRoute.js

import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return <>{currentUser ? <Component {...rest} /> : <Navigate to='/login' />} </>;
};

export default PrivateRoute;
