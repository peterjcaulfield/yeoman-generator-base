var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var path = require('path');

describe('base:app', function() {

  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({ appname: 'joeyjoejoejuniorshabadoo' })
      .on('end', done);
  });  

  it('generate a README file', function () {
    assert.file('README.md');  
  });

  it('generates README using supplied app name from prompt', function () {
    assert.fileContent('README.md', '# joeyjoejoejuniorshabadoo #');
  });

});
