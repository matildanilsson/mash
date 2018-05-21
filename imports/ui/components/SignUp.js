import React from 'react';
import {withHistory, Link} from 'react-router-dom'
import AccountsUIWrapper from '../layouts/AccountsUIWrapper.js';
import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';
import { Blaze } from 'meteor/blaze';

export const SignUp = () =>    
    <div>
        <h1>This is Sign up</h1>                
            <form>        
                <input type="email" name="signUpemail" />
                <input type="password" name="signUpPassword" />
                <input type="submit" value="SignUp" />            
            </form>
    </div>

