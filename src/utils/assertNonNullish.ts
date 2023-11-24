export function assertNonNullish<T>(
  item: T,
  itemName: string,
): asserts item is NonNullable<T> {
  if (item == null) {
    throw new Error(
      `Variable \`${itemName}\` was expected to be defined, but found value ${item} instead`,
    );
  }
}
