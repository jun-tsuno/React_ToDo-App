import './TaskItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const TaskItem = (props) => {
    let isDoneStyle;
    props.tasks !== [] && props.complete && (isDoneStyle={textDecoration: "line-through", color: "red"})

        return (
            <div className="ui compact segment text-box">
                <div className="task-description" style={isDoneStyle}>
                    {props.description}
                </div>
                <div className='done-button' onClick={() => props.onDone(props.id)}>
                    <FontAwesomeIcon icon={faSquareCheck} />
                </div>
                <div className="close-button" onClick={() => props.onDelete(props.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            </div>
        );
}

export default TaskItem;