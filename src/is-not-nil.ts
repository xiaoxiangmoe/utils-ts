/**
 *
 * @public
 */
export function isNotNil<T>(x: T): x is NonNullable<T> {
  return x != null;
}

/**
 *
 * @public
 */
export function isNotNull<T>(x: T): x is Exclude<T, null> {
  return x !== null;
}

/**
 *
 * @public
 */
export function isNotUndefined<T>(x: T): x is Exclude<T, undefined> {
  return x !== undefined;
}
