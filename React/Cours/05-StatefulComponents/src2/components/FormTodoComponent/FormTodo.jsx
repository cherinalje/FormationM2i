import React, { Component } from 'react';
import './FormTodo.css'

class FormTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentTask: undefined
        };
    }

    submit = (e) => {
        e.preventDefault();
        if (this.state.contentTask !== undefined)
            this.props.addTodo(this.state.contentTask)
        this.setState({
            contentTask: undefined
        })
        e.target.reset();
    }

    render() {
        return (
            <form className='row m-1' onSubmit={this.submit}>
                <div className="col-9">
                    <input type="text" value={this.contentTask} onChange={(e) => this.setState({ contentTask: e.target.value })} className='form-control' placeholder='Veuillez saisir la todo' name="text" id="text" />
                </div>
                <div className="col-3">
                    <button type='submit' className='form-control btn btn-secondary'>Ajouter</button>
                </div>
            </form>
        );
    }
}

export default FormTodo;