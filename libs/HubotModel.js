const Promise = require("promise");

class HubotModel {
    constructor(robot, message) {
        this.robot = robot;
        this.message = message;
    }

    get() {
        return new Promise(function(resolve, reject) {
            resolve({example: "object"});
        });
    }
}

module.exports = HubotModel;
