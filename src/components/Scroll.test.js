import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll component', () => {
  it('expect to render Scroll component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
  });
});
