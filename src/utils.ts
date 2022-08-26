/**
 * Return a range of numbers.
 *
 * @param start The first number in the range.
 * @param stop The last number in the range (exclusive).
 * @param step The step (defaults to 1).
 * @returns An array of numbers.
 */
export function range(start: number, stop: number, step: number = 1): number[] {
  const length = Math.ceil((stop - start) / step)
  return Array.from({ length }, (_, i) => i * step + start)
}

/**
 * Ensure the value is between the minimum and maximum value.
 *
 * @param value The value to be constrained
 * @param min The minimum allowed value
 * @param max The maximum allowable value
 * @returns The value bounded by the constraints
 */
export const limitValue = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(value, max))
