type MutableEntryOf<E, key extends keyof E> = key extends any
  ? [key, E[key]]
  : never;

/**
 *
 * @public
 */
export function enumEntriesMutable<E>(e: E): Array<MutableEntryOf<E, keyof E>> {
  const entries = Object.entries(e);
  const plainStringEnum = entries.every(
    ([key, value]) => typeof value === 'string',
  );
  return (
    plainStringEnum
      ? entries
      : entries.filter(([k, v]) => typeof v !== 'string')
  ) as any;
}

/**
 *
 * @public
 */
export function enumKeysMutable<E>(e: E): Array<keyof E> {
  return enumEntriesMutable(e).map(([key]) => key as any);
}

/**
 *
 * @public
 */
export function enumValuesMutable<E>(e: E): Array<E[keyof E]> {
  const values = Object.values(e);
  const plainStringEnum = values.every((x) => typeof x === 'string');
  return plainStringEnum ? values : values.filter((x) => typeof x !== 'string');
}

type EntryOf<E, key extends keyof E> = keyof E extends any
  ? readonly [key, E[key]]
  : never;

/**
 *
 * @public
 */
export function enumEntries<E>(
  e: E,
  // @ts-ignore
): ReadonlyArray<EntryOf<E, keyof E>> {
  return enumEntriesMutable(e) as any;
}

/**
 *
 * @public
 */
export function enumKeys<E>(e: E): ReadonlyArray<keyof E> {
  return enumKeysMutable(e);
}

/**
 *
 * @public
 */
export function enumValues<E>(e: E): ReadonlyArray<E[keyof E]> {
  return enumValuesMutable(e);
}
