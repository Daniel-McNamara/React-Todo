import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: list
    }
  }
  
  toggleItem = clickedID => {
    //console.log('toggling');
    const newList = this.state.todoList.map(item => {
      if (item.id === clickedID) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    //console.log(newList);
    this.setState({
      todoList: newList
    });
  };
  
  addNewItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }
  
  clearList = () => {
    const newList = this.state.todoList.filter(item => {
      if (item.completed === false) {
        return item;
      }
    })
    this.setState({
      todoList: newList
    });
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList 
          todoList={this.state.todoList}
          toggleItem={this.toggleItem}
          clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
