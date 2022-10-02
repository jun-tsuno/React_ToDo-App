import './TaskItem.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';


const TaskItem = (props) => {
    return (
        <div className="ui compact segment text-box">
            <div>
                {props.description}
            </div>
            <div className="close-button" onClick={() => props.onDelete(props.id)}>
                <FontAwesomeIcon icon={faXmarkSquare} />
            </div>
        </div>
    );
}

export default TaskItem;