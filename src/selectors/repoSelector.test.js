
import { isLoadingRepos, getRepos } from './repoSelector';


describe('repo selector', () => {
  it('selects the userRepos loading state', () => {
    const state = {
      repo: {
        loading: true
      }
    };
    const loading = isLoadingRepos(state);
    expect(loading).toEqual(true);
  });

  it('selects the user repos from state', () => {
    const state = {
      repo: {
        userRepos: [{ id: '123', name: 'the name' }, { id: '234', name: 'the other name' }]
      }
    };
    const userRepos = getRepos(state);
    expect(userRepos).toEqual(
      [{ id: '123', name: 'the name' }, { id: '234', name: 'the other name' }]
    );
  });
});
