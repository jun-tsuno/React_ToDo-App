import React from "react";
import InputBar from "./InputBar";
import TaskList from "./TaskList";

class App extends React.Component {
    state = { text: '' };

    onTaskSubmit = (task) => {
        this.setState({
            text: task
        })

        console.log(this.state.text)
    }

    render() {
        return (
            <div>
                <h1 className="title">To Do List</h1>
                <InputBar onFormSubmit={this.onTaskSubmit}/>
                <TaskList />
            </div>
        )
    }
}

export default App;