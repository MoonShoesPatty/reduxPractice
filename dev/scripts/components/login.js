import React from 'react'
import { connect } from 'react-redux'

import { getUser } from '../actions/get-user'

@connect(
    (store => {
        return {
            user: store.getUser.user
        }
    })
)

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        this.clicker = this.clicker.bind(this);
    }
    componentDidMount() {
        const person = 'PattyJay';
        this.props.dispatch(getUser('person'));
    }
    clicker(e) {
        e.preventDefault();
        
        const person = Math.floor(Math.random() * 10).toString();
        
        console.log(this.props.user, person);
        
        this.props.dispatch(getUser(person));
    }
    render() {
        return (
            <div>
                <p>HEYOOOOOO</p>
                <p>{this.props.user}</p>
                <a href="" onClick={this.clicker}>AAAAAAAA</a>
            </div>
        )
    }
}