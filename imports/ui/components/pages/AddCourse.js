import React , {Component} from 'react';
import {withHistory, Link} from 'react-router-dom';
import { Mongo } from 'meteor/mongo';
import { CourseCollection } from '../../../api/courses.js';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

export class AddCourse extends Component{ 

    componentWillMount() {
        this.setState({
            courseName: '',
            coursePace: '',
            coursePoints: '',
            coursePeriod: '',
        });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        CourseCollection.insert({
            courseName: this.state.courseName,
            coursePace: this.state.coursePace,
            coursePoints: this.state.coursePoints,
            coursePeriod: this.state.coursePeriod,
            createdAt: new Date(),
        });
        // Find the text field via the React ref
        /*const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        console.log('text');*/
        /*CourseCollection.insert({
            text,
            createdAt: new Date(), // current time
        });*/
        
            // Clear form
        /*ReactDOM.findDOMNode(this.refs.textInput).value = '';*/
    }

    render(){
        return(
		    <div>
		        <Link to="/"><h1>Back</h1></Link>
		        <h1>Add Course</h1>

		        <form className="add-course" onSubmit={this.handleSubmit}>
		        	<input
		        		type="text"
		        		name="courseName"
                        placeholder="Add course name"
                        onChange={this.onChange}
		        	/>
                    <br></br>
		        	<input
		        		type="text"
		        		name="coursePace"
                        placeholder="Add course pace" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
		        	<input
		        		type="text"
		        		name="coursePoints"
                        placeholder="Add course points"
                        onChange={this.onChange} 
		        	/>
                    <br></br>
		        	<input
		        		type="text"
		        		name="coursePeriod"
                        placeholder="Add course period" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
                    <button>Skicka</button>
		        </form>
		    </div>
    	);

    }
}
