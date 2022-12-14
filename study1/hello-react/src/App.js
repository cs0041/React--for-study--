import React, { useState } from "react";
import CounterClassComponent from "./CounterClassComponent";
import CounterFunctionalComponent from "./CounterFunctionalComponent";
import Ex1Style from "./components/ex1_styles";
import Ex2Image from "./components/ex2_image";
import Ex3Props from "./components/ex3_props";
import Ex4Destructuring from "./components/ex4_destructuring";

export default () => {
  let var1 = 0;
  const var2 = "hello";
  const var3 = false;

  const [count, setCount] = useState(0);

  const submit = () => {
    alert("SubmitHeyHey");
  };

  return (
    <div>
      JSX
      <h1>codemobiles {var1}</h1>
      <h1>codemobiles {var2}</h1>
      <h1>codemobiles {var3 && "Yes"}</h1>
      {var3 ? <h1>YES</h1> : <h1>NO</h1>}
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          var1 = var1 + 1;
          setCount(count + 1);
          console.log(var1);
        }}
      >
        ADD
      </button>
      <CounterClassComponent />
      <CounterFunctionalComponent />
      <Ex1Style />
      <Ex2Image />
      <Ex2Image image="http://www.codemobiles.com/biz/images/banner_pospos.jpg?dummy=1579001242" />
      <Ex3Props count={count} color="#f00" />
      <Ex4Destructuring usernameHint="Username" passwordHint="Password" />
      <Ex4Destructuring handleSubmit={() => alert("HeyHey")} />
      <Ex4Destructuring handleSubmit={submit} />
    </div>
  );
};
