//import {Mongo} from 'meteor/mongo';
import React, {Component} from 'react';
import {withHistory, Link} from 'react-router-dom';
 

// App component for new comment - represents a new comment
export class Comment extends Component{

    /**componentWillMount() {
        this.NewComment()
    }*/

    render() {
        return (
          <li>{this.props.comment.text}</li>
        );
    }

}

/** NewComment(){    
    console.log(CommentsList);   
    CommentsList.insert({name: "Dav", });
}*/