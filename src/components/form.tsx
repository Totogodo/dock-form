"use client";
import { generateDoc } from "@/actions/generate-doc";
import { Input } from "./input";
import { Button } from "./button";
import { Select } from "./select";
import { Prewiev } from "./prewiev";
import { useState } from "react";

export function FormComponent() {
  const [prew, setPrew] = useState({
    sex: "M",
  });

  const handleChange = (name: string, value: string) => {
    setPrew({ ...prew, [name]: value });
  };

  return (
    <div className="container mx-auto">
      <Prewiev prew={prew} />
      <form action={generateDoc}>
        <fieldset className="flex flex-wrap gap-2">
          <Input
            id="id"
            name="id"
            type="number"
            style="max-w-20"
            placeHolder="ID"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="name"
            name="name"
            type="text"
            style=""
            placeHolder="Name"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="surname"
            name="surname"
            type="text"
            style=""
            placeHolder="Last Name"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="pesel"
            name="pesel"
            type="number"
            style="max-w-32"
            placeHolder="PESEL"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="birthDate"
            name="birthDate"
            type="text"
            style="max-w-28"
            placeHolder="D.O.B"
            handleChange={handleChange}
            required={true}
          />
          <Select handleChange={handleChange} value={prew.sex} />
          <Input
            id="citizenship"
            name="citizenship"
            type="text"
            style="max-w-28"
            placeHolder="Kod kraju: PL"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            style="max-w-28"
            placeHolder="Numer Telefonu"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="insuranceStart"
            name="insuranceStart"
            type="text"
            style="max-w-28"
            placeHolder="Polisa od:"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="insuranceEnd"
            name="insuranceEnd"
            type="text"
            style="max-w-28"
            placeHolder="Polisa do:"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="productStart"
            name="productStart"
            type="text"
            style="max-w-28"
            placeHolder="Polisa od:"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="productEnd"
            name="productEnd"
            type="text"
            style="max-w-28"
            placeHolder="Polisa do:"
            handleChange={handleChange}
            required={true}
          />
        </fieldset>
        <Button />
      </form>
    </div>
  );
}
