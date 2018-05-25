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
import {filter, find, propEq} from 'ramda';

//<Route component={NotFoundPage}/>

const getCourse = (courses, id) =>
  find(propEq('_id', id),courses)

const getComments = (comments, courseId) =>
  filter(propEq('courseId', courseId),comments)


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
  {/*<Route path="/Course" render={() => <Course comments={appProps.comments}/>}/>*/} 
        <Route path="/AddCourse" component={AddCourse}/>
        <Route path='/:id' render={(props) => <Course comments={getComments(appProps.comments, props.match.params.id)} course={getCourse(appProps.courses, props.match.params.id)}/>}/>      
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
