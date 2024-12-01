import localFont from "next/font/local";
import { FormComponent } from "@/components/form";
import { Instruction } from "@/components/ui/instruction";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Instruction
          title="Jak wypełnić formularz"
          steps={[
            "Wprowadź dane w odpowiednie pola, musisz uzupełnić wszystko.",
            "Zaznacz przełacznik po Peselu jeśli potrzebujesz wprowadzić Paszport",
            "Wybierz daty rozpoczęcia i zakończenia ubezpieczenia, nie musisz wprowadzać 2 razy, formularz to robi za ciebie",
            "Jeśli potrzebujesz wprowadzić okres obowiazywania produktu osobno zaznacz przełącznik zaraz po wprowadzonym okresie ubezpieczenia",
            "Sprawdź podgląd i kliknij 'Pobierz Plik', aby wygenerować dokument.",
          ]}
        />

        <FormComponent />
      </main>
    </div>
  );
}
