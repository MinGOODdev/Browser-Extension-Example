// 이 문서에서 body tag에 해당 하는 것을 가져와라
document.querySelector('body');

// 이 문서에서 body 태그 안에 있는 모든 Text 를 가져온다. 그 결과를 변수 bodyText 에 담는다.
var bodyText = document.querySelector('body').innerText;

// bodyText 의 모든 단어를 추출하고, 그 단어들의 개수를 센다.
// 그 결과를 bodyNum 이라는 변수에 담는다.
var bodyNum = bodyText.split(' ').length;

// bodyText 에서 자신이 알고 있는 단어(the, is)가 몇 번 등장하는지를 알아본다.
// 'gi' g: 전체 구역 모두 + i: 대소문자 구분 X
// 그 결과를 myNum 이라는 변수에 담는다.
var myNum = bodyText.match(new RegExp('\\b(the|is)\\b', 'gi')).length;
