# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Three.js + React starter

You already installed the dependencies:
```bash
npm install three @react-three/fiber
```

## Where these files go

If you already have a React project (Vite or Create React App), drop
these two files into `src/`, replacing what's there:
- `src/App.jsx`
- `src/Scene.jsx`
- `src/App.css`

If you *don't* have a React project yet, the fastest way to start one:
```bash
npm create vite@latest my-three-app -- --template react
cd my-three-app
npm install three @react-three/fiber
```
Then copy these three files into the new project's `src/` folder
(overwriting the default `App.jsx`/`App.css`) and run:
```bash
npm run dev
```

## What you should see

A page with a heading, and below it an orange box slowly spinning on
two axes.

## How the pieces fit together

- **`Canvas`** (from `@react-three/fiber`) is the entry point — it sets
  up the Three.js scene, camera, and render loop. Everything 3D goes
  inside it.
- **`<mesh>`** is a Three.js object made of a `geometry` (the shape)
  and a `material` (the surface look). This maps directly to
  `new THREE.Mesh(geometry, material)` in plain Three.js.
- **`useFrame`** is the animation hook — the function you pass it runs
  once per rendered frame. Multiplying by `delta` (time since the last
  frame) keeps motion speed consistent regardless of frame rate.
- **`useRef`** gives you a direct handle to the underlying Three.js
  object so `useFrame` can change its rotation/position without
  going through React state (which would be slower and unnecessary
  here — nothing about the *appearance* needs React to re-render).

## Next steps once this is running

- Swap `boxGeometry` for `sphereGeometry`, `torusGeometry`, or
  `icosahedronGeometry` and see how the `args` change.
- Change `meshStandardMaterial` to `meshBasicMaterial` and notice it
  stops reacting to light (no shading) — that's the difference
  between the two.
- Add `wireframe` as a prop on the material to see the mesh edges only.
- Once comfortable, this is the same foundation the wireframe hero and
  the roadmap car in your portfolio project were built on — a mesh,
  a ref, and `useFrame`.