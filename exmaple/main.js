const m  = require('..');
const c = require('turbocolor').cyan

const log = console.log.bind(console)

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

log(`source:${c(options.name)} > in main.js get`)
log(c(w.get('name')))
log(`in main.js set > ${c('other')}`)
w.set('name','other')
log()
require('./other')
log()
log(`after ${c('run other.js')} set ${c('yobrave')},in main.js get >`)
log(c(w.get('name')))
