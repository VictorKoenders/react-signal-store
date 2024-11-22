import { batch, Signal } from "@preact/signals-core";
import type { SignalStoreFeature } from "./create_store";
import type { SignalStore } from "./store";

export type SignalRecordToValue<T> = {
  [K in keyof T]: T[K] extends Signal<infer S> ? S : never;
};

export type MethodsStore<S extends SignalStore> = {
  update: (state: Partial<S["state"]>) => void;
} & S["state"] &
  S["methods"];

export function withMethods<
  S extends SignalStore,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  FNS extends Record<string, Function>
>(
  fns: (store: MethodsStore<S>) => FNS
): SignalStoreFeature<S, { methods: FNS }> {
  return (store) => {
    const methodsStore: object = {
      update: (part: Partial<SignalRecordToValue<S["state"]>>): void => {
        batch(() => {
          for (const key in part) {
            console.log("Setting field ", key, " to ", part[key]);
            (store.state as Record<string, Signal<unknown>>)[key].value =
              part[key];
          }
        });
      },
    };
    const state = (store.state as Record<string, Signal<unknown>>) ?? {};
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    const existingMethods = (store.methods as Record<string, Function>) ?? {};

    for (const key of Object.getOwnPropertyNames(state)) {
      Object.defineProperty(methodsStore, key, {
        get: () => state[key].value,
        enumerable: true,
      });
    }

    for (const method of Object.getOwnPropertyNames(existingMethods)) {
      Object.defineProperty(methodsStore, method, {
        value: existingMethods[method],
        enumerable: false,
      });
    }

    const methods = fns(methodsStore as MethodsStore<S>);

    return {
      methods,
    };
  };
}
