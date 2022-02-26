import "./Sample.scss";
import { Sum } from "./Sum";

export const Sample = (props: { arg1: number; arg2: number }) => {
  return (
    <div className="Sample">
      <p>This is a sample component</p>
      <Sum num1={props.arg1} num2={props.arg2} />
    </div>
  );
};
