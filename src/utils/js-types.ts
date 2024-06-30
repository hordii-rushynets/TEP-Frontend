import { is, reject } from "ramda";

export const isStr = is(String);
export const isNum = is(Number);
export const isNaN = Number.isNaN;
export const isObj = is(Object);
export const isArr = is(Array);

export function objRemoveUndefinedValues<
  T extends {
    [key: string]: string | number | boolean | undefined | null | object;
  },
>(obj: T) {
  return reject((value) => value === undefined, obj);
}

export function isFulfilled<T>(
  val: PromiseSettledResult<T>,
): val is PromiseFulfilledResult<T> {
  return val.status === "fulfilled";
}
