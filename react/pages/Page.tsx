import React, { useState } from "react";
import Cmp from "@components/Cmp";

const Page: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click1
      </button>
      <Cmp data-testid="content">PAGE</Cmp>
    </div>
  );
};

export default Page;
