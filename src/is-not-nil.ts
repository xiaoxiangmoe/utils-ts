export function isNotNil<T>(x: T): x is NonNullable<T> {
  return x != null;
}

export function isNotNull<T>(x: T | null): x is T {
  return x !== null;
}

export function isNotUndefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
