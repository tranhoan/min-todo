import React, { Component } from 'react';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Main from "./components/Main";
let menuList = [
    {name: "View all", isActive: false, dataDedata: "0px"},
    {name: "Active", isActive: false, dataDedata: "25%"},
    {name: "Completed", isActive: false,  dataDedata:"50%"},
    {name: "About", isActive: false,  dataDedata: "75%"}
];
class App extends Component {
  constructor(props){
      super(props);
      this.state={
          activeTab: menuList[0],
          divMargin: 0,
          tasks: [],
          isTaskCrossed: false
      }
  }
  //listens for route changes and sets the active tab in nav bar
  componentDidUpdate(prevProps) {
    if (this.props.pathname !== prevProps.pathname) {
        this.setActiveTab();
     }
   }
  //sets state to locaStorage value of tasks before rendering
  componentDidMount(){
      this.setActiveTab();
      if(localStorage["tasks"]){
          this.setState({
              tasks: JSON.parse(localStorage.getItem("tasks"))
          })
      }
      else{
          this.setState({
              tasks: []
          })
      }
  }
  //sets active tab state depending on the route
  setActiveTab = () =>{
      let initialTab = '';
      switch(this.props.pathname){
          case '/all':
              initialTab = menuList[0];
              break;
          case '/active':
              initialTab = menuList[1];
              break;
          case '/completed':
              initialTab = menuList[2];
              break;
          case '/about':
              initialTab = menuList[3];
              break;
          default:
              initialTab = menuList[0];
      }
      this.setState({
          activeTab: initialTab,
          divMargin: initialTab.dataDedata
      });
  };
  //activates tab in nav bar
  handleClick = (tab) =>{
      this.setState({activeTab: tab,divMargin: tab.dataDedata});
  };

  //sets object property of status
  finishTask = (id) =>{
    let storage = JSON.parse(localStorage.getItem("tasks"));
    let taskStatus = 0;
    let newStorage = storage.map(task =>{
        if(task.date === id) {
            let isActive = task.status === 'active';
            task = {...task, status: isActive ? 'finished' : 'active'};
            taskStatus = task.status;
        }
        return task;
    });
    localStorage.setItem("tasks",JSON.stringify(newStorage));
    this.setState({
        tasks: newStorage,
    });
    return taskStatus;
  };

  //deletes task by updating state
  deleteTask = (id) =>{
    let newTasks = this.state.tasks.filter(task => task.date !== id);
    this.setState({
        tasks: newTasks,
    }, localStorage.setItem("tasks", JSON.stringify(newTasks)))
  };

  //adds new tasks by updating state
  updateTasks = (taskToAdd) =>{
      this.setState({
          tasks: this.state.tasks.concat(taskToAdd)
      }, () => {
          let allTasks = JSON.stringify(this.state.tasks);
          localStorage.setItem("tasks", allTasks);
      });
  };

  render() {
    return (
        <div>
            <Header activeTab={this.state.activeTab} changeTab={this.handleClick} menuList={menuList} marginLeft={this.state.divMargin}/>
            <TodoForm updateTaskArray={this.updateTasks}/>
            <Main {...this.state} deleteTask={this.deleteTask} finishTask={this.finishTask} setActiveTab={this.setActiveTab}/>
        </div>);
  }
}

export default App;
