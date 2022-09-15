/*부방이나 방장권한 없이도 방장봇 비활성화 시키기*/

async function kickBot(channelId) {  //channelId에 방장봇 비활시킬 방 아이디
                const linkId = 123456789; //봇이 방장인 방을 하나 만들어 주시고 linkId를 뽑아와주세요
                let res = await axios.get(
                  `https://open.kakao.com/c/bot/links/${linkId}/chats/${channelId}/delBot`,
                  {
                    headers: {
                      A: "android/9.4.2/ko",
                      Authorization: session_info,
                    },
                  }
                );
                console.log(res.data);
				  chat.replyText(res.data);
                return res.data;
	}
