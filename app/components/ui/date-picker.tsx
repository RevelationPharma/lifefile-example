"use client";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";

import { clsx } from "clsx";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";

export function DatePicker({
  onDateChange,
}: {
  onDateChange: (date: Date | undefined) => void;
}) {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    if (onDateChange) {
      console.log("date change inside picker", date);
      onDateChange(date);
    }
  }, [date, onDateChange]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={clsx("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
