import { Signal } from "@preact/signals-core";
import { EmptySignalStore, type SignalStore } from "./store";

export type SignalStoreFeature<Input, Output> = (store: Input) => Output;

type ReadonlySignals<T> = {
  readonly [K in keyof T]: Readonly<Signal<T[K]>>;
};

export type Store<T> = T extends SignalStore
  ? ReadonlySignals<T["state"]> &
      Readonly<T["methods"]> &
      Readonly<T["computed"]>
  : never;

export function createStore<T1>(
  m: SignalStoreFeature<EmptySignalStore, T1>
): Store<T1>;
export function createStore<T1, T2>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>
): Store<T1 & T2>;
export function createStore<T1, T2, T3>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  m3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>
): Store<T1 & T2 & T3>;
export function createStore<T1, T2, T3, T4>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  m3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>,
  m4: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3, T4>
): Store<T1 & T2 & T3 & T4>;
export function createStore<T1, T2, T3, T4, T5>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  m3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>,
  m4: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3, T4>,
  m5: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4, T5>
): Store<T1 & T2 & T3 & T4 & T5>;
export function createStore<T1, T2, T3, T4, T5, T6>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  m3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>,
  m4: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3, T4>,
  m5: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4, T5>,
  m6: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5, T6>
): Store<T1 & T2 & T3 & T4 & T5 & T6>;
export function createStore<T1, T2, T3, T4, T5, T6, T7>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  m3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>,
  m4: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3, T4>,
  m5: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4, T5>,
  m6: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5, T6>,
  m7: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6, T7>
): Store<T1 & T2 & T3 & T4 & T5 & T6 & T7>;
export function createStore<T1, T2, T3, T4, T5, T6, T7, T8>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  m3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>,
  m4: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3, T4>,
  m5: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4, T5>,
  m6: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5, T6>,
  m7: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6, T7>,
  m8: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7,
    T8
  >
): Store<T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8>;
export function createStore<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  m3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>,
  m4: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3, T4>,
  m5: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4, T5>,
  m6: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5, T6>,
  m7: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6, T7>,
  m8: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7,
    T8
  >,
  m9: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8,
    T9
  >
): Store<T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9>;
export function createStore<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  m3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>,
  m4: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3, T4>,
  m5: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4, T5>,
  m6: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5, T6>,
  m7: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6, T7>,
  m8: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7,
    T8
  >,
  m9: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8,
    T9
  >,
  m10: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9,
    T10
  >
): Store<T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10>;
export function createStore<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
  m1: SignalStoreFeature<EmptySignalStore, T1>,
  m2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  m3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>,
  m4: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3, T4>,
  m5: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4, T5>,
  m6: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5, T6>,
  m7: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6, T7>,
  m8: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7,
    T8
  >,
  m9: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8,
    T9
  >,
  m10: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9,
    T10
  >,
  m11: SignalStoreFeature<
    EmptySignalStore & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10,
    T11
  >
): Store<T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11>;
export function createStore<T extends SignalStore>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...mods: SignalStoreFeature<any, any>[]
): Store<T> {
  const state = {
    state: {} as Record<string, unknown>,
    methods: {} as Record<string, unknown>,
    computed: {} as Record<string, Signal<unknown>>,
  };

  for (const mod of mods) {
    const append = mod(state);

    if ("state" in append) {
      state.state = { ...state.state, ...append.state };
    }
    if ("methods" in append) {
      state.methods = { ...state.methods, ...append.methods };
    }
    if ("computed" in append) {
      state.computed = { ...state.computed, ...append.computed };
    }
  }

  const result = {};

  for (const key in state.state) {
    Object.defineProperty(result, key, {
      get: () => state.state[key],
      enumerable: true,
    });
  }

  for (const key in state.methods) {
    Object.defineProperty(result, key, {
      value: state.methods[key],
      enumerable: false,
    });
  }

  for (const key in state.computed) {
    Object.defineProperty(result, key, {
      get: () => state.computed[key],
      enumerable: true,
    });
  }

  return result as Store<T>;
}

export function signalStoreFeature<T1>(
  features: SignalStoreFeature<EmptySignalStore, T1>
): SignalStoreFeature<EmptySignalStore, T1>;
export function signalStoreFeature<T1, T2>(
  features: SignalStoreFeature<EmptySignalStore, T1>,
  features2: SignalStoreFeature<EmptySignalStore & T1, T2>
): SignalStoreFeature<EmptySignalStore, T1 & T2>;
export function signalStoreFeature<T1, T2, T3>(
  features: SignalStoreFeature<EmptySignalStore, T1>,
  features2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  features3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>
): SignalStoreFeature<EmptySignalStore, T1 & T2 & T3>;
export function signalStoreFeature<T1, T2, T3, T4>(
  features: SignalStoreFeature<EmptySignalStore, T1>,
  features2: SignalStoreFeature<EmptySignalStore & T1, T2>,
  features3: SignalStoreFeature<EmptySignalStore & T1 & T2, T3>,
  features4: SignalStoreFeature<EmptySignalStore & T1 & T2 & T3, T4>
): SignalStoreFeature<EmptySignalStore, T1 & T2 & T3 & T4>;
export function signalStoreFeature(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...features: SignalStoreFeature<any, any>[]
): // eslint-disable-next-line @typescript-eslint/no-explicit-any
SignalStoreFeature<EmptySignalStore, any> {
  return (_) => {
    const state = {
      state: {} as Record<string, unknown>,
      methods: {} as Record<string, unknown>,
      computed: {} as Record<string, Signal<unknown>>,
    };

    for (const mod of features) {
      const append = mod(state);
      if ("state" in append) {
        state.state = { ...state.state, ...append.state };
      }
      if ("methods" in append) {
        state.methods = { ...state.methods, ...append.methods };
      }
      if ("computed" in append) {
        state.computed = { ...state.computed, ...append.computed };
      }
    }
    return state;
  };
}
