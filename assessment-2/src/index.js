import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainContainer from './containers/MainContainer';
import store from './store';

const Index = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));