import { useRef } from "react";
import Second from "./Second";

const First = () => {
  const reference = useRef(null);
  console.log(reference);
  return (
    <>
      <Second />
      <input ref={reference} type="text" name="" id="" autoFocus/>
      <button onClick={() => {reference.current.focus()}}>reference</button>
    </>
  );
};
export default First;
