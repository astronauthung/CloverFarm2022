const path = require('path');

class chatbotController {
    index(req, res, next) {
        res.render('chatbot', {
            layout: "chatBotClover",
            title: "Chatbot | CLOVER ®",
        });
    }
}

module.exports = new chatbotController();