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
                <header>
                    <h1>{this.props.course.courseName}</h1>
                </header>
                <div>
                    <p>{this.props.course.coursePace}</p>
                    <p>{this.props.course.coursePoints}</p>
                    <p>{this.props.course.coursePeriod}</p>
                    <p>{this.props.course.courseLevel}</p>
                    <p>{this.props.course.courseInfo}</p>
                    <ul>
                        {this.renderComments()}
                    </ul>
                </div>
                <div>
                    <form className="add-comment" onSubmit={this.handleSubmit.bind(this)}>
                        <input
                            type="text"
                            name="comment"
                            placeholder="Lägg till kommentar..."
                            onChange={this.onChange.bind(this)}
                        />
                        <button>Skicka</button>
                    </form>
                    <Link to="/"><h1>Tillbaka</h1></Link>
                </div>
            </div>
        );
    }
}
