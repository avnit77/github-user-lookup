import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findUser } from '../../actions/userActions';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(findUser(username));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
