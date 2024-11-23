import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type DatePickerProps = {
  id: string;
  name: string;
  onChange: any;
};

export function DateInput({ id, name, onChange }: DatePickerProps) {
  function formatDate(unformattedDate: string) {
    const [year, month, day] = unformattedDate.split("-");
    return `${day}/${month}/${year}`;
  }

  const handleDateChange = (date: any) => {
    if (date) {
      const correctDate = formatDate(date);
      onChange(name, correctDate);
    }
  };

  return (
    <div>
      <DatePicker
        id={id}
        name={name}
        className={"bg-white p-1 border border-black rounded"}
        format="dd-MM-yyyy"
        onChange={(value: any) =>
          handleDateChange(value.toISOString().split("T")[0])
        }
        yearPlaceholder="2024"
        monthPlaceholder="12"
        dayPlaceholder="31"
        openCalendarOnFocus={false}
        clearIcon={null}
        calendarIcon={null}
      />
    </div>
  );
}
