import { Fragment } from 'react';
import Navbar from '../components/layout/Navbar';
import Login from '../components/auth/Login';

export default function login() {
  return (
    <Fragment>
      <Navbar />
      <Login />
    </Fragment>
  );
}
