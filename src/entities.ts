import { signalStoreFeature } from "./create_store";
import { withMethods } from "./with_methods";
import { withState } from "./with_state";
import { withComputed } from "./with_computed";
import { omit } from "./utils";

export function withEntities<E extends { id: string | number | symbol }>() {
  return signalStoreFeature(
    withState({
      _entities: {} as Record<E["id"], E>,
    }),
    withMethods((store) => ({
      addEntity: (entity: E) =>
        store.update({
          _entities: {
            ...store._entities,
            [entity.id]: entity,
          },
        }),
      addEntities: (entities: E[]) =>
        store.update({
          _entities: {
            ...store._entities,
            ...entities.reduce(
              (acc, entity) => ({
                ...acc,
                [entity.id]: entity,
              }),
              {}
            ),
          },
        }),
      deleteEntity: (id: E["id"]) => {
        if (id in store._entities) {
          store.update({
            _entities: omit(store._entities, id),
          });
        }
      },
    })),
    withComputed({
      entities: ({ _entities }) => Object.values<E>(_entities.value),
    })
  );
}

export function withSelectedEntity<E>() {
  return signalStoreFeature(
    withState({
      selectedEntity: null as E | null,
    }),
    withMethods((store) => ({
      select: (e: E) => store.update({ selectedEntity: e }),
      clearSelected: () => store.update({ selectedEntity: null }),
    }))
  );
}
