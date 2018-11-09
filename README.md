# SublimeText Package Overrides

These changesets improve upon existing functionality. I use and improve them myself every day. Previews rendered in [BlackboardImproved theme](https://gist.github.com/hlfcoding/1786860).

## CSS Package

- Marks boilerplate for dimming
- Generally up-to-date CSS syntax highlighting (CSS4)
- Compatible with ST2

## JavaScript Package

### Language Patterns & Highlighting

See [test file](https://github.com/hlfcoding/hlf-tmbundles/blob/master/JavaScript/JavaScript.tmLanguage.test.js) for more examples. Main features:

Generally up-to-date JS syntax highlighting (ES6, ES7). Compatible with ST2.

![image](https://cloud.githubusercontent.com/assets/100884/11114442/aabc7584-88d9-11e5-9516-7aa9651a944f.png)

```js
let fives;
let odds = evens.map(v => v + 1);
nums.forEach((v) => {
  if (v % 5 === 0) { fives.push(v); }
});

class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);
    //...
  }
  get type() { /*...*/ }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

Accounts for JS boilerplate language. Assumes you are experienced with JS and are looking for a bundle that makes it less painful to write JS all day, in lieu of CoffeeScript (RIP).

![image](https://cloud.githubusercontent.com/assets/100884/11114466/c8234580-88d9-11e5-9b16-7dfa9d5b58fb.png)

```js
var foo, bar, baz;
var obj = {};
obj.method = function func() {};
```

Assumes you follow conventions with naming instances: `element` `elem` `el`. Assumes you care about at least viewing the DOM api with proper highlighting.

![image](https://cloud.githubusercontent.com/assets/100884/11114494/fea69684-88d9-11e5-829d-d33ceaf6679b.png)

```js
var element = elem = el = document.createElement('div');
el.addEventListener('click', handleEvent);

var event = evt = e = new CustomEvent('custom');
event.stopPropagation();
```
