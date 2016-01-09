'use strict'

var _ = require('lodash');

var AppGeneratorBase = require('../boot.js');

module.exports = AppGeneratorBase.extend({

  constructor: function () {

    AppGeneratorBase.apply(this, arguments);

    /**
     * Initialise the generator state 
     *
     * @param function callback - the callback to be executed once initialisation is done
     *                            this should be the actual generation code
     */
    this.initialize = function (callback) {

      this.prompt({
        type: 'input',
        name: 'appname',
        message: 'Enter the project name',
        default: this.appname
      }, 
      callback.bind(this));

    };

  },
  /**
   * The auto executed generator function
   */
  generate: function () {

    this.initialize(function (answer) {

      this.config.set('appname', answer.appname);

      this.$writeFileFromTemplate(
        'README.md',
        'README.md',
        { title: answer.appname }
      );

    });
  }

});
  
