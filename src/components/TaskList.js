import React from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {

    const todos = props.tasks.map((todo, index) => {
        return <TaskItem    description={todo.taskDescription}
                            key={index}
                            id={index}
                            onDelete={props.onDelete}
                            onDone={props.onDone}
                            complete={todo.complete}
                />
    });

        return (
            <div>
                {todos}
            </div>
        );
}

export default TaskList;