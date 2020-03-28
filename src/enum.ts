export function enumEntriesMutable<T>(t: T): Array<[keyof T, T[keyof T]]> {
  const entries = Object.entries(t);
  const plainStringEnum = entries.every(
    ([key, value]) => typeof value === 'string',
  );
  return (plainStringEnum
    ? entries
    : entries.filter(([k, v]) => typeof v !== 'string')) as any;
}

export function enumKeysMutable<T>(t: T): Array<keyof T> {
  return enumEntriesMutable(t).map(([key]) => key);
}

export function enumValuesMutable<T>(t: T): Array<T[keyof T]> {
  const values = Object.values(t);
  const plainStringEnum = values.every((x) => typeof x === 'string');
  return plainStringEnum ? values : values.filter((x) => typeof x !== 'string');
}

export const enumEntries: <T>(
  t: T,
) => ReadonlyArray<readonly [keyof T, T[keyof T]]> = enumEntriesMutable;

export const enumKeys: <T>(t: T) => ReadonlyArray<keyof T> = enumKeysMutable;

export const enumValues: <T>(
  t: T,
) => ReadonlyArray<T[keyof T]> = enumValuesMutable;
