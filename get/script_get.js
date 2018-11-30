// XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();

// 접속 대상 지정
xhr.open('GET', 'https://www.gitflow.org/api/notices');

/**
 * onreadystatechange 이벤트는 서버와의 통신이 끝났을 때 호출되는 이벤트
 * readyState 는 통신의 현재 상태를 알려준다.
 * 4 는 통신이 완료되었음을 의미
 * status 는 HTTP 통신의 결과를 의미 (200: 성공)
 * responseText 프로퍼티는 서버에서 전송한 데이터를 담고 있다.
 */
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = xhr.responseText;
        var jsonParseData = JSON.parse(data);

        console.log(data);
        console.log(jsonParseData);
        console.log(jsonParseData.data[0].title);
    }
};
xhr.send();