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
                    </header>
                    <div>
                        {this.props.id}
                        <ul>
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
