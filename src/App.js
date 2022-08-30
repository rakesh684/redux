import React from 'react';
import './App.css';
// import {connect} from "react-redux"
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from "./redux"
function App(props) {

  const count=useSelector(state=>state)
  const dispatch=useDispatch()
  return (
    <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
  );
}
// function mapStateToProps(globalState) {
//   // return an object where the keys are the name of the prop your component wants,
//   // values are the actual parts of the global state your component wants
//    return {
//     count:globalState
//    }
// }
// const mapStateToProps=(state)=>({count:state})
// const mapDispatchToProps = {
//   increase:increment,
//   decrease:decrement
// }
// export default connect(state=>({count:state}),{increment,decrement})(App);

export default App