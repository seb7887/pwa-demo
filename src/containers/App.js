import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// parameter state comes from index.js provider store state
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
};

// dispatch the DOM changes to call an action
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  }
};

class App extends Component {  

  componentDidMount() {
    this.props.onRequestRobots();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });    
  }

  render() {   
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          { isPending ? <h1>Loading...</h1> :
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);