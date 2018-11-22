/**
 * 1단계
 * - 컨텐트 페이지의 모든 텍스트를 가져온다.
 * - 그 결과를 변수 bodyText 에 담는다.
 * 
 * 하지만 아래 코드는 popup.html 을 읽는 것이다.
 * var bodyText = document.querySelector('body').innerText;
 * alert(bodyText);
 */

/**
 * 2단계
 * 컨텐트 페이지를 대상으로 코드를 실행해보자.
 * - code: '' 안에 js 코드를 작성한다.
 */
// chrome.tabs.executeScript({
//   code: 'var bodyText = document.querySelector("body").innerText;alert(bodyText);'
// });


/**
 * 3단계
 * - code: '' 의 안은 너무 비좁다.
 * - function (result) 활용
 */
// chrome.tabs.executeScript({
//   code: 'document.querySelector("body").innerText;'
// }, function (result) {
//   /**
//    * 위 코드가 실행된 후 이 함수를 호출
//    * 그때, result 에 그 결과를 담아라.
//    */
//   // alert(result[0]);


//   // 이 문서에서 body 태그 안에 있는 모든 Text 를 가져온다. 그 결과를 변수 bodyText 에 담는다.
//   var bodyText = result[0];

//   // bodyText 의 모든 단어를 추출하고, 그 단어들의 개수를 센다.
//   // 그 결과를 bodyNum 이라는 변수에 담는다.
//   var bodyNum = bodyText.split(' ').length;

//   // bodyText 에서 자신이 알고 있는 단어(the, is)가 몇 번 등장하는지를 알아본다.
//   // 'gi' g: 전체 구역 모두 + i: 대소문자 구분 X
//   // 그 결과를 myNum 이라는 변수에 담는다.
//   var myNum = bodyText.match(new RegExp('\\b(the|is)\\b', 'gi')).length;

//   var per = myNum / bodyNum * 100;
//   per = per.toFixed(2);
//   // id 값이 result 인 태그에 결과를 추가한다.
//   document.querySelector('#result').innerText = myNum + '/' + bodyNum + '(' + per + '%)';
// });


/**
 * 4단계
 * - 컨텐트 페이지의 #userInput 입력한 값이 변경되었을 '때'
 * - 컨텐트 페이지에 몇개의 단어가 등장하는지 계산해보자.
 */
document.querySelector('#userInput').addEventListener('change', function () {
  var input = document.querySelector('#userInput').value;

  chrome.tabs.executeScript({
    code: 'document.querySelector("body").innerText;'
  }, function (result) {
    var bodyText = result[0];
    var bodyNum = bodyText.split(' ').length;
    var myNum = bodyText.match(new RegExp('\\b(' + input + ')\\b', 'gi')).length;

    var per = myNum / bodyNum * 100;
    per = per.toFixed(2);

    document.querySelector('#result').innerText = myNum + '/' + bodyNum + '(' + per + '%)';
  });
})