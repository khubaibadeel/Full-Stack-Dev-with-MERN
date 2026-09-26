# React Blog Dashboard Exercise

A Vite React dashboard implementing the supplied four-blog exercise.

## Run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The initial blogs load after a simulated 650 ms request. The **Test loading error** link triggers a controlled rejected request so the error and Retry UI can be demonstrated.

## Build

```bash
npm run build
```

Components are in `src/components`, the memoized filter is in `src/hooks/useFilteredBlogs.js`, and Redux Toolkit state is in `src/store`.
