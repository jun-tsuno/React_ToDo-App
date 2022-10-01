import React from "react";
import './InputBar.css';


class InputBar extends React.Component {
    state = { text: '' };

    onInputChange = (event) => {
        this.setState({ text: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.text);
    }

    render() {
        return (
            <div className="ui segment input-area">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="text-input">
                        <input type="text"
                                placeholder="Add Task"
                                onChange={this.onInputChange}
                                value={this.state.text}
                        />
                    </div>
                    <button className="ui button" type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default InputBar;