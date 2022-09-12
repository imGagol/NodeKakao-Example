async function sendShare(postId){ //공지 postid
	const headers = {
    Authorization: session_info,
    A: "android/9.5.7/ko"
  };
let shareRes = await request.post("https://talkmoim-api.kakao.com/posts/"+postId+"/share",{ headers: headers })
}


/*딜레이 없이 돌려도 정지 안먹음*/
/*1초에 빠르면 200개까진 도배되는듯*/
       if (chat.text.startsWith("!고속도배 ")) {  //!고속도배 테스트/100
            var t1 = chat.text.replace("!고속도배 ", "").split("/")[0]
            var t2 = chat.text.replace("!고속도배 ", "").split("/")[1]
            if(chat.text.replace("!고속도배 ", "").includes("/")) {
                var postid;
                setNotice(t1).then(r => { //커스텀 함수 setNotice 사용
                    postid = r.id
                    chat.replyText(postid)
                    for(a = 1; a <= t2*1; a++){
                        sendShare(r.id)
                      }
                })
	   }}
