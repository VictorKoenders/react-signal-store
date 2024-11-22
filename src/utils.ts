import { Signal } from "@preact/signals-core";

export function omit<
  K extends string | number | symbol,
  T extends Record<K, unknown>
>(obj: T, keys: K | Array<K>): T;
export function omit<T extends object>(
  obj: T,
  key: keyof T
): Omit<T, typeof key>;
export function omit<T extends object>(
  obj: T,
  keys: Array<keyof T>
): Omit<T, (typeof keys)[0]>;
export function omit<T extends object>(
  obj: T,
  keys: keyof T | Array<keyof T>
): Omit<T, keyof T> {
  const result: Record<keyof T, unknown> = {} as Record<keyof T, unknown>;
  for (const k in obj) {
    if (Array.isArray(keys) ? !keys.includes(k) : k !== keys) {
      result[k] = obj[k];
    }
  }
  return result as Omit<T, keyof T>;
}

export type ToSignals<S> = {
  [K in keyof S]: Signal<S[K]>;
};

export type ComputedMethods<S, C> = {
  [K in keyof C]: (signals: ToSignals<S>) => C[K];
};
