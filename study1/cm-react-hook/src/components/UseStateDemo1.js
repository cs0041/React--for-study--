import React, {useState} from "react";

export default function UseStateDemo1() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = React.useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => {
          setCount(count + 1);
          setTitle("React Hook");
        }}
      >
        ADD
      </button>
      UseState : {count}
      <br />
      Title : {title}
    </div>
  );
}
