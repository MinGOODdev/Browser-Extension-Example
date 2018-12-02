function sendUserInfo(login, password) {
    console.log(login);
    console.log(password);

    var jsonModel = '{ "login" : "' + login + '", "password" : "' + password + '"}';
    // var jsonModel = '{ "login" : "mingooddev", "password" : "비밀번호"}';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://www.gitflow.org/api/login/');
    xhr.onreadystatechange = function () {
        console.log(xhr.responseText);
    };

    // 서버로 전송할 데이터 타입의 형식 지정
    xhr.setRequestHeader("Content-Type", "application/json");
    // send 메소드의 파라미터를 활용하여 전송할 데이터를 전달
    xhr.send(jsonModel);

    // window.open('second.html'); // 새창 띄우기
}

var action = document.getElementById('submit');
action.addEventListener('click', function () {
    var login = document.querySelector('#login').value;
    var password = document.querySelector('#password').value;

    sendUserInfo(login, password);
});