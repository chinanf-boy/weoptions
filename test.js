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

test.failing('id number fail', t => {
	let options = Object.assign({}, Options);

	let w = m(123)(options);
	// init
	t.is(w.get(), true);
});

test('init id:123', t => {
	let options = Object.assign({}, Options);

	let w = m('123')(options);
	// init

	t.is(!!w.get, true);
	t.is(!!w.set, true);
	t.is(!!w.S, false);
});

test.failing('init again options id:123 fail', t => {
	let options = Object.assign({}, Options);

	let w = m('123', true)(options);
	// init

	t.is(!!w.get, true);
	t.is(!!w.set, true);
	t.is(!!w.S, true);
});

test('init strict again id:123 ', t => {
	let options = Object.assign({}, Options);

	let w = m('123');
	// init
	w._setStrict(true);
	// set
	t.is(!!w.get, true);
	t.is(!!w.set, true);
	t.is(!!w.S, true);
});

test('get all id:123 ', t => {
	let options = Object.assign({}, Options);

	let w = m('123');
	// init

	let nO = Object.assign({}, options);
	let g = w.get();

	t.deepEqual(g, nO);
});

test('get details id:123', t => {
	let options = Object.assign({}, Options);

	let w = m('123');
	// init
	let r = w.get('name');
	t.is(r, 'yobrave');
});

test('id:123 set with create strict=false, return set new value', t => {
	let options = Object.assign({}, Options);

	let w = m('123');
	// init
	w._setStrict(false);
	// set
	let setV = 'set with create strict=false';

	let res = w.set('c.s', setV);

	t.is(res, setV);
});

test('id:222 set with edit strict=true, return set new value', t => {
	let options = Object.assign({}, Options);

	let w = m('222', true)(options);
	// init
	let same = 'set with edit strict=true';

	let res = w.set('a.b.c', same);

	t.is(res, same);
});

test.failing('id:222 set with create strict=true, throw', t => {
	let options = Object.assign({}, Options);

	let w = m('222');
	// get id
	let setV = 'set with create strict=true, throw';

	let res = w.set('c.s', setV);

	t.is(res, setV);
});
