const fs = require("fs");
module.exports.config = {
name: "iuxuyen",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "Sad",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("iu xuyến")==0 || (event.body.indexOf("Iu Xuyến")==0)) {
		var msg = {
				body: "Xuyến tuyệt vời",
				attachment: fs.createReadStream(__dirname + `/noprefix/iuxuyen.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }