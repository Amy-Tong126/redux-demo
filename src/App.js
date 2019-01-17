import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';

class App extends Component {
    onIncrement=()=>{
        let action={type:"INCREMENT"};
        store.dispatch(action);
        console.log(store.getState());
    };
    onDecrement=()=>{
        let action={type:"DECREMENT"};
        store.dispatch(action)
    };

  render() {
    return (
      <div className="App">
        <h2>Counter</h2>
        <h2>{store.getState()}</h2>
          <button onClick={this.onIncrement}>+</button>
          <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default App;
