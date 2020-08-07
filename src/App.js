import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
    <Header />
    <Weather />
    </div>
  );
}

export default App;
