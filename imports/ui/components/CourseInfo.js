import React, {Component} from 'react';

export default class CourseInfo extends Component{
	render(){
		return(
			<li>{this.props.course.text}</li>
		);
	}
}