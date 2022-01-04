import React from 'react';
import {useState} from "react";
import "./ToDoList.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Task from '../Task';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskTitle) => {
        setTasks([{title: taskTitle, id: tasks.length + 1}, ...tasks]);
    }

    const onPressEnter = (event) => {
        if (event.charCode === 13 && event.target.value !== "") {
            addTask(event.target.value)
            event.target.value = "";
        }
    }

    console.log(tasks);
    
    return (
        <Card className="main-card">
            <Typography align="center" variant="h1">To Do List</Typography>
            <TextField type="text" variant="standard" label="Ingresa una nueva tarea" className="task-input" onKeyPress={((event) => onPressEnter(event))}/>
            <Task tasks={tasks}/>
        </Card>
    );
}

export default ToDoList;