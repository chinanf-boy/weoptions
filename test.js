import test from 'ava';
import m from '.';

test.failing('title', t => {
	let options = {
		name: 'yobrave',
		a: {
			b: {
				c: 1,
			},
		},
		// ...
	};

	let w = m(123)(options);
	// init
	console.log(w);

	t.is(w.get(), true);
});

test('init', t => {
	let options = {
		name: 'yobrave',
		a: {
			b: {
				c: 1,
			},
		},
		// ...
	};

	let w = m('123')(options);
	// init

	t.is(!!w.get, true);
	t.is(!!w.set, true);
	t.is(w.v, undefined);
});

test('init strict', t => {
	let options = {
		name: 'yobrave',
		a: {
			b: {
				c: 1,
			},
		},
		// ...
	};

	let w = m('123', true)(options);
	// init

	t.is(!!w.get, true);
	t.is(!!w.set, true);
	t.is(w.v, 1);
});

test('get all', t => {
	let options = {
		name: 'yobrave',
		a: {
			b: {
				c: 1,
			},
		},
		// ...
	};

	let w = m('123')(options);
	// init

	let nO = Object.assign({}, options);
	let g = w.get();

	t.deepEqual(g, nO);
});

// test("get details", t=>{

// 	let options = {
// 		name: 'yobrave',
// 		a: {
// 			b: {
// 				c: 1,
// 			},
// 		},
// 		// ...
// 	};

// 	let w = m("123")(options);
// 	// init
// 	console.log(w)

// 	t.is(w.get(), true);
// })

// test("set with create strict=false", t=>{

// 	let options = {
// 		name: 'yobrave',
// 		a: {
// 			b: {
// 				c: 1,
// 			},
// 		},
// 		// ...
// 	};

// 	let w = m("123")(options);
// 	// init
// 	console.log(w)

// 	t.is(w.get(), true);
// })

// test.failing("set with create strict=true", t=>{

// 	let options = {
// 		name: 'yobrave',
// 		a: {
// 			b: {
// 				c: 1,
// 			},
// 		},
// 		// ...
// 	};

// 	let w = m("123")(options);
// 	// init
// 	console.log(w)

// 	t.is(w.get(), true);
// })
