const m = require('..');
const c = require('turbocolor').cyan

const log = console.log.bind(console)

let W = m('123')

log('in other.js, get')
log(c(W.get('name')))
log('in other.js,set > ',c('yobrave'))
W.set('name', 'yobrave')
