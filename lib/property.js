
/**
 * juice
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

"use strict";

module.exports = exports = Property;

/**
 * Module dependencies.
 */

var utils = require('./utils');

/**
 * CSS property constructor.
 *
 * @param {String} property
 * @param {String} value
 * @param {Selector} selector the property originates from
 * @api public
 */

function Property (prop, value, selector) {
  this.prop = prop;
  this.value = value;
  this.selector = selector;
}

/**
 * Compares with another Property based on Selector#specificity.
 *
 * @api public
 */

Property.prototype.compare = function (property) {
  var a = this.selector.specificity();
  var b = property.selector.specificity();
  var winner = utils.compare(a, b);

  if (winner === a && a !== b) {
    return this;
  }
  return property;
};

/**
 * Returns CSS property
 *
 * @api public
 */

Property.prototype.toString = function () {
  return this.prop + ': ' + this.value.replace(/['"]+/g, '') + ';';
};
