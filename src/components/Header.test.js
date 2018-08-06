import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('expect to render Header component', () => {    
    expect(shallow(<Header />)).toMatchSnapshot();
  });
  it('expect not to be updated', () => {
    const comp = shallow(<Header />);
    const shouldUpdate = comp.instance().shouldComponentUpdate();
    expect(shouldUpdate).toBe(false);
  });
});
