import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import replace from 'rollup-plugin-replace';

import packageJSON from "./package.json";
const input = "./src/components/index.js";

const env = process.env.NODE_ENV;

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
      commonjs()
    ]
  }
];