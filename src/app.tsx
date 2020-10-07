import React from 'react';
import './app.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actionCreators from './redux/modules/actions';
import logo from './logo.svg';

const App = (props: any) => {
  const { authStartAction, playAction, combineAction } = props;

  combineAction({ test: 1 });
  authStartAction();
  playAction({ test: 5 });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
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
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(App);
