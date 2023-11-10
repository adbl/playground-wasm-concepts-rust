/* tslint:disable */
/* eslint-disable */
/**
* @param {number} value
*/
export function store_value_in_wasm_memory_buffer_index_zero(value: number): void;
/**
* @returns {number}
*/
export function get_wasm_memory_buffer_pointer(): number;
/**
* @returns {number}
*/
export function read_wasm_memory_buffer_and_return_index_one(): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly store_value_in_wasm_memory_buffer_index_zero: (a: number) => void;
  readonly get_wasm_memory_buffer_pointer: () => number;
  readonly read_wasm_memory_buffer_and_return_index_one: () => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
