interface SelectProps {
  handleChange: (name: string, value: string) => void;
  value: string; // The current value of the select input
}

export function SelectInput({ handleChange, value }: SelectProps) {
  return (
    <select
      id="sex"
      name="sex"
      value={value} // Controlled value
      className="bg-white border rounded border-black p-1"
      onChange={(e) => handleChange(e.target.name, e.target.value)} // Pass name and value
    >
      <option value="M">M</option>
      <option value="F">F</option>
    </select>
  );
}
