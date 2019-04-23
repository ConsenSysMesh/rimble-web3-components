import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import lernaGetPackages from "lerna-get-packages";
import path from "path";

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, "src/index.js");
const OUTPUT_DIR = path.join(PACKAGE_ROOT_PATH, "dist");
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, "package.json"));
const IS_BROWSER_BUNDLE = !!PKG_JSON.browser;

const ALL_MODULES = lernaGetPackages(LERNA_ROOT_PATH).map(
  ({ package: { name } }) => name
);

console.log("ALL_MODULES", ALL_MODULES)

const LOCAL_GLOBALS = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  'rimble-ui': 'RimbleUi',
  'bowser': 'Bowser',
  '@mikelockzrimble/utils': 'RimbleUtils'
};

const LOCAL_EXTERNALS = [
  'react',
  'react-dom',
  'prop-types',
  'rimble-ui',
  '@mikelockzrimble/utils',
  'bowser'
];

const mirror = array =>
  array.reduce((acc, val) => ({ ...acc, [val]: val }), {});

const formats = IS_BROWSER_BUNDLE ? ["umd"] : ["es", "cjs"];

export default formats.map(format => ({
  plugins: [
    nodeResolve({
      "jsnext:main": true,
      "browser:main": true
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        "react-js": ["isValidElementType"],
        "rimble-utils": ["RimbleUtils"]
      }
    }),
    babel({
      exclude: ["node_modules/**"],
      presets: [['@babel/preset-env', {'modules': false}],'@babel/react'],
      plugins: [['@babel/plugin-proposal-class-properties', { 'loose': true }]]
    }),
  ],
  input: INPUT_FILE,
  
  external: IS_BROWSER_BUNDLE ? LOCAL_EXTERNALS : ALL_MODULES,
  
  output: {
    file: path.join(OUTPUT_DIR, `index.${format}.js`),
    format, 
    sourcemap: true,
    name: LERNA_PACKAGE_NAME,
    globals: IS_BROWSER_BUNDLE ? mirror(ALL_MODULES) : LOCAL_GLOBALS,
    amd: {
      id: LERNA_PACKAGE_NAME
    },
    globals: LOCAL_GLOBALS
  },
}));
