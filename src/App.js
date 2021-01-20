import React, { Component } from 'react';

class App extends Component {
  constructor(props){
  super(props);

  this.state={
    newItem:"",
    list: []
    }
  };
  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    })
  }

  
  addItem(){
    // create item with unique id
    const newItem= {
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
    };
    // copy current list of items 
    const list = [...this.state.list];
    // add new item to list 
    list.push(newItem);
    //update state with new list and rest newItem input 
    this.setState({
      list, 
      newItem:"",
    })
  };

  render() { 
    return ( 
      <div>
        Add an Item...
        <br></br>
        <input 
        type="text"
        placeholder="type item here..."
        value={e => this.updateInput("newItem", e.target.value)}
        />
        <button
        onClick={() => this.addItem()}
        >Add Item</button>
        <br>
        </br>
        <ul>
          {this.state.list.map(item => {
            return(
              <li key={item.id}>{item.value.id}
              <button onClick={() => this.deleteItem(item.id)}> </button>
              </li>
            )
          })}
        </ul>
        </div>
     );
  }
}
 


export default App;
