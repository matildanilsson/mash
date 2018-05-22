import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import RenderRoutes from '../imports/startup/client/routes.js';
import '../imports/api/courses.js';
import React from 'react';


Meteor.startup(() => {
  render(<RenderRoutes />, document.getElementById('render-target'));
});

