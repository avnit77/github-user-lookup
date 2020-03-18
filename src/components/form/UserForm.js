import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
// import { fetchRepos } from '../../actions/repoActions';
import styles from './UserForm.css';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUser(username));
    // dispatch(fetchRepos(username));
  };

  return (
    <div className={styles.Form}>
      <h1>GitSearch</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Github Username" value={username} onChange={({ target }) => setUsername(target.value)} />
        <button>Git</button>
      </form>
    </div>
  );
};

export default UserForm;
