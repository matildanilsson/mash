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
            courseLevel: '',
            courseInfo: '',
            courseInstitute: '',
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
            courseLevel: this.state.courseLevel,
            courseInfo: this.state.courseInfo,
            courseInstitute: this.state.courseInstitute,
            createdAt: new Date(),
        });
    }

    render(){
        return(
		    <div className="container">
             <div className="container-add-course">
                <header id="addCourseTitle">
                    <h1 id="addCourseTitleh1">Lägg till en kurs</h1>
                </header>
		        <form className="add-course" onSubmit={this.handleSubmit}>
		        	<input id = "add-course-input"
		        		type="text"
		        		name="courseName"
                        placeholder="Kursnamn"
                        onChange={this.onChange}
		        	/>
                    <br></br>
		        	<input id = "add-course-input"
		        		type="text"
		        		name="coursePace"
                        placeholder="Studietakt" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
		        	<input id = "add-course-input"
		        		type="text"
		        		name="coursePoints"
                        placeholder="Högskolepoäng"
                        onChange={this.onChange} 
		        	/>
                    <br></br>
		        	<input id = "add-course-input"
		        		type="text"
		        		name="coursePeriod"
                        placeholder="Kursperiod" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
                    <input id = "add-course-input"
		        		type="text"
		        		name="courseLevel"
                        placeholder="Nivå" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
                    <input id = "add-course-input-info"
		        		type="text"
		        		name="courseInfo"
                        placeholder="Kursinformation" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
                    <input id = "add-course-input"
		        		type="text"
		        		name="courseInstitute"
                        placeholder="Institution (tfe, mms, uid, cs)" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
                    <button id="add-button-send">Skicka</button>
		        </form>
                </div>
                <Link to="/"><h1 id="add-button-back">Tillbaka</h1></Link>
		    </div>
    	);
    }
}
