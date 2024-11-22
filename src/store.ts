export type SignalStore = {
  computed: unknown;
  methods: unknown;
  state: unknown;
};

export type TypedSignalStore<STATE, METHODS, COMPUTED> = {
  computed: COMPUTED;
  methods: METHODS;
  state: STATE;
};

export const EmptySignalStore: SignalStore = {
  computed: {} as const,
  methods: {} as const,
  state: {} as const,
};

export type EmptySignalStore = typeof EmptySignalStore;

export type StoreWithState<S extends SignalStore, T extends object> = {
  state: S["state"] & T;
  methods: S["methods"];
  computed: S["computed"];
};

export type StoreWithMethods<S extends SignalStore, T extends object> = {
  state: S["state"];
  methods: S["methods"] & T;
  computed: S["computed"];
};

export type StoreWithComputed<S extends SignalStore, T extends object> = {
  state: S["state"];
  methods: S["methods"];
  computed: S["computed"] & T;
};
