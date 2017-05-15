const Promise = require("promise");
const HubotModel = require("HubotModel.js");
const logger = require("winston");

class Run extends HubotModel {
    get() {
    	var self = this;
        return new Promise(function(resolve, reject) {
        	var type = self._type();
            resolve({
            	type,
            	arr: [1,2,3,4,5],
            	objin: {
            		another: "object"
            	}
            });
        });
    }
    
    _type() {
    	var self = this;
    	var type = self.message.match[1];
    	logger.log("info", `i am running like: ${type}`);
    	return type;
    }
}

module.exports = Run;
