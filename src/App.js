import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './components/Todo.css'

const initializedState = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 15288170843534,
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      toDo: initializedState
    }
  }

  // handler functions

  addItem = task => {
    
    const newItem ={
      task: task,
      id: new Date(),
      completed: false
    }

    this.setState({
      toDo: [ ...this.state.toDo,
        newItem]
    })

  }

  toggleCompleted = itemId =>{
    this.setState({
      toDo: this.state.toDo.map(item =>{
        if(item.id === itemId){
          return{
            ...item,
            completed: !item.completed
          }
        } else{
          return item
        }
      })
    })
  }

  clearCompleted = () =>{
    console.log('cleared completed');
    const notCompleted = this.state.toDo.filter(task => task.completed === false)
    
    this.setState({
      toDo: notCompleted
    })
    
    
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todos={this.state.toDo} 
          toggleCompleted={this.toggleCompleted} />
        <TodoForm 
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
