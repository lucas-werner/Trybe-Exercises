import React from 'react';
import logo from './logo.svg';
import './App.css';

const tasks = ['ir ao supermercado', 'tomar banho', 'codar', 'cortar o cabelo']
const App = () => (
<ul> { tasks.map(task => <li>{task}</li>)}</ul>)
  

export default App;
