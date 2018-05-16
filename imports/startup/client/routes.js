import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


// route components
import {App} from '../../ui/layouts/App.js';
import {Task} from '../../ui/components/Task.js';

//<Route component={NotFoundPage}/>

export const renderRoutes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/task" component={Task}/>
    </div>
  </BrowserRouter>
);