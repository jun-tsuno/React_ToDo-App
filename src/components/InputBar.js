import './InputBar.css';
import React from "react";


class InputBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.state.term === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className="ui segment input-area">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="text-input">
                        <input type="text"
                                placeholder="Add Task"
                                onChange={this.onInputChange}
                                value={this.state.term}
                        />
                    </div>
                    <button className="ui button" type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default InputBar;