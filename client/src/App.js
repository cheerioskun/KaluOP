import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Contact from './components/Contact';
import OrderForm from './components/OrderForm';
class App extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
        };
        this.cartHandler = this.cartHandler.bind(this);
    }
    cartHandler = (item, op) => {
        let exists = false;
        let index = -1;
        for (let i = 0; i < this.state.cart.length; i++) {
            if (item['_id'] === this.state.cart[i]['_id']) {
                exists = true;
                index = i;
                break;
            }
        }
        if (op === 'add') {
            if (exists) {
                let temp = this.state.cart;
                temp[index] = { ...temp[index], qty: temp[index]['qty'] + 1 };
                this.setState({ cart: temp });
            } else {
                let temp = this.state.cart;
                temp.push({ ...item, qty: 1 });
                this.setState({ cart: temp });
            }
        } else if (op === 'remove') {
            if (exists) {
                let temp = this.state.cart;
                temp[index]['qty']--;
                if (temp[index]['qty'] === 0) {
                    temp.splice(index, 1);
                }
                this.setState({ cart: temp });
            }
        }
    }
    render() {
        return (
            <div>
                <Landing handlers={this.cartHandler} cart={this.state.cart} />
                <Menu handlers={{ cartHandler: this.cartHandler }} />
                <OrderForm />
                <Contact />
            </div>
        );
    }
}

export default App;