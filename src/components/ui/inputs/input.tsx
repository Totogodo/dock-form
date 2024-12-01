interface InputPros {
  id: string;
  name: string;
  type: "text" | "number";
  style: string;
  placeHolder: string;
  required?: boolean;
  handleChange?: any;
}

export function Input({
  id,
  name,
  type,
  style,
  placeHolder,
  required,
  handleChange,
}: InputPros) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={"border rounded border-black p-1 " + style}
      placeholder={placeHolder}
      required={required}
      onChange={(e) => handleChange(e.target.name, e.target.value)}
      disabled={false}
    />
  );
}
