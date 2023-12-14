const path = require('path');

class chatbotController {
    index(req, res, next) {
        res.render('layouts/chatbot/chatbot', {
            style: "chatbot",
            title: "Chatbot | CLOVER ®",
        });
    }
}

module.exports = new chatbotController();