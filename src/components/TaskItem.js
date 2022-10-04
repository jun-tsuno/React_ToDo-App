import './TaskItem.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const TaskItem = (props) => {
        return (
            <div className="ui compact segment text-box">
                <div className='task-description'>
                    {props.description}
                </div>
                <div className='done-button'>
                    <FontAwesomeIcon icon={faSquareCheck} />
                </div>
                <div className="close-button" onClick={() => props.onDelete(props.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            </div>
        );
}


export default TaskItem;