import { signalStoreFeature } from './create_store';
import { withMethods } from './with_methods';
import { withState } from './with_state';

export function withLoadingIndicator() {
  return signalStoreFeature(
    withState({
      isLoading: false,
    }),
    withMethods((store) => ({
      startLoading: () => store.update({ isLoading: true }),
      stopLoading: () => store.update({ isLoading: false }),
    })),
  );
}
