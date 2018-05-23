import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountsUIWrapper from '../../ui/layouts/AccountsUIWrapper.js';

// route components
import {AppNavigation} from '../../ui/components/pages/AppNavigation.js';
import {Course} from '../../ui/components/pages/Course.js';
import {AddCourse} from '../../ui/components/pages/AddCourse.js';
import {SignUp} from '../../ui/components/SignUp.js';
import {Login} from '../../ui/components/Login.js';
import { withTracker } from 'meteor/react-meteor-data';
import {CourseCollection} from '../../api/courses.js';
import {Comments} from '../../api/comments.js';

//<Route component={NotFoundPage}/>

const RenderRoutes = appProps => {
	console.log(appProps)
	return (
  <BrowserRouter>
    <div>
      <header id="navbar">
      < AccountsUIWrapper />
      </header>
      <Switch>
        <Route exact path="/" render={() => <AppNavigation courses={appProps.courses}/>}/> 
        <Route name="course" path='/:id' render={(props) => <Course comments={appProps.comments} id={props.match.params.id}/>}/> 
        <Route path="/AddCourse" component={AddCourse}/>       
      </Switch>
    </div>
  </BrowserRouter>
)};
export default withTracker(() => {
  return {
    courses: CourseCollection.find({}).fetch(),
    comments: Comments.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(RenderRoutes);
