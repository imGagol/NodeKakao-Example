async function changeNotice(postId, text) {
	  const body = `content=${encodeURI(
    `[{"text":"${text}","type":"text"}]`
  )}&object_type=TEXT&notice=true`
  let changeNoticeRes = await axios.put(
      `https://talkmoim-api.kakao.com/posts/${postId}`,body,
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          A: "android/9.4.2/ko",
          Authorization: session_info,
        },
      }
    )
}


if(chat.Text.startsWith("!공지수정 ")){
var message = chat.text.replace("!공지수정 ", "");
var postId;
setNotice("수정당할 글입니다").then(r => {  //커스텀함수 setNotice사용
  postid = r.id
  chat.replyText(postId)
  changeNotice(postId,message)
})
