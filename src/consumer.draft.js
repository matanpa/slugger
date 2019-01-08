const marker = require('@ajar/marker');
const slugger = require('./index.js');

marker.blue(slugger('first string slugger', 'second string slugger'));
marker.blue('first string', 'second string');