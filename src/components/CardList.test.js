import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('CardList component', () => {
  it('expect to render CardList component', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'Jon Snow',
        username: 'JohnJohn',
        email: 'jon@gmail.com',
      }
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
