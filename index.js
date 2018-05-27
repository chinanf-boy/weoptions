'use strict';
const diff = require('deep-diff');
const delve = require('dlv');
const dset = require('dset');

let GLOBAL = {};

module.exports = (id, strict = false) => {
	if (typeof id !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof id}`);
	}
	if (GLOBAL[id]) {
		let W = GLOBAL[id];
		return W;
	}

	function weoptions(options) {
		this.id = id;
		this.options = options;
		this.S = strict;
	}

	weoptions.prototype.set = function(details, value) {
		let changeOptions = Object.assign({}, this.options);
		let willError = [];
		dset(changeOptions, details, value);

		if (this.S) {
			let addDel = ['A', 'D', 'N'];
			let diffResults = diff(this.options, changeOptions);
			if (diffResults) {
				diffResults.forEach(res => {
					if (addDel.some(u => u == res.kind)) {
						willError.push(res);
					}
				});
			}
		}

		if (willError.length) {
			throw new TypeError(JSON.stringify(willError, null, 2));
		}

		return value;
	};
	weoptions.prototype.get = function(details) {
		if (!details) {
			return Object.assign({}, this.options);
		}
		return delve(this.options, details);
	};
	weoptions.prototype._setStrict = function(bool) {
		this.S = bool;
	};

	function setOptions(opts) {
		let opt = Object.assign({}, opts);
		let w = new weoptions(opt);
		GLOBAL[id] = w;
		return w;
	}
	return setOptions;
};
