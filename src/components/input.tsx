interface InputPros {
  id: string;
  name: string;
  type: "text" | "number";
  style: string;
  placeHolder: string;
  required?: boolean;
}

export function Input({
  id,
  name,
  type,
  style,
  placeHolder,
  required,
}: InputPros) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={"border rounded border-black p-1 " + style}
      placeholder={placeHolder}
      required
    />
  );
}
