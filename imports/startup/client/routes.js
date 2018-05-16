import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


// route components
import {App} from '../../ui/layouts/App.js';
import {Task} from '../../ui/components/Task.js';
import {AppNavigation} from '../../ui/components/AppNavigation.js';
import {Course} from '../../ui/components/Course.js';
import {Login} from '../../ui/components/Login.js';
import {PublicNavigation} from '../../ui/components/PublicNavigation.js';

//<Route component={NotFoundPage}/>

export const renderRoutes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/task" component={Task}/>
      <Route path="/AppNavigation" component={AppNavigation}/>
      <Route path="/Course" component={Course}/>
      <Route path="/Login" component={Login}/>
      <Route path="/PublicNavigation" component={PublicNavigation}/>
    </div>
  </BrowserRouter>
);