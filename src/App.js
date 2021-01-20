import React, { Component } from 'react';

class App extends Component {
  constructor(props){
  super(props);

  this.state={
    newItems: "",
    list: []
  }
  }
  
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
