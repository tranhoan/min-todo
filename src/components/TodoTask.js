/**
 * Created by celer on 5/16/2018.
 */
import React,{ Component } from 'react';
import '../css/task.css';
import MdCheckCircle from 'react-icons/lib/md/check-circle';
import MdCancel from 'react-icons/lib/md/cancel';
class TodoTask extends React.Component{
    constructor(props){
        super(props);
        this.state={
            crossedOut : false,
        }
    }
    //checks task status before rendering
    componentDidMount(){
        console.log("mounting.............");
        console.log("mount status " + this.props.taskStatus);
        console.log("with name" + this.props.taskName);
        if(this.props.taskStatus === 'finished'){
            this.setState({
                crossedOut: true
            })
        }
    }
    //crosses out task and plays sound effect
    finishTask = () =>{
        this.props.finishTask(this.props.taskDate);
        this.done.play();
    };

    render(){
        let crossedOut = (this.props.taskStatus==='finished') ? 'line-through' : 'none';
        return(
            <li className="waves-effect">
                <div className="valign-wrapper">
                    <div className="title flex-container">
                        <div>
                            <audio ref={(done) => { this.done = done; }}>
                                <source src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3" type="audio/mpeg">
                                </source>
                            </audio>
                        <MdCheckCircle className='doneIcon' size={42} onClick={() => {this.finishTask()}}/>
                            <span className="taskText" style={{textDecoration: crossedOut}}>{this.props.taskName}</span>
                        </div>
                        <MdCancel className='deleteIcon' size={42} onClick={() => {this.props.deleteTask(this.props.taskDate)}}/>
                    </div>
                </div>
            </li>
        )
    }
}
export default TodoTask