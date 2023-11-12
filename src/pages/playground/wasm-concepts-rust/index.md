---
layout: "~/layouts/PlaygroundLayout.astro"
github: adbl/playground-wasm-concepts-rust
date: 2023-11-04
---

Playing with the [Wasm by Example](https://wasmbyexample.dev) concepts.

- [hello-world](/playground/wasm-concepts-rust/hello-world)
- [linear-memory](/playground/wasm-concepts-rust/linear-memory)
- [import-js-functions](/playground/wasm-concepts-rust/import-js-functions)

### Notes

- Rust projects located under repo root `rust/...`
- WASM compiled using `wasm-bind --target web`
- Packages are installed using `yarn add link:./rust/<project>/pkg`.
