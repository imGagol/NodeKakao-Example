async function reaction(chat, logId, type) {  //type은 6까지
    let reactionRes = await axios.post(`https://talk-pilsner.kakao.com/messaging/chats/${chat.channel.id}/bubble/reactions`, {"logId": logId, "type": type}, {
        headers: { 
            'Content-Type': 'application/json; charset=UTF-8',
            'C': 'fa9c23d17-21fb8-4d3e-915ba-e45ffe1427b24',
            'A': 'android/9.4.2/ko',
            'Authorization': session_info
        }
    }).catch((err) => console.log(err));

    console.log(reactionRes.data);
    await chat.replyText(JSON.stringify(reactionRes.data)); 
}


/*오픈채팅에서 메시지 반응하기*/
async function openReaction(chat, linkId, logId, type) {
    let openReactionRes = await axios.post(`https://talk-pilsner.kakao.com/messaging/chats/${chat.channel.id}/bubble/reactions`, {"logId": logId, "linkId": linkId, "type": type}, {
        headers: { 
            'Content-Type': 'application/json; charset=UTF-8',
            'C': 'fa9c23d17-21fb8-4d3e-915ba-e45ffe1427b24',
            'A': 'android/9.4.2/ko',
            'Authorization': session_info
        }
    }).catch();
await chat.replyText(JSON.stringify(openReactionRes.data));
}



if(Text.startsWith("!공감 ")) {
var type = parseInt(Text.split(" ")[1]);
  if(type>6) return;
  if (chat.channel.isOpenChat()) return;
reaction(chat, String(chat.logId), type);   //오픈채팅일 경우 함수명 바꾸고 파라미터에 linkId 넣어쓰기
}
