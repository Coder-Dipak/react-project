import React from "react";
import UpdatedComponent from "./HOC_ClickHover";

//we cant export it directly as we need to pass another component so we did that in last
function HOC_Click({count,increment}) {
  return (
    <>
      <h2>In Click Counter Component - count is {count}</h2>
      <button onClick={increment}>Click me To Increment</button>
    </>
  );
}
//we cant export it directly as we need to pass another component
export default UpdatedComponent(HOC_Click);//imported updatedComponent function is taking another function aas input
