"use client";
import { generateDoc } from "@/actions/generate-doc";
import { Input } from "./input";
import { Button } from "./button";
import { Select } from "./select";
import { Prewiev } from "./prewiev";
import { useState } from "react";

export function FormComponent() {
  const [isActive, setIsActive] = useState();
  const [prew, setPrew] = useState({
    id: "",
    name: "",
    surname: "",
    pesel: "",
    birthDate: "",
    sex: "M",
    citizenship: "",
    phoneNumber: "",
    insuranceStart: "",
    insuranceEnd: "",
    productStart: "",
    productEnd: "",
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
          />
          <Input
            id="name"
            name="name"
            type="text"
            style=""
            placeHolder="Name"
            handleChange={handleChange}
          />
          <Input
            id="surname"
            name="surname"
            type="text"
            style=""
            placeHolder="Last Name"
            handleChange={handleChange}
          />
          <Input
            id="pesel"
            name="pesel"
            type="number"
            style="max-w-32"
            placeHolder="PESEL"
            handleChange={handleChange}
          />
          <Input
            id="birthDate"
            name="birthDate"
            type="text"
            style="max-w-28"
            placeHolder="D.O.B"
            handleChange={handleChange}
          />
          <Select handleChange={handleChange} value={prew.sex} />
          <Input
            id="citizenship"
            name="citizenship"
            type="text"
            style="max-w-28"
            placeHolder="Kod kraju: PL"
            handleChange={handleChange}
          />
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            style="max-w-28"
            placeHolder="Numer Telefonu"
            handleChange={handleChange}
          />
          <Input
            id="insuranceStart"
            name="insuranceStart"
            type="text"
            style="max-w-28"
            placeHolder="Polisa od:"
            handleChange={handleChange}
          />
          <Input
            id="insuranceEnd"
            name="insuranceEnd"
            type="text"
            style="max-w-28"
            placeHolder="Polisa do:"
            handleChange={handleChange}
          />
          <Input
            id="productStart"
            name="productStart"
            type="text"
            style="max-w-28"
            placeHolder="Polisa od:"
            handleChange={handleChange}
          />
          <Input
            id="productEnd"
            name="productEnd"
            type="text"
            style="max-w-28"
            placeHolder="Polisa do:"
            handleChange={handleChange}
          />
        </fieldset>
        <Button />
      </form>
    </div>
  );
}
