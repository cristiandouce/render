
# render

  Template render utility. It takes a `template` compiling function and a `locals` object as parameters and calls the first with the second. It also allows setting `globals` by using `render.set` which gets merged at every call.

## Installation

  Install with [component(1)](http://component.io):

    $ component install cristiandouce/render

  or...

    $ npm install cristiandouce-render

## Example

```js
  var render = require('render');

  function template(locals) {
    return '<a href="' + locals.link + '" target="_blank">\n'
      + '<span>' + locals.title + '</span>\n'
      + '</a>\n';
  }

  // set some static globals
  render.set('link', 'http://github.com/cristiandouce/render');

  // context `locals`
  var locals = { title: 'cristiandouce/render' };

  render(template, locals);
  // out: <a href="http://github.com/cristiandouce/render" target="_blank"> <span>cristiandouce/render</span> </a>
```

## API

### render(template, locals)

Compiles `template` with `locals` and returns `html` string of result.

```js
var render = require('render');
var template = require('./template');
var locals = { some: 'locals', obj: 1 };

var html = render(template, locals);
// outputs compiled html string
```

### render.dom(template, locals)

Offers a DOM compiled output by hand of [component/domify](https://github.com/component/domify).

```js
var render = require('render');
var template = require('./template');
var locals = { some: 'locals', obj: 1 };

var html = render.dom(template, locals);
// outputs compiled DOM html
```

### render.set(name, local)

Set a `static` global to be merged at every `render` or `render.dom` call.

```js
var render = require('render');

render.set('_i18n', require('component-t'));
// now `_i18n` will be passed to all template compilings using `render`
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.