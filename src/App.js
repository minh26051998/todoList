import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tickall.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem :'',
      todoItems: [
      { title: 'Mua bim bim', isComplete: true },
      { title: 'Đi đá bóng',  isComplete: true },
      { title: 'Đi ngủ', isComplete: false} 
    ]
  }
  this.onKeyUp = this.onKeyUp.bind(this);
  this.onChange = this.onChange.bind(this);
  this.checkAll = this.checkAll.bind(this);
}

  onItemClicked(item){
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(event){
    
    if (event.keyCode === 13) {
      let text = event.target.value;
      if(!text) {
        return;
      }

      text = text.trim();
      if(!text){
        return;
      }

      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      });
    }
}

onChange(event) {
  this.setState({
    newItem: event.target.value
  })
}

checkAll(item) {
  return (event) => {
    const isComplete = item.isComplete;
    this.setState({
      todoItems: [
        {
          isComplete: !this.state.isComplete
        }
      ]
    });
  };
}

  render(){
    const { todoItems, newItem } = this.state;
    if (todoItems.length){
      return (
        <div className="App">
            <div className="Header">
              <img onClick={this.checkAll} src={tick} width={32} height={32}></img>
              <input 
                type="text" 
                placeholder="Add a new item" 
                value={newItem}
                onChange={this.onChange}
                onKeyUp={this.onKeyUp}></input>
            </div>
            { todoItems.length && todoItems.map((item, index) => 
              <TodoItem 
                key={index} 
                item={item}
                onClick={this.onItemClicked(item)}>
              </TodoItem>)
            }
            <div className="Footer">
              <button >All</button>
              <button >Active</button>
              <button >Completed</button>
            </div>
        </div>
      );
    }
  }
}
export default App;
