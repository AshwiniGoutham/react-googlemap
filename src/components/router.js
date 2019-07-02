import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import PredictionDate from './prediction-view/new-prediction-date';

const Router = () => 
    <Switch>  
        <Route exact path="/home" component={Home} />
        <Route exact path="/checkploughingdate" component={PredictionDate} /> 
        <Route exact path="/history" component={Home} />   
        <Route exact path="/about" component={About} /> 
        <Route exact path="/logout" component={About} />       
    </Switch>

export default Router;