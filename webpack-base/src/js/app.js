require('./app.css');

let _ = require('lodash');

_.each([1,2,3], function(item){
  var element = document.createElement('div');
  element.textContent = 'Item #' + item + ' added to DOM via lodash';
  document.body.appendChild(element);
});
