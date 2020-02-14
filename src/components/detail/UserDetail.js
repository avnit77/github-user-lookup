import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../selectors/userSelectors';
import { fetchUser } from '../../actions/userActions';

const UserDetail = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(fetchUser(username));
  }, []);


  return (
    <section>
      <h1>{user.name}</h1>
      <p>{user.followers}</p>
      <p>{user.following}</p>
    </section>
  );
};

export default UserDetail;
