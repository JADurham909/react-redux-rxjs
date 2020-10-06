import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { combineAction } from './redux/modules/actions';

const App = (props: any) => {

  props.combineAction({ test: 1});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => { 
  return bindActionCreators({ combineAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
