/*테스트 안해봐서 오타나 오류 있을수도 그냥 알아서 고쳐써라*/

const { MessageBuilder, Webhook } = require('discord-webhook-node');
const hook = new Webhook("웹훅링");
hook.setUsername('KATALK_INFO');  //디코에서 사용될 봇 닉네임
let roomName = chat.channel.getDisplayName();
let logMessage = true

if (chat.text == "!메시지로깅") {
       if (logMessage) {
               logMessage = false;
               chat.replyText("[ ! ] 메세지 로깅을 중단했습니다.");
        } else {
               logMessage = true;
               chat.replyText("[ ! ] 메세지 로깅을 시작합니다.");
                };      
    };
    
    if (logMessage) {
    const embed = new MessageBuilder()
    .setTitle(userInfo.Nickname)
    .addField(roomName, chat.Text)
    .setAuthor('Get_User_Info', 'https://image.kmib.co.kr/online_image/2020/0101/611414110014085644_1.jpg', 'https://www.google.com')
    .setFooter('KAKAO DISCORD WEBHOOK', 'https://image.kmib.co.kr/online_image/2020/0101/611414110014085644_1.jpg')
    .setTimestamp();
 
    hook.send(embed);
    };
    
