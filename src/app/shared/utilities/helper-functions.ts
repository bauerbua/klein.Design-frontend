export function isObject(obj: any): boolean {
  return typeof obj === 'object' && !Array.isArray(obj);
}

export function isBoolean(val: unknown): boolean {
  return typeof val === 'boolean';
}
