import React from 'react'


class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            formState:''
        }
    }

    handleChange = e =>{

        this.setState({
            formState: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        this.props.addItem(this.state.formState)
        this.setState({
            formState:''
        })
    }

    handleClear = e =>{
        e.preventDefault();
        this.props.clearCompleted()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='item'
                    value={this.state.formState}
                    placeholder='... to do'
                    onChange={this.handleChange}
                ></input>
                <button>Add Todo</button>
                <button onClick={this.handleClear}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;