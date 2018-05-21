import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountsUIWrapper from '../../ui/layouts/AccountsUIWrapper.js';

// route components
import {AppNavigation} from '../../ui/components/pages/AppNavigation.js';
import {Course} from '../../ui/components/pages/Course.js';
import {AddCourse} from '../../ui/components/pages/AddCourse.js';
import {SignUp} from '../../ui/components/SignUp.js';
import {Login} from '../../ui/components/Login.js';

//<Route component={NotFoundPage}/>

export const renderRoutes = () => (
  <BrowserRouter>
    <div>
      <header id="navbar">
      < AccountsUIWrapper />
      </header>
      <Switch>
        <Route exact path="/" component={AppNavigation}/>
        <Route path="/Course" component={Course}/>
        <Route path="/AddCourse" component={AddCourse}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Login" component={Login}/>
      </Switch>
    </div>
  </BrowserRouter>
);

