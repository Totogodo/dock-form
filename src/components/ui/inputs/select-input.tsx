interface SelectProps {
  handleChange: (name: string, value: string) => void;
  value: string; // The current value of the select input
  style: string;
}

export function SelectInput({ handleChange, value, style }: SelectProps) {
  return (
    <select
      id='sex'
      name='sex'
      value={value} // Controlled value
      className={"bg-white border rounded border-black p-1 " + style}
      onChange={(e) => handleChange(e.target.name, e.target.value)} // Pass name and value
    >
      <option value='M'>M</option>
      <option value='F'>F</option>
    </select>
  );
}
