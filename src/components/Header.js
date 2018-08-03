import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
  // Perfomance, Render Once
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  
  render() {
    return (
      <div>        
        <h1>RoboFriends</h1>
        <CounterButton color={'red'} />
      </div>
    );
  }
}

export default Header;
