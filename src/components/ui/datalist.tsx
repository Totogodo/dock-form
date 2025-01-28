import { countries } from "@/lib/countries";
import { useState } from "react";

interface Datalist {
  id: string;
  input: any;
  name: string;
  type: "text" | "number";
  placeHolder: string;
  handleChange?: any;
}

export function Datalist({
  id,
  input,
  placeHolder,
  name,
  type,
  handleChange,
}: Datalist) {
  return (
    <div>
      <input
        name={name}
        value={input}
        list='myOptions'
        id={id}
        placeholder={placeHolder}
        type={type}
        className='max-w-36 min-h-8 border border-black rounded-sm p-1'
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>
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
