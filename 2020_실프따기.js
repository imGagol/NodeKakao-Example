/*2020년 8월 이전에 생성된 오픈채팅방에서만 사용가능합니다*/

const bson = require("bson")

if (chat.Text.startsWith("!실프 ")) { //오픈아이디 넣기
   const num = bson.Long.fromString(chat.Text.slice(4)).toString(2).length - 29;
  let num2 = bson.Long.fromInt(Number("0b" + bson.Long.fromString(chat.Text.slice(4)).toString(2).slice(num))).toString()     
	  client.chatManager.sendRaw(chat.channel, 17, "카카오톡 프로필", {"userId" : num2,"nickname" : "","fullProfileImageUrl" : "","profileImageUrl" : "","statusMessage" : ""})
chat.replyText("[ PROFILE ID ] "+num2+"")  //실프아이디
}
