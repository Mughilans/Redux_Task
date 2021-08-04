import React from 'react'
import './App.css';
import Task from './Task'
import Store from './Store/Store'
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={Store}>
    <div>
      <Task />
    </div>
  </Provider>
)

export default App;
