import React from 'react'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import { useSelector, useDispatch } from 'react-redux'
import * as appActions from "./actions/app.action";
export default function App() {

  // const [count, setCount] = React.useState(0)
  const appReducer =useSelector(({appReducer})=>appReducer)
  const box1Reducer =useSelector(({box1Reducer})=>box1Reducer)
  const dispatch = useDispatch();

  return (
    <div style={{padding: 10}}>
      <div style={{display:'flex', flexDirection:'row'}}>
        <button onClick={()=>dispatch(appActions.add())}>ADD</button>
        <button onClick={()=>dispatch(appActions.remove())}>REM</button>
        <button onClick={()=>dispatch(appActions.clear(-1))}>CLR</button>
      </div>
      <h1>CodeMobiles : {appReducer.count}, B1({box1Reducer.count1})</h1>
      <Box1/>
      <Box2/>
      <Box3/>
    </div>
  )
}
