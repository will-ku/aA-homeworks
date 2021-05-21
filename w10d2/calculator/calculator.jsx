import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { num1: "", num2: "", result: 0}

  }

  //your code here

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={num1}/>
        <input onChange={this.setNum2} value={num2}/>
      </div>
    );
  }
}

export default Calculator;
