import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { renderRoutes } from '../imports/startup/client/routes.js';

import Course from '../imports/ui/components/pages/Course.js';


Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});

