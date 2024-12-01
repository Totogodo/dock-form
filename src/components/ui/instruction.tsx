type InstructionsProps = {
  title: string;
  steps: string[];
};

export function Instruction({ title, steps }: InstructionsProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <ul className="list-decimal list-inside text-gray-700">
        {steps.map((step, index) => (
          <li key={index} className="mb-1">
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
