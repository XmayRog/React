import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../src/components/MenuComponent';
import './App.css';

class App extends Component {

  render() {
    return (
    <div className="App">
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href="/">Check out public</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
  }
}

export default App;
