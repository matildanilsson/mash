import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withTracker } from 'meteor/react-meteor-data';
import {withHistory, Link} from 'react-router-dom';
import { Comments } from '../../../api/comments.js';

import Comment from '../Comment.js';


/**export const Course = () => 
    <div>  
        <Comment />
    </div>
*/
class Course extends Component {
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

    getComment() {
        return [
        { _id: 1, text: 'This is comment 1' },
        { _id: 2, text: 'This is comment 2' },
        { _id: 3, text: 'This is comment 3' },
        ];
    }
 
  render() {
      return (
       <div className="container">
          <header>
              <Link to="/"><h1>Back</h1></Link>
              <h1>Todo List</h1>
              <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
          </header>
   
          <ul>
            {this.renderComments()}
          </ul>
        </div>
      );
  }
}

export default withTracker(() => {
    return {
        comments: Comments.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
  })(Course);