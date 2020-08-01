import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './UserForm';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Name search component', () => {
  it('render the name search', () => {
    const wrapper = shallow(<Provider store={store}><UserForm /></Provider>).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
