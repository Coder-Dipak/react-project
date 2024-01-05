import React from "react";
import UpdatedComponent from "./HOC_ClickHover";

 function HOC_Hover({count,increment}) {

  return (
    <>
      <h2>In Click Counter Component - count is {count}</h2>
      <button onMouseOver={increment}>Hover me To Increment</button>
    </>
  );
}

export default UpdatedComponent(HOC_Hover);
