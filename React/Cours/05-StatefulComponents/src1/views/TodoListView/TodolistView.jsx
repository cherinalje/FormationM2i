import React, { Component } from 'react';
import FormTodo from '../../components/FormTodoComponent/FormTodo';
import Notification from '../../components/NotificationComponent/Notification';
import Todo from '../../components/TodoComponent/Todo';
import "./TodoList.css";

class TodolistView extends Component {


    constructor(props) {
        super(props)
        this.state = {
            todos: []
        };
    }

    addTodo = (text) => {
        console.log(text);
        // Copie des valeurs présente dans le state Todos dans une variable temporaire tmpTodos
        let tmpTodos = [...this.state.todos];
        // Création d'une nouvelle todo depuis les imformations fournies pas l'utilisateur
        let newTodo = {
            id: (this.state.todos[this.state.todos.length - 1] !== undefined) ? (this.state.todos[this.state.todos.length - 1].id + 1) : 1,
            status: false,
            content: text
        }
        // Ajout de la nouvelle todo à la liste temporaire
        tmpTodos.push(newTodo);
        // Mise à jour mon state local todos[]
        this.setState({
            todos: tmpTodos
        })
    }

    deleteTodo = (id) => {
        // Déclaration d'un tableau vide local (à la fonction) 
        let tmpTodos = [];
        // Boucle pour itérer l'ensemble des todos et ajouter seulement les toto dont l'id est différent du params id
        for (let todo of this.state.todos) {
            if (todo.id !== id) {
                tmpTodos.push(todo)
            }
        }
        // Mise à jour mon state local todos[]
        this.setState({
            todos: tmpTodos
        })
    }

    editTodo = (id, newContent) => {
        // Déclaration d'un tableau vide local (à la fonction) 
        let tmpTodos = [];
        // Boucle pour itérer l'ensemble des todos et ajouter seulement les toto dont l'id est différent du params id
        for (let todo of this.state.todos) {
            // trouver la bonne todo
            if (todo.id === id) {
                // Modifier son text
                todo.content = newContent;
            }
            tmpTodos.push(todo)
        }
        // Mise à jour mon state local todos[]
        this.setState({
            todos: tmpTodos
        })
    }

    changeStatus = (id) => {
        // Déclaration d'un tableau vide local (à la fonction) 
        let tmpTodos = [];
        // Boucle pour itérer l'ensemble des todos et ajouter seulement les toto dont l'id est différent du params id
        for (let todo of this.state.todos) {
            // trouver la bonne todo
            if (todo.id === id) {
                // Modifier son status
                todo.status = !todo.status;
            }
            tmpTodos.push(todo);
        }
        // Mise à jour mon state local todos[]
        this.setState({
            todos: tmpTodos
        })

    }

    render() {
        return (
            <div>
                <h1>React TodoList</h1>
                <FormTodo addTodo={this.addTodo} />
                <Notification />
                {
                    // mapper une collection de todo et injection dans le composant todo
                    <Todo />
                }
            </div>
        );
    }
}

export default TodolistView;