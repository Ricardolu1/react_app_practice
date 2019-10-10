import React ,{Component}from 'react';

class App extends Component{
  render(){
    return (
      <div className="App">
          你点击了 <span id="value">{this.props.value}</span> 次
        <div>
          <button id="increment" onClick={this.add1.bind(this)}>+1</button>
          <button id="increment2" onClick={this.add2.bind(this)}>+2</button>
          <button id="decrement" onClick={this.minus1.bind(this)}>-1 </button>
          <button id="incrementIfOdd" onClick={this.add3.bind(this)}>如果是单数就加一</button>
          <button id="incrementAsync" onClick={this.add4.bind(this)}>两秒钟后加一</button>
        </div>
      </div>
    )
  }
  add1(){
    this.props.onadd1()
  }
  add2(){
    this.props.onadd2()
  }
  add3(){
    this.props.ifOdd()
  }
  minus1(){
    this.props.onminus1()
  }
  add4(){
    this.props.onadd4()
  }

}

export default App
