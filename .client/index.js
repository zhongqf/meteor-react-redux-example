
import React from 'react';
import Root from './containers/Root';
import 'todomvc-app-css/index.css';



Template.body.onRendered(function(){
  React.render(
    <Root />,
    document.getElementById('root')
  )
});
