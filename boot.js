'use strict'

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  
  constructor: function () {

    generators.Base.apply(this, arguments);

    this.config.save();

  },
  // base generator method
  // methods defined in the base generator will be available in any
  // generators that extend this base. All methods in the base generator
  // should begin with a dollar sign '$' which will be the the base namespace
  // so as the avoid collisions in method names.
  $cmd: function () {
    console.log('hello from base generator');
  },
  /**
   * Function to write file to file system from a template
   *
   * @param string src - the template file relative to template dir
   * @param string dest - the path to the output file relative to the project root 
   * @param object params - the template params
   */
  $writeFileFromTemplate: function(src, dest, params) {
      this.fs.copyTpl(
        this.templatePath(src),
        this.destinationPath(dest),
        params
      );
  }

});
