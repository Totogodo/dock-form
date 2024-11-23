interface ButtonProps {
  btnType: "submit" | "button" | "reset";
  innerText: string;
  style: string;
}
export function Button({ btnType, innerText, style }: ButtonProps) {
  return (
    <button type={btnType} className={"border rounded-full " + style}>
      {innerText}
    </button>
  );
}
