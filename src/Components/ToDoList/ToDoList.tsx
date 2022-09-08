import React, { useState } from "react";
import CreateTask from "../CreateTask/CreateTask";
import ViewTasks from "../ViewTasks/ViewTasks";
import "./ToDoList.css"

const ToDoList : React.FC= () => {

const tasks =[
    {id:1,
    task:"Do Homework"},
    {id:2,
    task:"Shopping"}
];

const [allTasks,setAllTasks] = useState<{id:number,task:string}[]>(tasks);

const addTask = (task:string) =>{
     setAllTasks( (prev) => 
     [{id:Math.random(),task:task}, ...prev]);
   
};
const deleteTask = (id:number) => {
setAllTasks((prev) => 
[...prev].filter((task)=> task.id !==id));
}

return (
<div className="ToDoList">
<div className="title">To Do List</div>
<CreateTask addTask = {addTask}/>
<ViewTasks tasks={allTasks} deleteTask={deleteTask} />

    </div>
)
}

export default ToDoList;