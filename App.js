import store from './ReduxComponents/store.js'

import {increase,decrease,reset} from './ReduxComponents/Actions/actions.js'

// getState() is a method that returns the current state value of the Redux store 
// dispatch() hepls you to call an action

console.log(store.getState())

store.dispatch(increase()) // happens 
// store.dispatch({type: "INCREASE"}) 
console.log(store.getState())

store.dispatch(increase()) 
// store.dispatch({type: "INCREASE"})
console.log(store.getState())


store.dispatch(increase(100)) // 
// store.dispatch({type: "INCREASE", value: 100}) 
console.log(store.getState())