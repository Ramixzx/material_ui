import React from 'react';
import "./Task.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const Task = (props) => {

    return props.tasks.length > 0 
    ? props.tasks.map(task => {
        return <Card className="task-card" key={task.id}>
            <Typography variant="body1" className="task-title">{task.title}</Typography>
            <DeleteIcon className="task-delete" onClick={(() => props.deleteTask(task.id))}></DeleteIcon>
        </Card>
    })
    : <Typography variant="h3" className="no-tasks">No hay tareas. Agregar una tarea por favor.</Typography>
}

export default Task;