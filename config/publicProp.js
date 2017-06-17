const paths = require('./paths');
const path = require('path');
const antdVars = require('./antdVars');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

exports.resolve = {
  // This allows you to set a fallback for where Webpack should look for modules.
  // We placed these paths second because we want `node_modules` to "win"
  // if there are any conflicts. This matches Node resolution mechanism.
  // https://github.com/facebookincubator/create-react-app/issues/253
  modules: ['node_modules', paths.appNodeModules].concat(
    // It is guaranteed to exist because we tweak it in `env.js`
    process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
  ),
  // These are the reasonable defaults supported by the Node ecosystem.
  // We also include JSX as a common component filename extension to support
  // some tools, although we do not recommend using it, see:
  // https://github.com/facebookincubator/create-react-app/issues/290
  extensions: ['.js', '.json', '.jsx'],
  alias: {
    'react-native': 'react-native-web',
  },
  plugins: [
    // Prevents users from importing files from outside of src/ (or node_modules/).
    // This often causes confusion because we only process files within src/ with babel.
    // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
    // please link the files into your node_modules/ and let module-resolution kick in.
    // Make sure your source files are compiled, as they will not be processed in any way.
    new ModuleScopePlugin(paths.appSrc),
  ],
};

exports.vender = [
  'react',
  'react-dom'
];

exports.lessLoader = {
  options: {
    modifyVars: antdVars,
  }
};
// module.exports = ;
