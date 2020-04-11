/**
 *
 * alias of `Array.isArray`
 *
 * @example
 * declare const a: readonly number[] | number;
 * const b = isReadonlyArray(a) ? a : [a]; // type is readonly number[]
 *
 * @public
 */
export const isReadonlyArray = Array.isArray as (
  arg: any,
) => arg is readonly any[];
