import React from 'react'

export default function UseEffectDemo1() {

  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    // Called whenever state is changed 
    document.title = "Current count : " + count   
  }, [count])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>ADD</button>
    </div>
  )
}
