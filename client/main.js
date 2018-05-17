import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.js';
import '../imports/api/tasks.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});

