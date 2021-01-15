export default ["./index.js", "test/expect.js"].map((name) => ({
  input: [name],
  output: {
    dir: `dist`,
    preserveModules: true,
    sourcemap: true,
    format: "cjs",
    entryFileNames: "[name].cjs",
  },
}))
