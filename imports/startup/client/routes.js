import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// route components
import {AppNavigation} from '../../ui/components/pages/AppNavigation.js';
import {Course} from '../../ui/components/pages/Course.js';
import {AddCourse} from '../../ui/components/pages/AddCourse.js';

//<Route component={NotFoundPage}/>

export const renderRoutes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={AppNavigation}/>
        <Route path="/Course" component={Course}/>
        <Route path="/AddCourse" component={AddCourse}/>
      </Switch>
    </div>
  </BrowserRouter>
);