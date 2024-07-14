"use client";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

interface DatePickerWithPresetsProps {
  isDisabledDate?: (date: Date) => boolean;
  onDateChange: (date: Date) => void;
  selected?: Date | string;
}

const predefinedValues = [
  { value: "0", label: "Today" },
  { value: "1", label: "Tomorrow" },
  { value: "3", label: "In 3 days" },
  { value: "7", label: "In a week" },
];

export function DatePickerWithPresets({
  isDisabledDate = (date) => date > new Date() || date < new Date("1900-01-01"),
  onDateChange,
  selected,
}: DatePickerWithPresetsProps) {
  // useEffect(() => {
  //   if (onDateChange && (!date || !selected || date.getTime() !== selected.getTime())) {
  //     console.log("date change inside picker", date);
  //     onDateChange(date);
  //   }
  // }, [date, onDateChange, selected]);

  return (
    <div className="flex flex-col">
      <Popover>
        <PopoverTrigger asChild>
          {/*<FormControl>*/}
          <Button
            variant={"outline"}
            className={cn("w-[220px] justify-start text-left font-normal", !selected && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected ? format(selected, "PPP") : <span>Pick a date</span>}
          </Button>
          {/*</FormControl>*/}
        </PopoverTrigger>
        <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
          <Select onValueChange={(value) => onDateChange(addDays(new Date(), Number.parseInt(value)))}>
            <SelectTrigger>
              <SelectValue placeholder="Select relative date" />
            </SelectTrigger>
            <SelectContent position="popper">
              {predefinedValues.map(
                (
                  { value, label }, // Update this line
                ) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
          <div className="rounded-md border">
            <Calendar
              disabled={isDisabledDate}
              initialFocus
              mode="single"
              onSelect={(day: Date | undefined) => !!day && onDateChange(day)}
              selected={selected instanceof Date ? selected : undefined}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
