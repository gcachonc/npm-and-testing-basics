const lodash = require("lodash");

/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(pepe) {
  // TODO implement
  return lodash.times(pepe, lodash.uniqueId.bind(null, 'ball_'));
}

function toCamelCase(string) {
  // TODO implement
  return lodash.camelCase(string);
}

function getIndexOf(array, value) {
  // TODO implement
  return lodash.indexOf(array,value);
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
