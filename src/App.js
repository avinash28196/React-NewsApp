import React, {Component} from 'react';
import './styles/App.css';
import Search from './Search.js';
import './styles/Search.css';
import Footer from './Footer.js';
import './styles/Footer.css';
import logo from './images/react.svg';
import news from './images/newspaper.png';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
      <div className="app">
      

        <Search default="cnn"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
