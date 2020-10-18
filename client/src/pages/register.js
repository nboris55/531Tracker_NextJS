import { Fragment } from 'react';
import Navbar from '../components/layout/Navbar';
import Register from '../components/auth/Register';

export default function register() {
  return (
    <Fragment>
      <Navbar />
      <Register />
    </Fragment>
  );
}
