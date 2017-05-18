// Commands:
//   hubot run <input> - replies with something about running and your input

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
			var run = new Run(self._type());
			run.get()
			.then(function(data) {
				resolve(data);
			});
		});
	}

	view() {
		return "run.txt";
	}

    _type() {
    	var self = this;
    	var type = self.message.match[1];
    	logger.log("info", `i am running like: ${type}`);
    	return type;
    }
}
