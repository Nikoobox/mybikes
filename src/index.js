import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './components/store/store';
import Root from './components/root';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore({information:[], status:[], station:[]});
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
