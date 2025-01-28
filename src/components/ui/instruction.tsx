type InstructionsProps = {
  title: string;
  steps: string[];
};

export function Instruction({ title, steps }: InstructionsProps) {
  return (
    <details className='bg-gray-50 px-4 py-3 rounded-md'>
      <summary className='text-xl font-medium cursor-pointer'>{title}</summary>
      <ul className='list-decimal list-inside text-gray-700 '>
        {steps.map((step, index) => (
          <li key={index} className='mb-1'>
            {step}
          </li>
        ))}
      </ul>
    </details>
  );
}
