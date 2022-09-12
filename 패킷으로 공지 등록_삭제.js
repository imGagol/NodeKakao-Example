async function setNotice(text) {
  const body = `content=${encodeURI(
    `[{"text":"${text}","type":"text"}]`
  )}&object_type=TEXT&notice=true`;
  const headers = {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    A: "android/9.4.2/ko",
    Authorization: session_info,
  };
  let res = await axios.post(
    `https://talkmoim-api.kakao.com/chats/${chat.channel.Id}/posts`,   
   body,
    { headers: headers }
  );
  console.log(res)
   chat.replyText("상태코드"+"\u200b".repeat(500)\n"+JSON.stringify(res.data));
  return res.data;
}


async function deleteNotice(postId) { //postId는 공지공유나 등록 메시지 로그따면 나옴
  let res = await axios.delete(
    `https://talkmoim-api.kakao.com/posts/`+postId,
   {
      headers: {
        A: "android/9.8.0/ko",
        Authorization: session_info,
      },
    }
  );
  console.log(res)
  return res.data;
}
