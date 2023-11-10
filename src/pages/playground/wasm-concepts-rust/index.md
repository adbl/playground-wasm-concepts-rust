---
layout: "~/layouts/PlaygroundLayout.astro"
---

Playing with the [Wasm by Example](https://wasmbyexample.dev) concepts.

- [hello-world](hello-world)
- [linear-memory](linear-memory)
- [import-js-functions](import-js-functions)

### Notes

- Rust projects located under repo root `rust/...`
- WASM compiled using `wasm-bind --target web`
- Packages are installed using `yarn add link:./rust/<project>/pkg`.
