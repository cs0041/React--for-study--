import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UseEffectDemo4() {
  const [dataArray, setDataArray] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
      const { data } = result;
      console.log(data);
      //  alert(JSON.stringify(data))
      setDataArray(data);
    });
  }, []);

  return (
    <div>
      {/* <p>#Debug {JSON.stringify(dataArray)}</p> */}
  <ul>{dataArray && dataArray.map(item => <li key={item.id}>{item.id}. {item.title}</li>)}</ul>
    </div>
  );
}
