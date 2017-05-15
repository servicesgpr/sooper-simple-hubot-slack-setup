const Promise = require("promise");
const handlebars = require("handlebars");
const fs = require("fs");
const logger = require("winston");

class HubotCommand {
    constructor(robot, message) {
        this.robot = robot;
        this.message = message;
    }

    model() {
        return new Promise(function(resolve, reject) {
            resolve({example: "object"});
        });
    }

    _template(template) {
        return new Promise(function(resolve, reject) {
            fs.readFile(`./views/${template}`, "utf-8", function(error, source) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(source);
                }
            });
        });
    }

    respond() {
        var self = this;
        self.model()
        .then(function(model) {
            self._template(self.view())
            .then(function(source) {
                var template = handlebars.compile(source);
                var output = template(model);
                self.message.send(output);
            })
            .catch(function(error) {
                logger.log("error", `template(${template})`, error);
            });
        })
        .catch(function(error) {
            logger.log("error", "model()", error);
        });
    }

    view() {
        return "default.txt";
    }
}

module.exports = HubotCommand;
