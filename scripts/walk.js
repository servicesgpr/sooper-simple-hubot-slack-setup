// Commands:
//   hubot hello - replies with "world"!

const HubotCommand = require("HubotCommand.js");
const logger = require("winston");

module.exports = function(robot) {
    robot.respond(/walk$/i, { id: "hello" }, function(message) {
    	var command = new WalkCommand(robot, message);
    	command.respond();
    });
};

class WalkCommand extends HubotCommand {
	model() {
		var self = this;
		return new Promise(function(resolve, reject) {
			resolve({});
		})
		.catch(function(error) {
			resolve({error: true});
		});
	}
	
	view() {
		return "walk.txt";
	}
}
