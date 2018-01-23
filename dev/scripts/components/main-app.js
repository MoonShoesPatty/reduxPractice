import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './login'

@connect(
    (store => {
        return {
            user: store.user
        }
    })
)
export default class MainApp extends React.Component {
    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }
}