'use strict';
module.exports = (id, strict = false) => {
	if (typeof id !== 'string' && typeof id !== 'object') {
		throw new TypeError(`Expected a string, got ${typeof id}`);
	}

	const S = strict;

	function weoptions(options) {
		this.id = id;
		this.options = options;
		this.S = strict;
		if (this.S) {
			this.v = 1;
		}
	}

	weoptions.prototype.set = function() {
		return true;
	};
	weoptions.prototype.get = function(details) {
		if (!details) {
			return Object.assign({}, this.options);
		}
	};

	function setOptions(opts) {
		return new weoptions(opts);
	}
	return setOptions;
};
