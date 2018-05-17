import React, { Component } from 'react';
import {withHistory, Link} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.js';

class App extends Component{ 
    render(){
        return (
            <div className="container">
                <h1>Hello world</h1>
                <AccountsUIWrapper />
            </div>
        );
    }    
}
    
