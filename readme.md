# weoptions [![Build Status](https://travis-ci.org/chinanf-boy/weoptions.svg?branch=master)](https://travis-ci.org/chinanf-boy/weoptions) [![codecov](https://codecov.io/gh/chinanf-boy/weoptions/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/weoptions?branch=master) [![explain](http://llever.com/explain.svg)](https://github.com/chinanf-boy/weoptions-explain)

> 我想要有个公共 `options`, 但可以通过不同的`ID`, just `init/get/set`

[中文](./readme.md) | ~~[english](./readme.en.md)~~

## Install

```
npm install weoptions
```

```
yarn add weoptions
```

## Usage

```js
const weoptions = require('weoptions')('id', false);

let options = {
	name: 'yobrave',
	a: {
		b: {
			c: 1,
		},
	},
	// ...
};
weoptions.init(options);
// init

weoptoins.set('a.b.c', 2); //
// true
weoptoins.set('a.b.e.d', 2); //
// if strict == false, create e d, set d=2

weoptoins.get();
// options
// or
weoptoins.get('a.b.c');
// 2
```

## API

### 1. weoptions(id, strict):WEOPTIONS

#### id

| name: | id                                                                              |
| ----- | ------------------------------------------------------------------------------- |
| Type: | `string`\|`function`                                                            |
| Desc: | the id of your options, just like [debug](https://github.com/visionmedia/debug) |

#### strict

| name:    | strict                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| Type:    | `boolean`                                                                                                    |
| Default: | `false`                                                                                                      |
| Desc:    | the `strict` of your options, if `true`, anything after `options.init` options add/remove will `throw Error` |

### - WEOPTIONS.init(options)

#### options

| name: | options      |
| ----- | ------------ |
| Type: | `any`        |
| Desc: | options init |

### - WEOPTIONS.set(position, value)

#### position

| name: | position         |
| ----- | ---------------- |
| Type: | `string`         |
| Desc: | options position |

#### value

| name: | value         |
| ----- | ------------- |
| Type: | `any`         |
| Desc: | options value |

### - WEOPTIONS.get(position)

#### position

| name: | position         |
| ----- | ---------------- |
| Type: | `string`         |
| Desc: | options position |

---

## License

MIT © [chinanf-boy](http://llever.com)
