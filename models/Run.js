const Promise = require("promise");
const logger = require("winston");

class Run {
    constructor(type) {
        this.type = type;
    }
    
    get() {
    	var self = this;
        return new Promise(function(resolve, reject) {
        	var type = self.type;
            resolve({
            	type,
            	arr: [1,2,3,4,5],
            	objin: {
            		another: "object"
            	}
            });
        });
    }
}

module.exports = Run;
