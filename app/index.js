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
  // this will auto execute when app cmd is run
  method1: function () {
    // executing base generator method
    this.$cmd();
    console.log('hello from app command auto execute');
    this.helper();
  },

});
  
