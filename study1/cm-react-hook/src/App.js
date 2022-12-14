import React from "react";
import UseStateDemo1 from "./components/UseStateDemo1";
import UseStateDemo2 from "./components/UseStateDemo2";
import UseStateDemo3 from "./components/UseStateDemo3";
import UseEffectDemo1 from "./components/UseEffectDemo1";
import UseEffectDemo2 from "./components/UseEffectDemo2";
import UseEffectDemo3 from "./components/UseEffectDemo3";
import UseEffectDemo4 from "./components/UseEffectDemo4";
import UseContextDemo1 from "./components/UseContextDemo1";
import UseMemoDemo1 from "./components/UseMemoDemo1";
import UseCallbackDemo1 from "./components/UseCallbackDemo1";

export default function App() {
  const [isShow, setIsShow] = React.useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <UseStateDemo1/> */}
      {/* <UseStateDemo2/> */}
      {/* <UseStateDemo3/> */}
      {/* <UseEffectDemo1/> */}
      {/* {isShow && <UseEffectDemo2/>} */}
      {/* <button onClick={()=>setIsShow(false)}>Hide</button> */}
      {/* <UseEffectDemo3/> */}
      {/* <UseEffectDemo4/> */}
      {/* <UseContextDemo1/> */}
      {/* <UseMemoDemo1 /> */}
      <UseCallbackDemo1 />
    </div>
  );
}
