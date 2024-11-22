import type { SignalStoreFeature } from "./create_store";
import type { SignalStore } from "./store";
import { computed as computedFn } from "@preact/signals-core";
import type { ComputedMethods, ToSignals } from "./utils";

export function withComputed<S extends SignalStore, C extends object>(
  computed: ComputedMethods<S["state"], C>
): SignalStoreFeature<
  S,
  {
    computed: ToSignals<C>;
  }
> {
  return (store) => {
    const result = {} as ToSignals<C>;
    for (const key in computed) {
      const value = computedFn(() =>
        computed[key](store.state as ToSignals<S["state"]>)
      );
      Object.defineProperty(result, key, {
        get: () => value,
        enumerable: true,
        configurable: true,
      });
    }
    return { computed: result };
  };
}
