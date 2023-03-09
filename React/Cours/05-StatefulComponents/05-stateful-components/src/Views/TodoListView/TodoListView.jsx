import React, { Component } from 'react';
import "./TodoListView.css";
import FormTodo from '../../Components/FormTodoComponent/FormTodo';
import Notification from '../../Components/NotificationComponent/Notification';


class TodoListView extends Component {
    render() {
        return (

            <div>
                <FormTodo />
                <Notification />

                {
                    // mapper une collection de todo et injecter dans le composant todo
                }
                
            </div> 

            
        );
    }
}

export default TodoListView;