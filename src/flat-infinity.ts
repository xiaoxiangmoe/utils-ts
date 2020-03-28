type ArrayElement<T> = {
  isArray: ArrayElem<T extends ReadonlyArray<infer E> ? E : never>;
  notArray: T;
}[T extends ReadonlyArray<any> ? 'isArray' : 'notArray'];

type ArrayElem<T> = T extends ReadonlyArray<any> ? ArrayElement<T> : T;

/**
 *
 * @param xs the input array
 * @returns `xs.flat(Infinity)`
 */
export function flatInfinity<T>(xs: ReadonlyArray<T>): Array<ArrayElem<T>> {
  return xs.flat(Infinity);
}
