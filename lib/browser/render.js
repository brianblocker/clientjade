jade.templates = {};
jade.render = function(template, data, callback) {
  var tmp = jade.templates[template](data);
  
  callback(null, tmp);
};
