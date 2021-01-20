import React, { Component } from 'react';

class App extends Component {
  constructor(props){
  super(props);

  this.state={
    newItem:"",
    list: []
    }
  };
  addItem(){
    // create item with unique id
    const newItem= {
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
    };
    // copy current list of items 
    const list = [...this.state.list];

    list.push(newItem);
  };
  render() { 
    return ( 
      <div>
        Add an Item...
        <br></br>
        <input 
        type="text"
        placeholder="type item here..."
        value={this.updateInput("newItem", e.target.value)}
        />
        <button
        onClick={() => this.addItem()}
        >Add Item</button>
        </div>
     );
  }
}
 


export default App;
