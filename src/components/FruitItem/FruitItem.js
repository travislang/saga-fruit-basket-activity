import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class FruitItem extends Component {
    removeItem = () => {
        this.props.dispatch({ type: 'DELETE_FRUIT', payload: this.props.basketItem.id})
    }

    getFruit() {
        this.props.dispatch({ type: 'FETCH_FRUIT' })
    }

    render() {
        return (
            <li>
                <span>{this.props.basketItem.fruit}</span>
                <button onClick={this.removeItem}>Remove</button>
            </li>
        )
    }
}

export default connect()(FruitItem);