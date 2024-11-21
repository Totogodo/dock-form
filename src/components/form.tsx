import { generateDoc } from "@/actions/generate-doc";
import { Input } from "./input";
import { Button } from "./button";

export function FormComponent() {
  return (
    <form action={generateDoc}>
      <div className="flex flex-wrap gap-2">
        <Input
          id="id"
          name="id"
          type="text"
          style="max-w-16"
          placeHolder="ID"
        />
        <Input id="name" name="name" type="text" style="" placeHolder="Name" />
        <Input
          id="surname"
          name="surname"
          type="text"
          style=""
          placeHolder="Last Name"
        />
        <Input
          id="pesel"
          name="pesel"
          type="number"
          style="max-w-32"
          placeHolder="PESEL"
        />
        <Input
          id="birthDate"
          name="birthDate"
          type="text"
          style="max-w-28"
          placeHolder="D.O.B"
        />
        <Input
          id="sex"
          name="sex"
          type="text"
          style="max-w-12"
          placeHolder="Płeć"
        />
        <Input
          id="citizenship"
          name="citizenship"
          type="text"
          style="max-w-28"
          placeHolder="Kod kraju: PL"
        />
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          style="max-w-28"
          placeHolder="Numer Telefonu"
        />
        <Input
          id="insuranceStart"
          name="insuranceStart"
          type="text"
          style="max-w-28"
          placeHolder="Polisa od:"
        />
        <Input
          id="insuranceEnd"
          name="insuranceEnd"
          type="text"
          style="max-w-28"
          placeHolder="Polisa do:"
        />
        <Input
          id="productStart"
          name="productStart"
          type="text"
          style="max-w-28"
          placeHolder="Polisa od:"
        />
        <Input
          id="productEnd"
          name="productEnd"
          type="text"
          style="max-w-28"
          placeHolder="Polisa do:"
        />
      </div>
      <Button />
    </form>
  );
}
