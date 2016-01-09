'use strict'

var _ = require('lodash');

var AppGeneratorBase = require('../boot.js');

module.exports = AppGeneratorBase.extend({

  constructor: function () {

    AppGeneratorBase.apply(this, arguments);

    // define instance methods here which don't auto execute
    this.helper = function () {
      console.log('hello from app command instance method');
    };

    this.getAppName = function (callback) {

      this.prompt({
        type: 'input',
        name: 'appname',
        message: 'Enter the project name',
        default: this.appname
      }, 
      callback.bind(this));

    };

  },
  // create the files at the root of the project
  createRootFiles: function () {
    this.getAppName(function (answer) {
      this.config.set('appname', answer.appname);
      this.$writeFileFromTemplate(
        'README.md',
        'README.md',
        { title: answer.appname }
      );
    });
  }

});
  
