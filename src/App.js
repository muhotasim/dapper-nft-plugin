import React from 'react';
import './App.css';
import Header from './components/Header';
import Mint from './components/Mint';

export default class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Header/>
        <Mint/>
      </div>
    )
  }
}
