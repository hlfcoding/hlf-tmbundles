// Single line comment

/* 
  Multi-line
  comment
*/

/**
 * Doc block comment
 * @see JSDoc
 */

// IIFE
(function($) {

'use strict';

// Var declarations
var bar, baz, regexp, $node, items;
var foo = function foo() { return bar ? 'foo' : null; };
var foo2 = {
  bar: 'bar',
  baz: [baz, 2, 3],
  nums: { 1: 1, 2: 2 },
  classes: [
    Object,
    String
  ]
};
var bar2 = 'bar',
    baz2 = 'baz',
    bar3, baz3;
var someModule = (function() {
  var foo;
  return {
    nums: { 1: 1, 2: 2 },
    getFoo: function() { return foo; },
    setFoo: function(newValue) { foo = newValue; }
  };
}());

// RegExp
regexp = (/^.*$/g);
regexp = /^.*$/g;

// Class
function Model(props) {
  this.props = props;
  this._state = initialState;
}

// Methods, properties
Model.prototype.fetch = function() {
  if (this.isFetching) {
    return false;
  }
  return $.getJSON(Model.BASE_URL + 'item/' + this.props.id)
    .then(this.dataToState.bind(this))
    .then(this.setState.bind(this));
};
_.extend(Model.prototype, {
  events: {
    'change:state': function(changed) { console.log(changed); }
   },
  isFetching: false,
  dataToState: function(data /* , textStatus, jqXhr */) {
    return data.result ? data.result : data;
  },
  setState: function(state) {
    this._state = state;
  },
});

// Constant
Model._BASE_URL = 'http://my-app.com/post/';
Model.VARIANT_A = 1;
Model.VARIANT_B = 2;

// Ternary
var id = true ? 1 : 2;

// Switch
var variant;
switch(id) {
  case 1:
    variant = Model.VARIANT_A;
    break;
  case 2:
    variant = Model.VARIANT_B;
    break;
  default:
    variant = Model.VARIANT_A;
    break;
}

model = new Model({
  id: id,
  variant: variant
});
model.fetch();

// Loops
// for (…) {…} (Reverse Native For-Loop)
for (var i = items.length - 1; i >= 0; i--) {}
// for (…) {…} (Native For-Loop)
for (var i2 = 0, l2 = items.length; i2 < l2; i2++) {}

// JS Native
var timeout = setTimeout($.noop, 500);
clearTimeout(timeout);
(function() {
  setTimeout(function() {
    console.log('Test for class method pattern regression.');
  });
}());

// DOM
var element, elem, el, event, evt, e, date, view;

element = elem = el = document.createElement('div');
event = evt = e = new CustomEvent('custom');
date = new Date();

function handleEvent(event) {
  var el = event.target;
  event.preventDefault();
  event.stopPropagation();
  el.setAttribute('data-name', 'value');
}

el.addEventListener('click', handleEvent);
el.removeEventListener('click', handleEvent);
el.onchange = $.noop;

view = new View();
view.setAttribute('key', 'value');
view.addEventListener('custom', $.noop);
view.removeEventListener('custom', $.noop);
view.onchange = $.noop;

// jQuery
$el = $('#element-1');
$elem = $('#element-2');
$node = $('#element-3');
$debugger = $('.debugger');
$default = $('.default');
$event = $('.event');
$map = $('.map');
$new = $('.new-item');
$set = $('.purchase-set');
$true = $('.choice-true');
$false = $('.choice-false');
$void = $('.void-payment');

// CommonJS
module.exports = {
  Model: Model,
  View: View
};
console.log(exports);

// ES6
let fives;
let odds = evens.map(v => v + 1);
let nums = evens.map((v, i) => { return v + i; });
nums.forEach(v => {
  if (v % 5 === 0) { fives.push(v); }
});

class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials /* , options */) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  containsBones(...bones) {
    return _.every(bones, b => _.contains(this.bones, b));
  }
  update(camera = null) {
    //...
    super.update();
  }
  get $container() {
    return $('.container');
  }
  get matrixType() {
    return this.idMatrix.type;
  }
  set matrixType(matrixType) {
    this.idMatrix = SkinnedMesh[matrixType]();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}

// Basic literal string creation
var string = `In JavaScript '\n' is a line-feed.`;

// Multiline strings
var multilineString = `In JavaScript this is
not legal.`;

// String interpolation
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

}(jQuery));
