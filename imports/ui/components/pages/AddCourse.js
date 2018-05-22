import React , {Component} from 'react';
import {withHistory, Link} from 'react-router-dom';
import { Mongo } from 'meteor/mongo';
import CourseCollection from '../../../api/courses.js';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

export class AddCourse extends Component{ 

	handleSubmit(){


	}

    render(){
        return(
		    <div>
		        <Link to="/"><h1>Back</h1></Link>
		        <h1>Add Course</h1>

		        <form className="add-course" onSubmit={this.handleSubmit.bind(this)}>
		        	<input
		        		type="text"
		        		reference="course-name"
		        		placeholder="Add course name" 
		        	/>
		        	<input
		        		type="text"
		        		reference="course-pace"
		        		placeholder="Add course pace" 
		        	/>
		        	<input
		        		type="text"
		        		reference="course-points"
		        		placeholder="Add course points" 
		        	/>
		        	<input
		        		type="text"
		        		reference="course-period"
		        		placeholder="Add course period" 
		        	/>
		        </form>
		    </div>
    	);

    }
}
