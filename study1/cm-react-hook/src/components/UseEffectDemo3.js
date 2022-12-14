import React from 'react'

export default function UseEffectDemo3() {

  const [count, setCount] = React.useState(0)
  
  const doSomeThing = ()=>{
    setCount(previus => previus + 1)
    console.log("Do Some Thing")
  }

  React.useEffect(() => {
    const intervalId = setInterval(doSomeThing, 1000)
    
    // Cleanup
    return () => {
      console.log("Detroyed")
      clearInterval(intervalId)
    };
  }, [])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}
