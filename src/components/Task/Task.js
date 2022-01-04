import React from 'react';
import "./Task.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const Task = props => {
    
    return props.tasks.lenght > 0 
    ? props.tasks.forEach(task => {
        <Card className="task-card">
            <Typography variant="body1" className="task-title">{task.title}</Typography>
            <DeleteIcon className="task-delete"></DeleteIcon>
        </Card>
    })
    : <Typography variant="h3" className="no-tasks">No hay tareas. Agregar una tarea por favor.</Typography>
}

export default Task;