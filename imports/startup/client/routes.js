import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


// route components
import {App} from '../../ui/layouts/App.js';
import {Task} from '../../ui/components/Task.js';
import {AppNavigation} from '../../ui/components/AppNavigation.js';
import {Course} from '../../ui/components/Course.js';
import {Public} from '../../ui/components/Public.js';
import {PublicNavigation} from '../../ui/components/PublicNavigation.js';

//<Route component={NotFoundPage}/>

export const renderRoutes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/task" component={Task}/>
      <Route path="/AppNavigation" component={AppNavigation}/>
      <Route path="/Course" component={Course}/>
      <Route path="/Public" component={Public}/>
      <Route path="/PublicNavigation" component={PublicNavigation}/>
    </div>
  </BrowserRouter>
);