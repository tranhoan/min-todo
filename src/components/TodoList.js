/**
 * Created by celer on 5/16/2018.
 */
import React,{ Component } from 'react';
import TodoTask from "./TodoTask";
import '../css/task.css';
class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(props){
        this.props = props;
    }
    render(){
        let props = this.props;
        let allTasks = this.props.tasks.map(function(item,i){
            return <TodoTask taskName={item.value} taskDate={item.date} taskStatus={item.status} {...props} id={i}/>
        });

        return(
            <div className="containerTask">
                <div className="card">
                    <ul className="list">
                        { allTasks }
                    </ul>
                </div>
            </div>
        )
    }
}
export default TodoList