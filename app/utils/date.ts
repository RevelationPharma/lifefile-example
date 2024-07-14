import { endOfDay } from "date-fns/endOfDay";
import { endOfMonth } from "date-fns/endOfMonth";
import { endOfQuarter } from "date-fns/endOfQuarter";
import { startOfDay } from "date-fns/startOfDay";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfQuarter } from "date-fns/startOfQuarter";
import { subMonths } from "date-fns/subMonths";
import { subQuarters } from "date-fns/subQuarters";

interface DateRangeReturn {
  startDate: Date;
  endDate: Date;
}

interface DateRangeParams {
  currentDate?: Date;
  offset?: number;
}

const DEFAULTS = {
  currentDate: new Date(),
  offset: 0,
};

export function isValidDateValue(date: string | null): date is string {
  return !!date && !Number.isNaN(Date.parse(date));
}

/**
 * Get the start and end dates of the previous month
 *
 * @returns An object containing the start and end dates of the previous month.
 */
export function getPreviousMonthStartEndDates(params: DateRangeParams = {}): DateRangeReturn {
  const { currentDate = DEFAULTS.currentDate } = params;
  const startOfPreviousMonth = startOfMonth(subMonths(startOfDay(currentDate), 1));
  const endOfPreviousMonth = endOfMonth(subMonths(endOfDay(currentDate), 1));

  return {
    startDate: startOfPreviousMonth,
    endDate: endOfPreviousMonth,
  };
}

/**
 * Get the start and end dates of the current quarter.
 *
 * @returns An object containing the start and end dates of the current quarter.
 */
export const getCurrentQuarterDates = (params: DateRangeParams = {}): DateRangeReturn => {
  const { currentDate = new Date(), offset = 0 } = params;
  const startDate = startOfQuarter(subQuarters(currentDate, offset));
  const endDate = endOfQuarter(subQuarters(currentDate, offset));

  return { startDate, endDate };
};
