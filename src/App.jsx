import {withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import React, {Component} from 'react';
import './App.css';


@withStyles({
    root: {
        backgroundColor: 'red'
    }
})
class App extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <h1>{'Welcome to test'}</h1>
            </div>
        );
    }
}

export default hot(module)(App);
