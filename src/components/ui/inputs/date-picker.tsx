import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type DatePickerProps = {
  id: string;
  name: string;
  onChange: (name: string, value: string | null) => void;
};

export function DateInput({ id, name, onChange }: DatePickerProps) {
  const handleDateChange = (
    value: Date | null | [Date | null, Date | null]
  ) => {
    if (value instanceof Date) {
      onChange(name, value.toLocaleDateString("pt-br"));
    } else if (Array.isArray(value)) {
      const startDate = value[0]?.toLocaleDateString("pt-br") || null;
      console.log(`Range selected: ${startDate}`);
      onChange(name, startDate);
    } else {
      onChange(name, null);
    }
  };

  return (
    <div>
      <DatePicker
        id={id}
        name={name}
        className="bg-white p-1 border border-black rounded"
        format="dd-MM-yyyy"
        onChange={handleDateChange} // Pass Date or null directly
        dayPlaceholder="31"
        monthPlaceholder="12"
        yearPlaceholder="2024"
        openCalendarOnFocus={false}
        clearIcon={null}
        calendarIcon={null}
      />
    </div>
  );
}
