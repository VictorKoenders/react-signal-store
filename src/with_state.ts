import { signal } from "@preact/signals-core";
import type { ToSignals } from "./utils";

export type FnOrValue<T> = T | (() => T);

export function withState<E>(initialState: FnOrValue<E>) {
  return function withStateInner<I>(input: I): I & { state: E } {
    const result = input as I & { state: ToSignals<E> };

    const val =
      typeof initialState === "function"
        ? // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
          (initialState as Function)()
        : initialState;
    for (const key of Object.keys(val)) {
      result.state[key as keyof E] = signal(val[key as keyof E]);
    }
    return result as I & { state: E };
  };
}
