import { join } from "path";
import pkg from "./package.json";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  noPublicDir: true,
  srcDir: "./src",
  runtimeConfig: {
    version: pkg.version
  },
  alias: {
    "@": join(__dirname, "src")
  },
  routeRules: {
    '/': { cors: true, headers: { 'access-control-allow-origin': "https://movie.sawako.dev", 'access-control-allow-methods': 'GET' } }
  }
});
