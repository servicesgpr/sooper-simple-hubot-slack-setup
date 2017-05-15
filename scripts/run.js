// Commands:
//   hubot hello - replies with "world"!

const Promise = require("promise");
const HubotCommand = require("HubotCommand.js");
const Run = require("Run.js");
const logger = require("winston");

module.exports = function(robot) {
    robot.respond(/run\s+(.+)$/i, { id: "hello" }, function(message) {
    	var command = new RunCommand(robot, message);
    	command.respond();
    });
};

class RunCommand extends HubotCommand {
	model() {
		var self = this;
		return new Promise(function(resolve, reject) {
			var run = new Run(self.robot, self.message);
			run.get()
			.then(function(data) {
				resolve(data);
			});
		});
	}
	
	view() {
		return "run.txt";
	}
}
