// Ensure the value is between the minimum and maximum value.
export const boundValue = (min: number, value: number, max: number): number => Math.max(min, Math.min(value, max))
