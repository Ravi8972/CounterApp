
import { Increase, Decrease, Reset } from "./actionTypes.js";

export function increase(value =1){
    return {
        type : Increase,
        value : value
    }
}

export function decrease() {
    return {
        type : Decrease
    }
}

export function reset(){
    return {type:Reset}
}