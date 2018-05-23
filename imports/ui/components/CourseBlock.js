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
        console.log(this.state.backgroundColor);   
        return(
            <div style={ containerStyle } className="courseBlock">
                <p>{this.props.course.courseName}</p>
                <p>{this.props.course.coursePace}</p>
                <p>{this.props.course.coursePoints}</p>
                <p>{this.props.course.coursePeriod}</p>
                <p>{this.props.course.courseLevel}</p>
            </div>
        );  
    } 
}
