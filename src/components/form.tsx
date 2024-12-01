"use client";
import { generateDoc } from "@/actions/generate-doc";
import { Input, SelectInput, DateInput } from "./ui/inputs";
import { Button } from "./ui/button";
import { Prewiev } from "./prewiev";
import { useState } from "react";
import { clsx } from "clsx";
import { Switch } from "./ui/switch";

export function FormComponent() {
  const [toggleProductDates, setToggleProductDates] = useState(true);
  const [togglePassport, setTogglePassport] = useState(false);
  console.log("🚀 ~ FormComponent ~ togglePassport:", togglePassport);
  const [prew, setPrew] = useState({
    id: "",
    name: "",
    surname: "",
    pesel: "",
    passport: "",
    handleBirth: "",
    sex: "M",
    citizenship: "",
    phoneNumber: "",
    insuranceStart: "",
    insuranceEnd: "",
    productStart: "",
    productEnd: "",
  });

  const handleChange = (name: string, value: string | null) => {
    setPrew({ ...prew, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateDoc(prew);
  };

  return (
    <div className="container mx-auto">
      <Prewiev prew={prew} />
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-wrap gap-2 items-center">
          <Input
            id="id"
            name="id"
            type="number"
            input={prew.id}
            style="max-w-20"
            placeHolder="ID"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="name"
            name="name"
            type="text"
            input={prew.name}
            style=""
            placeHolder="Name"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="surname"
            name="surname"
            type="text"
            input={prew.surname}
            style=""
            placeHolder="Last Name"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="pesel"
            name="pesel"
            type="number"
            input={prew.pesel}
            style={clsx(togglePassport && "hidden", "max-w-32")}
            placeHolder="PESEL"
            handleChange={handleChange}
            required={!togglePassport}
          />
          <Input
            id="passport"
            name="passport"
            type="text"
            input={prew.passport}
            style={clsx(!togglePassport && "hidden", "max-w-32")}
            placeHolder="PASZPORT"
            handleChange={handleChange}
            required={togglePassport}
          />
          <Switch
            checked={togglePassport}
            onCheckedChange={(checked) => {
              setTogglePassport(!togglePassport);
              if (checked) {
                setPrew({ ...prew, pesel: "" });
              } else if (!checked) {
                setPrew({ ...prew, passport: "" });
              }
            }}
          />
          <DateInput
            id="handleBirth"
            name="handleBirth"
            onChange={handleChange}
          />
          <SelectInput handleChange={handleChange} value={prew.sex} />
          <Input
            id="citizenship"
            name="citizenship"
            type="text"
            input={prew.citizenship}
            style="max-w-28"
            placeHolder="Kod kraju: PL"
            handleChange={handleChange}
            required={true}
          />
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            input={prew.phoneNumber}
            style="max-w-28"
            placeHolder="Numer Telefonu"
            handleChange={handleChange}
            required={true}
          />
          <DateInput
            id="insuranceStart"
            name="insuranceStart"
            onChange={handleChange}
          />
          <DateInput
            id="insuranceEnd"
            name="insuranceEnd"
            onChange={handleChange}
          />
          <Switch
            checked={!toggleProductDates}
            onCheckedChange={() => setToggleProductDates(!toggleProductDates)}
          />
          <div className={clsx(toggleProductDates && "hidden", "")}>
            <DateInput
              id="productStart"
              name="productStart"
              onChange={handleChange}
            />
          </div>
          <div className={clsx(toggleProductDates && "hidden", "")}>
            <DateInput
              id="productEnd"
              name="productEnd"
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <div className="flex gap-2">
          <Button
            btnType="submit"
            innerText="Pobierz Plik"
            style="px-6 py-2 bg-black text-white mt-2 text-xl"
          />
          <Button
            btnType="reset"
            innerText="Wyczyść"
            style="px-6 py-2 mt-2 text-xl border-black"
          />
        </div>
      </form>
    </div>
  );
}
