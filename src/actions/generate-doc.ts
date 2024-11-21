"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";

export function generateDoc(formData: FormData) {
  const entries = formData.entries();
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
  } = Object.fromEntries(entries);

  const content = `10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
20;285;02;02;TPA KOSZTY LECZENIA CUDZOZIEMCÓW;AL. JEROZOLIMSKIE 162;WARSZAWA;02-342;01/01/2023;31/12/2050;;1111111111;;;;;;;;;;;;;;;;;;;;;;;;;;
30;777;${id};${id};${name};${surname};${pesel};${birthDate};${sex};${citizenship};;;${phoneNumber};;;;;;MI;N;;;${insuranceStart};${insuranceEnd};CG_Z195;${productStart};${productEnd};;;;;;;;;;;
29;1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
19;156;759bfe266b346a02a41ba287cc8a2456;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;`;
  const fileName = `${id}_IMPORT_KLC_TPA_${name} ${surname}`;
  handleDownload(content, fileName);
}
const handleDownload = (text: string, fileName: string) => {
  // Create a Blob with the content
  const blob = new Blob([text], { type: "text/plain" });

  // Create a URL for the Blob
  const url = window.URL.createObjectURL(blob);

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName + ".txt"; // Name of the downloaded file

  // Append the link to the body and click it
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
