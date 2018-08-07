import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundry from './ErrorBoundry';


describe('ErrorBoundry component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ErrorBoundry><h1>hey!</h1></ErrorBoundry>);
  });
  
  it('should render the child component', () => {
    expect(wrapper.find('h1').exists()).toBeTruthy();
  });

  it('should cad an error', () => {
    wrapper.instance().componentDidCatch('nooo');
    wrapper.update();

    expect(wrapper.state()).toEqual({ hasError: true });
  });
});
