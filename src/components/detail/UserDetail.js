import React from 'react';
import Loading from '../common/Loading';
import { useSelector } from 'react-redux';
import { isLoadingUser, selectUser } from '../../selectors/userSelectors';
import styles from './UserDetail.css';

const UserDetail = () => {
  const loading = useSelector(isLoadingUser);
  const user = useSelector(selectUser);

  if(loading) return <Loading />;

  const toRender = user ?

    <section className={styles.User}>
      <a href={user.url} target="blank"><img src={user.avatar_url} /></a>
      <h4>{user.name}</h4>
      <h6>{user.login}</h6>
      <div>
        <div>
          <p>Followers:</p>
          <p >{user.followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p>{user.following}</p>
        </div>
      </div>
      <pre>{user.bio}</pre>
    </section> : <div style={{ height: '100vh', display: 'block', margin: 'auto', color: 'white' }}></div>;

  return (
    <section>
      {toRender}
    </section>
  );
};

export default UserDetail;
