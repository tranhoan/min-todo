/**
 * Created by celer on 5/26/2018.
 */
/**
 * Created by celer on 5/24/2018.
 */

import React,{ Component } from 'react';
import '../css/task.css';
import TodoTask from "./TodoTask";

class Completed extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let props = this.props;
        let completedTasks = this.props.tasks.filter(task => task.status === 'finished');
        let renderCompleted = completedTasks.map(function(item){
            return <TodoTask taskName={item.value} taskDate={item.date} taskStatus={item.status} {...props}/>
        });
        return(
            <div className="containerTask">
                <div className="card">
                    <ul className="list">
                        { renderCompleted }
                    </ul>
                </div>
            </div>)
    }
}
export default Completed