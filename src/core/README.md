# CORE
This folder must contain the **ALL** Application logic.\
The idea is having all the state logic in a sandbox so we can reuse it without having dependencies with components. For instance, we can package the core folder as a library and consume it in a React Native Project and in a WebApp.\

## Structure
### `/hooks`
Atomic reusable hooks.

## `/interactors`
Folder to place interactors.

An interactor is a group of modules that interacts with components. In other words, it is the bridge between the state core logic and components.
An interactor must have the following modules:
- `{ContextName}.actions.ts`: Function that returns callbacks in order to dispatch actions to the core folder.
- `use{ContextName}.ts`: Hook that returns the global state of a context.
- `types.ts`: Types
- `index.ts`: Entry point

For instance, we can have a context called me:
- `/interactors/me`
  - `me.actions.ts`
  - `useMe.ts`
  - `types.ts`
  - `index.ts`

### `/redux`
All core states must be manage here.

## `/types`
All App types must be placed here.

## `/utils`
Reusable functions that can be used in and outside the `/core` folder.
