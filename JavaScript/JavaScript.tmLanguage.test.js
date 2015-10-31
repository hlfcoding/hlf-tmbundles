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
var foo = function foo() { return 'foo'; };
var foo2 = { bar: 'baz' };
var bar2 = 'bar',
    baz2 = 'baz';

// RegExp
regexp = (/^.*$/g);
regexp = /^.*$/g;

// jQuery
$el = $('#element-1');
$elem = $('#element-2');
$node = $('#element-3');

// Class
function Model(props) {
  this.props = props;
  this._state = initialState;
}

// Methods
Model.prototype.fetch = function() {
  return $.getJSON(Model.BASE_URL + 'item/' + this.props.id)
    .then(this.dataToState.bind(this))
    .then(this.setState.bind(this));
};
_.extend(Model.prototype, {
  dataToState: function(data /* , textStatus, jqXhr */) {
    return data.result;
  },
  setState: function(state) {
    this._state = state;
  },
});

// Constant
Model.BASE_URL = 'http://my-app.com/post/';
Model.VARIANT_A = 1;
Model.VARIANT_B = 2;

model = new Model({
  id: 1,
  variant: Model.VARIANT_A
});
model.fetch();

// Loops
// for (…) {…} (Reverse Native For-Loop)
for (var i = items.length - 1; i >= 0; i--) {}
// for (…) {…} (Native For-Loop)
for (var i2 = 0, l2 = items.length; i2 < l2; i2++) {}

}(jQuery));
