import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import {createStore} from 'redux'
import { Provider } from "react-redux";

const statechanger = (state,action)=>{
  if (typeof state==='undefined') {
    return  {n:0}
  }
  switch (action.type) {
    case 'add':
      return state + action.payload
    case 'minus':
      return state - action.payload
    default:
      return state;
  }
}



const store= createStore(statechanger)



// function add4() {
//   setTimeout(() => {
//     store.dispatch({type:'add',payload:1})
//   }, 2000);
// } 


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
