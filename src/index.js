import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import {createStore} from 'redux'

const statechanger = (state,action)=>{
  if (typeof state==='undefined') {
    return  0
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

function add4() {
  setTimeout(() => {
    store.dispatch({type:'add',payload:1})
  }, 2000);
} 

const store= createStore(statechanger)
function render() {
  ReactDOM.render(<App value={store.getState()} 
  onadd1={()=>{store.dispatch({type:'add',payload:1})}} 
  onadd2={()=>{store.dispatch({type:'add',payload:2})}}
  onminus1={()=>{store.dispatch({type:'minus',payload:1})}}
  ifOdd={()=>{
    if (store.getState()%2===1) {
      store.dispatch({type:'add',payload:1})
    }
  }}
  onadd4={add4}
  />,
  
  document.getElementById("root"))
}
render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
