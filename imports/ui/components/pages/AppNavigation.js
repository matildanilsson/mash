import React, {Component} from 'react';
import {withHistory, Link} from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import {CourseCollection} from '../../../api/courses.js';
import CourseInfo from '../CourseInfo.js';

export const AppNavigation = ({courses}) => {
	console.log(courses)
	return (<div>
        <Link to="/"><h1>Back</h1></Link>
        {courses.map(course => <li>{course.text}</li>)}

    </div>);
} 

// const AppNavigation = () => (
// 		<div>
// 			<h1>hello world</h1>
// 			{courses.map(course => <li>{course.text}</li>)}
// 		</div>
// 	)

// export default AppNavigation

// renderCourse(){
// 	return this.props.courses.map((course) => 
//  		<CourseInfo key={course._id} course={course} />
// 	); 
// }


// export class AppNavigation extends Component{ 

// 	// renderCourse(){
// 	// 	return this.props.courses.map((course) => (
// 	// 		<CourseInfo key={course._id} course={course} />
// 	// 	)); 
// 	// }

//     render(){
//         return(
//         	<div>
//         		<h1>
//         			Hello!
//         		</h1>
//         	</div>

//     	);
//     }
//}

// export default withTracker(() => {
//   return {
//     courses: CourseCollection.find({}).fetch(),
//   };
//   console.log("helo")
// })(AppNavigation);