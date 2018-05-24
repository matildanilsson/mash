import React, {Component} from 'react';
import {withHistory, Link} from 'react-router-dom';
 

// App component for new comment - represents a new comment
export class Comment extends Component{

    render() {
        return (
          <li>{this.props.comment.comment}</li>
        );
    }

}
