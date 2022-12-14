import React from "react";

export default function UseMemoDemo1() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Content a={1} b={count} />
    </div>
  );
}

const Content = ({ a, b }) => {
  const memorizedRandom = React.useMemo(() => {
    return Math.random();
  }, [a]);

  const random = Math.random();

  return (
    <div>
      <h1>
        A/B : {a}/{b}
      </h1>
      <h1>Random: {random}</h1>
      <h1>MemorizedRandom : {memorizedRandom}</h1>
    </div>
  );
};
