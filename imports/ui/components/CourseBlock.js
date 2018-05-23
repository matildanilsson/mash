import React, {Component} from 'react';
import {withHistory, Link} from 'react-router-dom';

export default class CourseBlock extends Component{

    componentWillMount(){
        console.log(this.props.course.courseName);
    }

    render(){       
        return(
            <div className="courseBlock">
                <p>{this.props.course.courseName}</p>
                <p>{this.props.course.coursePace}</p>
                <p>{this.props.course.coursePoints}</p>
                <p>{this.props.course.coursePeriod}</p>
            </div>
        );  
    } 
}
