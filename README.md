# NodeKakao-Example

#### 이 봇은 카카오톡 공식봇이 아닌 비공식 API인 @storycraft님의 node-kakao를 기반으로 하고 있습니다!<br>
#### This Source Code is based on node-kakao by @storycraft, an unofficial API, not the official Kakao Talk bot!<br><br>
- 따라서 해당 프로그램은 언제든 카카오측으로부터 제제를 당할수 있으며,<br> 
- 이 코드를 사용함으로써 얻는 불이익은 개발자가 책임지지 않습니다!<br><br>
*This source is made by gagol*

# session_info
let session_info;
loginRes 선언후 session_info = `${loginRes.result.accessToken}-${loginRes.result.deviceUUID}`;
