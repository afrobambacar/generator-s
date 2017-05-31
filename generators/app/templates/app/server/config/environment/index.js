'use strict';

var path = require('path');
var _ = require('lodash');

var all = {
  app_name: 'wouzoo',
  env: process.env.NODE_ENV,
  // Root path of server
  root: path.normalize(__dirname + '/../../../..'),
  // Server port
  port: process.env.PORT || 9000,
  // Server IP
  ip: process.env.IP || '0.0.0.0',
  // facebook
  facebook: {
  	client_id: '',
  	client_secret: '',
  	client_url: ''
  },
  google: {
    tracking_id: ''
  },
  twitter: {
    name: ''
  }
};

module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {}
);
