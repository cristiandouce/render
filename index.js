/**
 * Module dependencies.
 */

var domify = require('domify');
var merge = require('merge-util');

// `render` globals
var _globals = {};

exports = module.exports = render;
exports.dom = dom;
exports.set = set;

function render(template, locals) {
  var _locals = merge({}, _globals);
  return template(merge(_locals, locals, true));
}

function dom(template, locals) {
  return domify(render(template, locals));
}

function set(name, local) {
  if (2 === arguments.length) {
    return _globals[name] = local;
  }

  for (var key in name) {
    set(key, name[key]);
  }
}