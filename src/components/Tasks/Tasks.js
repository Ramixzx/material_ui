import React from 'react';
import {useState} from "react";
import "./Tasks.css";
import Task from '../Task';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [id, setId] = useState(1);

    const addTask = (taskTitle) => {
        setTasks([{title: taskTitle, id: id}, ...tasks]);
        setId(parseInt(id) + 1);
    }

    const addOnPressEnter = (event) => {
        if (event.charCode === 13 && event.target.value !== "") {
            addTask(event.target.value)
            event.target.value = "";
        }
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    
    console.log(tasks)

    return (
        <Card className="main-card">
            <Typography align="center" variant="h1">To Do List</Typography>
            <TextField type="text" variant="standard" label="Ingresa una nueva tarea" className="task-input" onKeyPress={((event) => addOnPressEnter(event))}/>
            {<Task tasks={tasks} deleteTask={deleteTask}/>}
        </Card>
    );
}

export default ToDoList;