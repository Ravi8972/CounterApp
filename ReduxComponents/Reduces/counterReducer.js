import {Increase,Decrease,Reset} from "../Actions/actionTypes.js"
const initialState = 0;
export default function counterReducer(state=initialState, action){
    switch (action.type) {
        case Increase: return state + action.value
        case Decrease: return state - action.value
        case Reset:   return initialState
        default :return state
    }
}