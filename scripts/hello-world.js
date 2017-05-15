// Commands:
//   hubot hello - replies with "world"!

const logger = require("winston");

module.exports = function(robot) {
    robot.respond(/hello$/i, { id: "hello" }, function(message) {
    	message.send("world!");
    	logger.log("info", "i like to log stuff!", { yourObject: "some random data" });
    });
};
