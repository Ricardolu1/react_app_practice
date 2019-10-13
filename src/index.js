import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import {createStore} from 'redux'
import { Provider } from "react-redux";

const reducer = (state,action)=>{
  if (typeof state==='undefined') {
    return  {n:0} //用了react-redux state要写成一个对象
  }
  switch (action.type) {
    case 'add':
      return  {n:state.n+action.payload}//  要和上面的state是一样的结构
    case 'minus':
      return state - action.payload
    default:
      return state;
  }
}



const store= createStore(reducer)



// function add4() {
//   setTimeout(() => {
//     store.dispatch({type:'add',payload:1})
//   }, 2000);
// } 

//这里provider的意思的是，你把store传给我，我会把store传给这个provider里面包含的每一个组件
  ReactDOM.render(
    <Provider store={store}>   
      <App />
    </Provider>,
  document.getElementById("root"))

// render() 
// store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
