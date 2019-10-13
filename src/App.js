import React ,{Component}from 'react';
import { connect } from "react-redux";

class App extends Component{
  render(){
    return (
      <div className="App">
          你点击了 <span id="value">{this.props.n}</span> 次
        <div>
          <button id="increment" onClick={()=>this.props.add1()} >+1</button>
          <button id="increment2" >+2</button>
          <button id="incrementIfOdd">如果是单数就加一</button>
          <button id="incrementAsync">两秒钟后加一</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return  {
    n:state.n
  }
}
//这个y必须是一个对象

function mapDispatchToprops(dispatch) {
  return{
    add1:()=>dispatch({type:'add',payload:1})
  }
}


export default connect(mapStateToProps,mapDispatchToprops)(App)


   
