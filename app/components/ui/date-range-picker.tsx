"use client";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import type * as React from "react";
import type { DateRange } from "react-day-picker";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { REPORTING_RANGES } from "~/data/constants";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const DEFAULT_DATE_RANGE = {
  from: addDays(new Date(), -14),
  to: new Date(),
};

export function DatePickerWithRange({
  className,
  selected,
  onRangeChange,
}: React.HTMLAttributes<HTMLDivElement> & { selected?: DateRange; onRangeChange?: (range: DateRange) => void }) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn("w-[240px] justify-start text-left font-normal", !selected && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected?.from ? (
              selected.to ? (
                <>
                  {format(selected.from, "LLL dd, y")} - {format(selected.to, "LLL dd, y")}
                </>
              ) : (
                format(selected.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <menu className={"p-2"}>
            <Select
              onValueChange={(value: string) => {
                const endDate = new Date();
                const startDate = addDays(endDate, -Number.parseInt(value));
                onRangeChange?.({ from: startDate, to: endDate });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select existing range" />
              </SelectTrigger>
              <SelectContent position="popper">
                {REPORTING_RANGES.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </menu>

          <Calendar
            initialFocus
            mode="range"
            defaultMonth={selected?.from}
            selected={selected}
            onSelect={(range) => {
              if (range) {
                onRangeChange?.(range);
              }
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
