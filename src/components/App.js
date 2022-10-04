import './App.css';
import React from "react";
import InputBar from "./InputBar";
import TaskList from "./TaskList";

class App extends React.Component {
    state = {
        tasks: [],
    };

    onTaskSubmit =  async task => {
        await this.setState({
            tasks: [...this.state.tasks, task],
        });
    }

    handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({
            tasks: newArr,
        });
    }

    render() {
        return (
            <div className='container'>
                <h1 className="title">To Do List</h1>
                <h2>You have {<span>{this.state.tasks.length}</span>} tasks!</h2>
                <div className="input-bar">
                    <InputBar onFormSubmit={this.onTaskSubmit}/>
                </div>
                <div className="task-list">
                    <TaskList tasks={this.state.tasks} onDelete={this.handleDelete} />
                </div>
            </div>
        )
    }
}

export default App;