import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withHistory, Link } from 'react-router-dom';
import { Comments } from '../../../api/comments.js';
import { Mongo } from 'meteor/mongo';
import { CourseCollection } from '../../../api/courses.js';
import { Comment } from '../Comment.js';
import { log } from 'util';
import { loadavg } from 'os';

export class Course extends Component {

    componentWillMount() {

        this.setState({
   
            comment: '',
        });

    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        Comments.insert({
            comment: this.state.comment,
            courseId: this.props.course._id,
            createdAt: new Date(),
        });
    }

    renderComments = () => {
        return this.props.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
        ));
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="containerComment">
                    <header>
                        <h1 id="course-title-comment">{this.props.course.courseName}</h1>
                    </header>
                    <div id="flex-box-p">
                        <p id="course-p">{this.props.course.coursePace}</p>
                        <p id="course-p">{this.props.course.coursePoints}</p>
                        <p id="course-p">{this.props.course.coursePeriod}</p>
                        <p id="course-p">{this.props.course.courseLevel}</p>
                        <p id="course-p">{this.props.course.courseInfo}</p>
                    <div className="containerComment">
                        <ul id="comment-ul-p">
                            {this.renderComments()}
                        </ul>
                    </div>   
                    </div>        
 
                    <div>
                        <form className="add-comment" onSubmit={this.handleSubmit.bind(this)}>
                            <input
                                type="text"
                                name="comment"
                                placeholder="Lägg till kommentar..."
                                onChange={this.onChange.bind(this)}
                            />
                        </form>
                    </div>
                </div>
                <Link to="/" id="add-button-comment" ><h1>Tillbaka</h1></Link>
            </div>
        );
    }
}
