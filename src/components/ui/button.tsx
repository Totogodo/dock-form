interface ButtonProps {
  btnType: "submit" | "button" | "reset";
  innerText: string;
  style: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export function Button({
  btnType,
  innerText,
  style,
  handleClick,
}: ButtonProps) {
  return (
    <button
      type={btnType}
      className={"border rounded-full " + style}
      onClick={handleClick}
    >
      {innerText}
    </button>
  );
}
