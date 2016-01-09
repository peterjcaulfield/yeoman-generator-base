'use strict'

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  
  constructor: function () {

    generators.Base.apply(this, arguments);

  },
  // base generator method
  // methods defined in the base generator will be available in any
  // generators that extend this base. All methods in the base generator
  // should begin with a dollar sign '$' which will be the the base namespace
  // so as the avoid collisions in method names.
  $cmd: function () {
    console.log('hello from base generator');
  }

});
