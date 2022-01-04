import React from 'react';
import "./ToDoList.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import DeleteIcon from "@material-ui/icons/Delete";

const ToDoList = () => {
    return (
        <Card className="main-card">
            <Typography align="center" variant="h1">To Do List</Typography>
            <TextField id="task-input" type="text" variant="standard" label="Ingresa una nueva tarea" className="task-input"/>
            <Card className="task-card">
                <Typography variant="body1" className="task-title">Texto</Typography>
                <DeleteIcon className="task-delete"></DeleteIcon>
            </Card>
        </Card>
    );
}

export default ToDoList;