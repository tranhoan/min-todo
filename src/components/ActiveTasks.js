/**
 * Created by celer on 5/26/2018.
 */
import React,{ Component } from 'react';
import TodoTask from "./TodoTask";
import '../css/task.css';

class ActiveTasks extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let props = this.props;
        let activeTasks = this.props.tasks.filter(task => task.status === 'active');
        let renderActive = activeTasks.map(function(item){
            return <TodoTask taskName={item.value} taskDate={item.date} taskStatus={item.status} {...props}/>
        });
        return(
        <div className="containerTask">
            <div className="card">
                <ul className="list">
                    { renderActive }
                </ul>
            </div>
        </div>)
    }
}
export default ActiveTasks;