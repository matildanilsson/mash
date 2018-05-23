import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import AccountsUIWrapper from '../../layouts/AccountsUIWrapper.js';
import { withTracker } from 'meteor/react-meteor-data';
import { CourseCollection } from '../../../api/courses.js';
import CourseInfo from '../CourseInfo.js';
import CourseBlock from '../CourseBlock';

// export const AppNavigation = ({courses}) => {
// console.log(courses);
// console.log(courses._id);

export class AppNavigation extends Component {

  renderCourses = () => {
    const { courses } = this.props

    let coursesToRender = courses.map(course => {
      return (
       
          <CourseBlock key={course._id} course={course} />
  
      )
    })

    return coursesToRender
  }

  render() {
    return (
      <div className="container">                  
        <div className="appNavContainer">
          

          {this.renderCourses()}
        </div>
        <Link to="/AddCourse"><h1>Lägg till kurs</h1></Link> 
      </div>
    );
  }
}
