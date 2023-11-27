function groupBy<T>(array: T[], getKey: (item: T) => string): { [key: string]: T[] } {
  return array.reduce((result, item) => {
    const key = getKey(item);
    (result[key] || (result[key] = [])).push(item);
    return result;
  }, {} as { [key: string]: T[] });
}
