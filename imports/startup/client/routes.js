import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// route components
import {AppNavigation} from '../../ui/components/pages/AppNavigation.js';
import {Course} from '../../ui/components/pages/Course.js';
import {AddCourse} from '../../ui/components/pages/AddCourse.js';
import { withTracker } from 'meteor/react-meteor-data';
import {CourseCollection} from '../../api/courses.js';

//<Route component={NotFoundPage}/>

const RenderRoutes = appProps => {
	console.log(appProps)
	return (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={() => <AppNavigation courses={appProps.courses}/>}/> 
        <Route path="/Course" component={Course}/>
        <Route path="/AddCourse" component={AddCourse}/>
      </Switch>
    </div>
  </BrowserRouter>
)};

export default withTracker(() => {
  return {
    courses: CourseCollection.find({}).fetch(),
  };
})(RenderRoutes);

