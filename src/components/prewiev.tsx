interface PrewievProps {
  prew: {
    id: string;
    name: string;
    surname: string;
    pesel: string;
    birthDate: string;
    sex: string;
    citizenship: string;
    phoneNumber: string;
    insuranceStart: string;
    insuranceEnd: string;
    productStart: string;
    productEnd: string;
  };
}

export function Prewiev({ prew }: PrewievProps) {
  const {
    id,
    name,
    surname,
    pesel,
    birthDate,
    sex,
    citizenship,
    phoneNumber,
    insuranceStart,
    insuranceEnd,
    productStart,
    productEnd,
  } = prew;
  const content = `10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
20;285;02;02;TPA KOSZTY LECZENIA CUDZOZIEMCÓW;AL. JEROZOLIMSKIE 162;WARSZAWA;02-342;01/01/2023;31/12/2050;;1111111111;;;;;;;;;;;;;;;;;;;;;;;;;;
30;777;${id};${id};${name};${surname};${pesel};${birthDate};${sex};${citizenship};;;${phoneNumber};;;;;;MI;N;;;${insuranceStart};${insuranceEnd};CG_Z195;${productStart};${productEnd};;;;;;;;;;;
29;1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
19;156;759bfe266b346a02a41ba287cc8a2456;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;`;
  return (
    <textarea
      className="w-full rounded-lg p-2"
      value={content}
      rows={5}
      readOnly
    ></textarea>
  );
}