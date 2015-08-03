
import React from 'react';
import App from './containers/App';
import 'todomvc-app-css/index.css';



Template.body.onRendered(function(){
  React.render(
    <App />,
    document.getElementById('root')
  )
});
