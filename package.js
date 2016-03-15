Package.describe({
  name: 'derelinguo:speck-tackle',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'JavaScript library to create custom-tailored charts for spectroscopy in life sciences.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cbanbury/speck-tackle',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'jquery']);
  api.use('d3js:d3');
  api.addFiles('st.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('derelinguo:speck-tackle');
  api.addFiles('speck-tackle-tests.js');
});
