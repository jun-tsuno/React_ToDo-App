import './App.css';
import React from "react";
import InputBar from "./InputBar";
import TaskList from "./TaskList";

class App extends React.Component {
    state = {
        tasks: []
    }

    addTask =  async task => {
        const newTasks = [...this.state.tasks, {taskDescription: task, complete: false}]
        await this.setState({tasks: newTasks});
    }

    handleDone = (index) => {
        let newArr = [...this.state.tasks];
        const isDoneTask = newArr[index]
        isDoneTask.complete = !isDoneTask.complete

        this.setState({
            tasks: newArr
        })
    }

    handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1)
        this.setState({
            tasks: newArr
        });
    }

    render() {
        let tasksLeft = 0;
        this.state.tasks.forEach(task => {
            !task.complete && tasksLeft++
        })

        return (
            <div className='container'>
                <h1 className="title">To Do List</h1>
                <h2>You have <span>{tasksLeft}</span> tasks!</h2>
                <div className="input-bar">
                    <InputBar onFormSubmit={this.addTask}/>
                </div>
                <div className="task-list">
                    <TaskList   tasks={this.state.tasks}
                                onDelete={this.handleDelete}
                                onDone={this.handleDone}
                    />
                </div>
            </div>
        )
    }
}

export default App;