const path = require('path');

class chatbotController {
    index(req, res, next) {
        res.render('chatbot', {
            chatbotScript: `
            <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
            <script>
                window.botpressWebChat.init({
                    "botId": "509d3d24-a977-4252-ae40-5c8d08c4ff19",
                    "clientId": "509d3d24-a977-4252-ae40-5c8d08c4ff19",
                    "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
                    "messagingUrl": "https://messaging.botpress.cloud",
                    "themeName": "prism",
                    "botName": "Clover",
                    "containerWidth": "100%25",
                    "layoutWidth": "100%25",

                    "theme": "prism",
                    "themeColor": "#2563eb"
                });
             
                window.botpressWebChat.onEvent(
                    function () {
                        window.botpressWebChat.sendEvent({ type: "show" });
                    },
                    ["LIFECYCLE.LOADED"]
                );
            </script>`,
            layout: "chatBotClover",
            style: "chatbot",
            title: "Chatbot | CLOVER ®",
        });
    }
}

module.exports = new chatbotController();