'use strict';
const diff = require('deep-diff');
const delve = require('dlv');
const dset = require('dset');

module.exports = (id, strict = false) => {
	if (typeof id !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof id}`);
	}

	function weoptions(options) {
		this.id = id;
		this.options = options;
		this.S = strict;
		if (this.S) {
			this.v = 1;
		}
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
			console.log();
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

	function setOptions(opts) {
		let opt = Object.assign({}, opts);
		return new weoptions(opt);
	}
	return setOptions;
};
