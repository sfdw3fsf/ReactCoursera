import React,{Component} from 'react'
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
class App extends Component {

render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}
}

export default App;
