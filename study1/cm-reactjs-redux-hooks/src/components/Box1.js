import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as box1Action1 from "./../actions/box1.action";
export default function Box1() {

    const appReducer = useSelector(({appReducer})=>appReducer)
    const box1Reducer =useSelector(({box1Reducer})=>box1Reducer)
    const dispatch = useDispatch()
    return (
        <div>
            <h2 onClick={()=>dispatch(box1Action1.add())}>Box1 : {appReducer.count}, B1({box1Reducer.count1})</h2>
            <span>{JSON.stringify(appReducer.account)}</span>
        </div>
    )
}
