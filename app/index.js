'use strict'

var AppGeneratorBase = require('../boot.js');

module.exports = AppGeneratorBase.extend({

  constructor: function () {

    AppGeneratorBase.apply(this, arguments);

    // define instance methods here which don't auto execute
    this.helper = function () {
      console.log('hello from app command instance method');
    }

  },
  getUserAppPrefs: function () {
    // add prompt here 
  },
  createRootFiles: function () {
    this.$writeFileFromTemplate(
      'README.md',
      './README.md',
      { title: '' }
    );
  }

});
  
