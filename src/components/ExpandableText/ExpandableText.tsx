import React, { useState } from "react";
interface Props {
  children: string;
  stringLimit?: number;
}

const ExpandableText = ({ children, stringLimit = 30 }: Props) => {
  const [toggleExpand, setToggleExpand] = useState(false);
  if (children.length <= stringLimit) return <p>{children}</p>;
  return (
    <>
      <p>
        {toggleExpand || children.substring(0, stringLimit)}
        {toggleExpand || (
          <button onClick={() => setToggleExpand(true)}>...show more</button>
        )}
      </p>
      <p>
        {toggleExpand && children}
        {toggleExpand && (
          <button onClick={() => setToggleExpand(false)}>...show less</button>
        )}
      </p>
    </>
  );
};

export default ExpandableText;
