import React , {Component} from 'react';
import {withHistory, Link} from 'react-router-dom';
import { Mongo } from 'meteor/mongo';
import CourseCollection from '../../../api/courses.js';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

export class AddCourse extends Component{ 

	handleSubmit(){
	    const CourseName = ReactDOM.findDOMNode(this.refs.coursName).value.trim();
	    const CourseCode = ReactDOM.findDOMNode(this.refs.CoursCode).value.trim();
	    const CoursePace = ReactDOM.findDOMNode(this.refs.CoursPace).value.trim();
	    const CoursePoints = ReactDOM.findDOMNode(this.refs.CoursPoints).value.trim();
	    const CoursePeriod = ReactDOM.findDOMNode(this.refs.CoursPeriod).value.trim();

	    CourseCollection.insert({
	      CourseName,
	      CourseCode,
	      CoursePace,
	      CoursePoints,
	      CoursePeriod,
	      createdAt: new Date(),
	    });
	    
	}

    render(){
        return(
		    <div>
		        <Link to="/"><h1>Back</h1></Link>
		        <h1>Add Course</h1>

		        <form className="addcourse" onSubmit={this.handleSubmit.bind(this)}>
		        	<input
		        		type="CourseName"
		        		reference="coursName"
		        		placeholder="Add course name" 
		        	/>
		        	<input
		        		type="CourseCode"
		        		reference="courseCode"
		        		placeholder="Add course code" 
		        	/>
		        	<input
		        		type="CoursePace"
		        		reference="coursePace"
		        		placeholder="Add course pace" 
		        	/>
		        	<input
		        		type="CoursePoints"
		        		reference="coursePoints"
		        		placeholder="Add course points" 
		        	/>
		        	<input
		        		type="CoursePeriod"
		        		reference="coursePeriod"
		        		placeholder="Add course period" 
		        	/>
		        </form>
		    </div>
    	);

    }
}
