import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/twitters" component={Twitters} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
    
);

export default Root;
