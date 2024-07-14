import { endOfQuarter } from "date-fns/endOfQuarter";
import { startOfQuarter } from "date-fns/startOfQuarter";
import { getCurrentQuarterDates, getPreviousMonthStartEndDates } from "~/utils/date";

describe("getPreviousMonthStartEndDates", () => {
  const testCases = [
    {
      currentDate: new Date(2024, 6, 1), // July 1, 2024
      expectedStartDate: new Date(2024, 5, 1), // June 1, 2024
      expectedEndDate: new Date(2024, 5, 30, 23, 59, 59, 999), // June 30, 2024 23:59:59.999
    },
    {
      currentDate: new Date(2024, 0, 15), // January 15, 2024
      expectedStartDate: new Date(2023, 11, 1), // December 1, 2023
      expectedEndDate: new Date(2023, 11, 31, 23, 59, 59, 999), // December 31, 2023 23:59:59.999
    },
    {
      currentDate: new Date(2024, 11, 31), // December 31, 2024
      expectedStartDate: new Date(2024, 10, 1), // November 1, 2024
      expectedEndDate: new Date(2024, 10, 30, 23, 59, 59, 999), // November 30, 2024 23:59:59.999
    },
    {
      currentDate: new Date(2024, 2, 15), // March 15, 2024
      expectedStartDate: new Date(2024, 1, 1), // February 1, 2024
      expectedEndDate: new Date(2024, 1, 29, 23, 59, 59, 999), // February 29, 2024 23:59:59.999 (Leap year)
    },
    {
      currentDate: new Date(2023, 2, 15), // March 15, 2023
      expectedStartDate: new Date(2023, 1, 1), // February 1, 2023
      expectedEndDate: new Date(2023, 1, 28, 23, 59, 59, 999), // February 28, 2023 23:59:59.999 (Non-leap year)
    },
  ];

  test.each(testCases)(
    "given $currentDate, it should return start date of $expectedStartDate and end date of $expectedEndDate",
    ({ currentDate, expectedStartDate, expectedEndDate }) => {
      const { startDate, endDate } = getPreviousMonthStartEndDates({ currentDate });

      expect(startDate).toEqual(expectedStartDate);
      expect(endDate).toEqual(expectedEndDate);
    },
  );
});

describe("getCurrentQuarterDates", () => {
  const testCases = [
    {
      currentDate: new Date(2024, 6, 15), // July 15, 2024, one quarter before
      offset: 1,
      expectedStartDate: new Date(2024, 3, 1), // April 1, 2024
      expectedEndDate: new Date(2024, 5, 30, 23, 59, 59, 999), // June 30, 2024 23:59:59.999
    },
    {
      currentDate: new Date(2024, 0, 15), // January 15, 2024, current quarter
      offset: 0,
      expectedStartDate: new Date(2024, 0, 1), // January 1, 2024
      expectedEndDate: new Date(2024, 2, 31, 23, 59, 59, 999), // March 31, 2024 23:59:59.999
    },
    {
      currentDate: new Date(2024, 6, 1), // July 1, 2024, current quarter
      offset: 1,
      expectedStartDate: new Date(2024, 3, 1), // April 1, 2024
      expectedEndDate: new Date(2024, 5, 30, 23, 59, 59, 999), // June 31, 2024 23:59:59.999
    },
    {
      currentDate: new Date(2024, 11, 31), // December 31, 2024, one quarter before
      offset: 1,
      expectedStartDate: new Date(2024, 6, 1), // July 1, 2024
      expectedEndDate: new Date(2024, 8, 30, 23, 59, 59, 999), // September 30, 2024 23:59:59.999
    },
    {
      currentDate: new Date(2024, 2, 15), // March 15, 2024, two quarters before
      offset: 2,
      expectedStartDate: new Date(2023, 6, 1), // July 1, 2023
      expectedEndDate: new Date(2023, 8, 30, 23, 59, 59, 999), // September 30, 2023 23:59:59.999
    },
    {
      currentDate: new Date(2023, 7, 15), // August 15, 2023, three quarters before
      offset: 3,
      expectedStartDate: new Date(2022, 9, 1), // October 1, 2022
      expectedEndDate: new Date(2022, 11, 31, 23, 59, 59, 999), // December 31, 2022 23:59:59.999
    },
    {
      currentDate: new Date(), // No params, should use default current date
      offset: 0,
      expectedStartDate: startOfQuarter(new Date()), // Start of the current quarter
      expectedEndDate: endOfQuarter(new Date()), // End of the current quarter
    },
  ];

  test.each(testCases)(
    "given $currentDate and offset $offset, it should return start date of $expectedStartDate and end date of $expectedEndDate",
    ({ currentDate, offset, expectedStartDate, expectedEndDate }) => {
      const { startDate, endDate } = getCurrentQuarterDates({ currentDate, offset });

      expect(startDate).toEqual(expectedStartDate);
      expect(endDate).toEqual(expectedEndDate);
    },
  );
});
