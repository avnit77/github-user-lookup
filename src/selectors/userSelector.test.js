import { isLoadingUser, selectUser } from './userSelectors';


describe('user info selectors', () => {
  it('selects the user loading state', () => {
    const state = {
      user: {
        loading: true,
        user: null
      }
    };

    const loading = isLoadingUser(state);
    expect(loading).toEqual(true);
  });

  it('selects the user from state', () => {
    const state = {
      user: {
        loading: true,
        user: {
          name: 'Me',
          repos: 'so many'
        }
      }
    };

    const user = selectUser(state);

    expect(user).toEqual(
      {
        name: 'Me',
        repos: 'so many'
      }
    );
  });
});
