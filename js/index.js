const js = import("../pkg/webpack-itgr.js");

js.then(js => {
  js.greet("WebAssembly");
}).catch(error => {
  console.error(error);
});
