import { countries } from "@/lib/countries";

interface Datalist {
  id: string;
}

export function Datalist({ id }: Datalist) {
  return (
    <div>
      <input list='' id={id} placeholder='Type to search...'></input>
      <datalist id='myOptions' className='absolute bg-white'>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </datalist>
    </div>
  );
}
