import test from 'ava';
import m from '.';

let Options = {
	name: 'yobrave',
	a: {
		b: {
			c: 1,
		},
	},
	// ...
};

test.failing('title', t => {
	let options = Object.assign({}, Options);

	let w = m(123)(options);
	// init
	console.log(w);

	t.is(w.get(), true);
});

test('init', t => {
	let options = Object.assign({}, Options);

	let w = m('123')(options);
	// init

	t.is(!!w.get, true);
	t.is(!!w.set, true);
	t.is(w.v, undefined);
});

test('init strict', t => {
	let options = Object.assign({}, Options);

	let w = m('123', true)(options);
	// init

	t.is(!!w.get, true);
	t.is(!!w.set, true);
	t.is(w.v, 1);
});

test('get all', t => {
	let options = Object.assign({}, Options);

	let w = m('123')(options);
	// init

	let nO = Object.assign({}, options);
	let g = w.get();

	t.deepEqual(g, nO);
});

test('get details', t => {
	let options = Object.assign({}, Options);

	let w = m('123')(options);
	// init
	let r = w.get('name');
	t.is(r, 'yobrave');
});

test('set with create strict=false, return set new value', t => {
	let options = Object.assign({}, Options);

	let w = m('123')(options);
	// init
	let setV = 'set with create strict=false';

	let res = w.set('c.s', setV);

	t.is(res, setV);
});

test('set with edit strict=true, return set new value', t => {
	let options = Object.assign({}, Options);

	let w = m('123')(options);
	// init
	let same = 'set with edit strict=true';

	let res = w.set('a.b.c', same);

	t.is(res, same);
});

test.failing('set with create strict=true, throw', t => {
	let options = Object.assign({}, Options);

	let w = m('123', true)(options);
	// init
	let setV = 'set with create strict=true, throw';

	let res = w.set('c.s', setV);

	t.is(res, setV);
});
