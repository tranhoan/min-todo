/**
 * Created by celer on 5/24/2018.
 */

import React,{ Component } from 'react';
import '../css/task.css';
import {Route, Switch} from "react-router-dom";
import TodoList from "./TodoList";
import ActiveTasks from "./ActiveTasks";
import Redirect from "react-router-dom/es/Redirect";
import Completed from "./Completed";
import About from "./About";

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Switch>
            <Route path='/all' render={(props) => <TodoList {...props} {...this.props}/>}/>
            <Route path='/active' render={() => <ActiveTasks {...this.props}/>}/>
            <Route path='/completed' render={() => <Completed {...this.props}/>}/>
            <Route path='/about' component={About}/>
            <Redirect from="/" exact to="/all" />
        </Switch>)
    }
}
export default Main