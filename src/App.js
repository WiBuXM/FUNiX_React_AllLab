import { DISHES } from './shared/dishes';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Component} from "react";
import React from 'react'
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
 
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} />
                <Main />
            </div>
        );
    }
}

export default App;