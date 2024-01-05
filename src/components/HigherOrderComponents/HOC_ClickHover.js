import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {//updated  component is a function that is taking other conmponent as input
  function HOC_ClickHover() {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return <OriginalComponent count={count} increment={increment} />;
  }
  return HOC_ClickHover;
};
export default UpdatedComponent;