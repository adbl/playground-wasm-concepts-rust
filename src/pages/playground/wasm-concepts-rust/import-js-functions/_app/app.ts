import wasmInit from "wasm-concepts-import-js-functions";

const runWasm = async () => {
  // Instantiate our wasm module
  const rustWasm = await wasmInit();

  // Run the exported function
  rustWasm.console_log_from_wasm(); // Should log "This console.log is from wasm!"
};
runWasm();
