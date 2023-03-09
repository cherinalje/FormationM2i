import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            editTodoContent: undefined
        };
    }

    changeStatus = () => {

    }

    renderDoneOrUndoneButton = () => {

    }

    EditTodo = () => {

    }

    renderTodo = () => {
        return 
    }

    renderContentTodo = () => {

    }

    render() {
        return (
            <div className="row">
                <div className="col-9">
                    {this.renderTodo()}
                </div>
                <div className="col-1">
                    { this.renderDoneOrUndoneButton()}
                </div>
                <div className="col-1">
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        onClick={()=>{
                            this.setState({
                                edit:true
                            })
                        }}
                        className="fontIcon"
                    />
                </div>
                <div className="col-1">
                <FontAwesomeIcon
                        icon={faTrashCan}
                        onClick={()=>{
                           this.props.deleteTodo(this.props.todo.id)
                        }}
                        className="fontIcon"
                    />
                </div>
            </div>
        );
    }
}

export default Todo;