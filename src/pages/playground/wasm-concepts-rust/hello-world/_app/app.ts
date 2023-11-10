import init from "wasm-concepts-hello-world";

const runWasm = async () => {
  // Instantiate our wasm module
  const helloWorld = await init();

  setInterval(() => {
    // Call the Add function export from wasm, save the result
    const addResult = helloWorld.add(Math.random() * 100, Math.random() * 100);
    // Set the result onto the body
    document.getElementById("add-result")!.textContent = `${addResult}`;
  }, 1000);
};

runWasm();
