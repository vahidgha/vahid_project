const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // Load antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // Add `javascriptEnabled` and antd theme configuration
  // to the Less loader
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { 
        '@primary-color': '#27b3c8',
        '@border-radius-base': '5px',
        '@heading-color':'#29513c',
        '@heading-1-size':'1.4rem'
      },
    }
  }),
);