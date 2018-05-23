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
		    
		        <h1>Lägg till en kurs</h1>

		        <form className="add-course" onSubmit={this.handleSubmit}>
		        	<input
		        		type="text"
		        		name="courseName"
                        placeholder="Kursnamn"
                        onChange={this.onChange}
		        	/>
                    <br></br>
		        	<input
		        		type="text"
		        		name="coursePace"
                        placeholder="Studietakt" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
		        	<input
		        		type="text"
		        		name="coursePoints"
                        placeholder="Högskolepoäng"
                        onChange={this.onChange} 
		        	/>
                    <br></br>
		        	<input
		        		type="text"
		        		name="coursePeriod"
                        placeholder="Kursperiod" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
                    <input
		        		type="text"
		        		name="courseLevel"
                        placeholder="Nivå" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
                    <input
		        		type="text"
		        		name="courseInfo"
                        placeholder="Kursinformation" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
                    <input
		        		type="text"
		        		name="courseInstitute"
                        placeholder="Institution" 
                        onChange={this.onChange}
		        	/>
                    <br></br>
                    <button>Skicka</button>
		        </form>
                <Link to="/"><h1>Tillbaka</h1></Link>
		    </div>
    	);
    }
}
