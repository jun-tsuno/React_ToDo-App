import React from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <TaskItem description={todo} key={index} id={index} onDelete={props.onDelete}/>
    });
    return (
        <div>
            {todos}
        </div>
    )
}

export default TaskList;