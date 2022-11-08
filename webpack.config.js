const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'insert' : './javascript/insert.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};