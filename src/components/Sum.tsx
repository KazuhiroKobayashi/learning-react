export const Sum = (props: { num1: number; num2: number }) => {
  const sum = props.num1 + props.num2;
  return (
    <p>
      {props.num1}+{props.num2}={sum}
    </p>
  );
};
