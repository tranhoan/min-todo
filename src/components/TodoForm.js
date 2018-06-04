/**
 * Created by celer on 5/16/2018.
 */
import React,{ Component } from 'react';
import '../css/todoForm.css';
class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tasks: [],
        }
    }

    //adds new task upon submitting form
    addTask = (e) =>{
       if(this._inputElement.value !== ""){
           let newTask = {
               value: this._inputElement.value,
               date: Date.now(),
               status: "active"
           };
           this.props.updateTaskArray(newTask);
           this._inputElement.value="";
       }
       e.preventDefault();

    };
    // Prevents default behavior (Prevents file from being opened)
    dragOverHandler = (ev)=>{
        console.log('File(s) in drop zone');

        ev.preventDefault();
    };
    //removes drag data
    removeDragData=(ev)=>{
        console.log('Removing drag data');

        if (ev.dataTransfer.items) {
            // Uses DataTransferItemList interface to remove the drag data
            ev.dataTransfer.items.clear();
        } else {
            // Uses DataTransfer interface to remove the drag data
            ev.dataTransfer.clearData();
        }
    };
    //reads files name on drop
    dropHandler = (ev) =>{
        console.log('File(s) dropped');

        // Prevents default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            // Uses DataTransferItemList interface to access the file(s)
            for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === 'file') {
                    let file = ev.dataTransfer.items[i].getAsFile();
                    console.log('... file[' + i + '].name = ' + file.name);
                    this._inputElement.value = this._inputElement.value + file.name;
                }
            }
        } else {
            // Uses DataTransfer interface to access the file(s)
            for (let i = 0; i < ev.dataTransfer.files.length; i++) {
                console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
            }
        }

        // Passes event to removeDragData for cleanup
        this.removeDragData(ev);
    };
    render(){
        return(
            <div className="container">
                <form className="form" onSubmit={this.addTask}>
                    <fieldset className="form-fieldset ui-input __first" onDrop={this.dropHandler} onDragOver={this.dragOverHandler}>
                        <input type="text" id="username" placeholder="What needs to be done?"  autoComplete="off" ref={(a) => this._inputElement = a} />
                        <label htmlFor="username">
                            <span data-text="Todo">Todo</span>
                        </label>
                    </fieldset></form>
            </div>
        )
    }
}
export default TodoForm;