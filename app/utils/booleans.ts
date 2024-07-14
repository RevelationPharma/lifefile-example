export function isBooleanDefined(value: boolean | undefined | null | string): value is boolean {
  return value !== undefined && value !== null;
}

export function convertBooleanString(value: string): boolean {
  return value === "true";
}
