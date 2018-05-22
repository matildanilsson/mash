import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withHistory, Link} from 'react-router-dom';
import { Comments } from '../../../api/comments.js';

import {Comment} from '../Comment.js';

export class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleSubmit(event) {
        event.preventDefault();
     
        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
     
        Tasks.insert({
          text,
          createdAt: new Date(), // current time
        });
     
        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
      }

    renderComments() {
        return this.props.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
        ));
    }

 
  render() {
      return (
       <div className="container">
          <header>
              <Link to="/SignUp"><h1>TotallyBack</h1></Link>
              <h1>Course</h1>
          </header>
          <div>
              This is course info
          </div>
          <div>
              This is comments
              <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new comment"
            />
          </form>
          </div>
          <ul>
            {this.renderComments()}
          </ul>
        </div>
      );
  }
}
