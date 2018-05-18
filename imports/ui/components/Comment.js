import {Mongo} from 'meteor/mongo';
import React, {Component} from 'react';
import {withHistory, Link} from 'react-router-dom';
 

export class Comment extends Component{

    componentWillMount() {
        this.NewComment()
    }

      
    NewComment(){    
        CommentsList = new Mongo.Collection('comments');
        console.log(CommentsList);   
        CommentsList.insert({name: "Dav", });
    }
    
    render(){
        return(
            <div>
                <h1>This is Comments</h1>

            </div>
        );  
    } 
}