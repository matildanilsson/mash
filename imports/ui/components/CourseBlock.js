import React, {Component} from 'react';
import {withHistory, Link} from 'react-router-dom';

export default class CourseBlock extends Component{

    componentWillMount() {
        this.setState({backgroundColor: ''})
        this.getBackgroundColor = this.getBackgroundColor.bind(this);
        this.getBackgroundColor();
    }

    getBackgroundColor(){
        switch(this.props.course.courseInstitute){
            case('tfe'):
                this.setState({backgroundColor: '#F2A606'})
                break;
            case('uid'):
                this.setState({backgroundColor: '#D2314C'})
                break;   
            case('cs'):
                this.setState({backgroundColor: '#7FB069'})
                break;
            case('mms'):
                this.setState({backgroundColor: '#34749E'})
                break;       
            default: 
                this.setState({backgroundColor: '#D2314C'})
        }
    }

    render(){    
        const styles = {
            containerStyle: {
              backgroundColor: this.state.backgroundColor,
            }
          };
          const { containerStyle } = styles;
 
        return(

            <div>
                <Link to={"/" + this.props.course._id}>
                    <div style={ containerStyle } className="courseBlock">
                        <div id="container-h1">
                            <h1 id="courseTitle">{this.props.course.courseName}</h1>
                        </div>
                        <hr></hr>
                        <div id="flex-box-p">
                            <p id="course-p">Studietakt: {this.props.course.coursePace}</p>
                            <p id="course-p">Läsperiod: {this.props.course.coursePoints}</p>
                            <p id="course-p">Högskolepoäng: {this.props.course.coursePeriod}</p>
                            <p id="course-p">Nivå: {this.props.course.courseLevel}</p>
                        </div>
                    </div>
                </Link>  
            </div>

        );  
    } 
}
//<Link to={"/" + this.props.course.courseName.replace(/\s+/g, '').toLowerCase()}>