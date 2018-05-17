import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
 
export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
    
    this.toggleLogIn = this.toggleLogIn.bind(this);

      
  }
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }

  toggleLogIn(){
    /*Ändra style från display:none till display:block */
  }


  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
  }
}