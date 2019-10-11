import React ,{Component}from 'react';
import { connect } from "react-redux";

class App extends Component{
  render(){
    return (
      <div className="App">
          你点击了 <span id="value">{this.props.n}</span> 次
        <div>
          <button id="increment" >+1</button>
          <button id="increment2" >+2</button>
          <button id="incrementIfOdd">如果是单数就加一</button>
          <button id="incrementAsync">两秒钟后加一</button>
        </div>
      </div>
    )
  }
}

function x(state) {
  return  {
    n:state.n
  }
}
function y() {	
  return{
    add1:()=>{
      return {type:'add',payload:1}
    }
  }
}
connect(x)(App)


export default connect(x,y)(App)


   
