const {
    override,
    fixBabelImports,
    addLessLoader,
    disableEsLint,
    addBabelPlugins
} = require('customize-cra');

module.exports = override(
    disableEsLint(),
    ...addBabelPlugins('styled-jsx/babel'),
    addLessLoader({ javascriptEnabled: true }),
    fixBabelImports('import', { libraryName: 'antd', libraryDirectory: 'es', style: true })
);