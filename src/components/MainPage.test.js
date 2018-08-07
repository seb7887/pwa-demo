import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage component', () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false,
    }
    wrapper = shallow(<MainPage {...mockProps}/>);
  });
  
  it('expect to render MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'Jon',
        email: 'jon@gmail.com',
      }],
      searchField: 'jon',
      isPending: false,
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toEqual([{
      id: 3,
      name: 'Jon',
      email: 'jon@gmail.com',
    }]);
  });

  it('renders Loading is isPending is true', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'Jon',
        email: 'jon@gmail.com',
      }],
      searchField: 'jon',
      isPending: true,
    }
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.find('h1').exists()).toBeTruthy();
  });
});