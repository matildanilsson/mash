import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withHistory, Link} from 'react-router-dom';
import { Comments } from '../../../api/comments.js';
import { Mongo } from 'meteor/mongo';
import { CourseCollection } from '../../../api/courses.js';
import {Comment} from '../Comment.js';

export class Course extends Component {
    
    componentWillMount() {
        this.setState({
            courseName: '',
            coursePace: '',
            coursePoints: '',
            coursePeriod: '',
            courseLevel: '',
            courseInfo: '',
            courseInstitute: '',

            comment: '',
        });
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        //this.getDataFromDatabase = this.getDataFromDatabase(this);
        //this.getDataFromDatabase();
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        Comments.insert({
            comment: this.state.comment,
            createdAt: new Date(),
        });
    }

    renderComments = () => {
    console.log(this.props.comments)
     return this.props.comments.map((comment) => (
         <Comment key={comment._id} comment={comment} />
        ));
      }

    //getDataFromDatabase(){
    //    const course = Mongo.courses.findOne(this.props._id).then(res => {
    //        console.log(res);
    //    });
    //    
    //    this.setState({
    //        courseName: course.courseName,
    //        coursePace: '',
    //        coursePoints: '',
    //        coursePeriod: '',
    //        courseLevel: '',
    //        courseInfo: '',
    //        courseInstitute: '',
    //    });
    //}

  render() {
        return (
            <div className = "container"> 
                <div className="containerComment">
                    <header>                  
                        <h1 id="course-title-comment">Course</h1>
                        <div id = "flex-box-comment"> 
                        <p id = "course-p"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis viverra diam non justo. 
                            Aliquam erat volutpat. Curabitur sagittis hendrerit ante. Mauris suscipit, 
                            ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
                            </div>
                    </header>
                    <h1 id="course-title-comment"> Recensioner </h1>
                    <div>
                        {this.props.id}
                        <ul id="course-p">
                            {this.renderComments()}
                        </ul>
                    </div>
                    <div>
                        <form className="add-comment" onSubmit={this.handleSubmit.bind(this)}>
                            <input 
                                id = "form-comment"
                                type="text"
                                name="comment"
                                placeholder="Lägg till kommentar..."
                                onChange={this.onChange}
                            />
                            
                        </form>
                    </div>

                </div>
                
                <Link to="/" id = "add-button-comment" ><h1>Tillbaka</h1></Link>
             </div>
        );
    }
}
