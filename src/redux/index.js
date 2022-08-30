
import {configureStore,applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
export function increment() {

    return (inc,getState)=>{
        const currentCount=getState()
        const baseUrl="https://swapi.dev/api/films/"
        fetch(`${baseUrl}/${currentCount}`)
             .then(res=> res.json())
             .then(res=>{
                console.log(res)
                inc({
                    type:"INCREMENT",
                    payload:res
                })
             })
        // if(currentCount % 2===0){
        //     inc({type: "INCREMENT"})
        // }
        // else{
        //     setTimeout(()=>{
        //         inc({type:"INCREMENT"})
        //     },1500)
        // }
        
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(count = 1, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}

const store = configureStore({reducer},applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store
