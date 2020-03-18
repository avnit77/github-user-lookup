import React from 'react';

import UserForm from './form/UserForm';
import UserDetail from './detail/UserDetail';
import Header from './common/Header';

export default function App() {
  return (
    <>
      <Header />
      <UserForm />
      <UserDetail />
    </>
  );
}
