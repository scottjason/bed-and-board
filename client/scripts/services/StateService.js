angular.module('ScrapeRentals')
  .service('StateService', function() {

    'use strict'

    var data = {
      'SearchForm': {
        'isValid': false,
        'requestOpts': null
      }
    };

    return ({
      data: data
    });
  });
