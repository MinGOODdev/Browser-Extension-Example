function sendUserInfo(login, password) {
    console.log(login);
    console.log(password);

    // var jsonModel = '{ "login" : "mingooddev", "password" : "비밀번호"}';
    var jsonModel = '{ "login" : "' + login + '", "password" : "' + password + '"}';

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://www.gitflow.org/api/login');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = xhr.responseText;
            var jsonResponseText = JSON.parse(data);

            console.log(jsonResponseText);
            console.log(jsonResponseText.msg);

            if (jsonResponseText.msg == 'Login Success') {
                // next 라는 id 를 갖는 div 태그를 찾는다.
                var div = document.getElementById('next');
                // a tag 를 생성한다.
                var link = document.createElement('a');
                // 생성한 a tag 의 href 속성 추가
                link.setAttribute('href', 'second.html');
                // textContent 를 추가
                link.textContent = 'next';
                // div tag 의 자식으로 a tag 를 삽입
                div.appendChild(link);
            }
        }
    };

    // 서버로 전송할 데이터 타입의 형식 지정
    xhr.setRequestHeader("Content-Type", "application/json");
    // send 메소드의 파라미터를 활용하여 전송할 데이터를 전달
    xhr.send(jsonModel);


    // var headers = xhr.getAllResponseHeaders();
    // console.log(headers);

    // chrome.browserAction.getPopup(function () {
    //     popup: "second.html"
    // });
}

var action = document.getElementById('submit');
action.addEventListener('click', function () {
    var login = document.querySelector('#login').value;
    var password = document.querySelector('#password').value;

    sendUserInfo(login, password);
});