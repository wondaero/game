const commonJs = {
  userInfo: function(){
    let kakaoStr = localStorage.kakaoLogin;
    let userInfo;
    if(kakaoStr) userInfo = JSON.parse(kakaoStr);
  
    return userInfo;
  },
  setAccessKey: function(){
    sessionStorage.accessKey = 'n.rmal';
    return true;
  },
  isAccess: () => localStorage.kakaoLogin && JSON.parse(localStorage.kakaoLogin).id && sessionStorage.accessKey == 'n.rmal',
  stopDevToll: function(){
    function detectDevTool(allow) {
        if(isNaN(+allow)) allow = 100;
        var start = +new Date(); // Validation of built-in Object tamper prevention.
        debugger;
        var end = +new Date(); // Validates too.
        if(isNaN(start) || isNaN(end) || end - start > allow) {
            window.location.reload();
        }
    }
    if(window.attachEvent) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            detectDevTool();
        window.attachEvent('onresize', detectDevTool);
        window.attachEvent('onmousemove', detectDevTool);
        window.attachEvent('onfocus', detectDevTool);
        window.attachEvent('onblur', detectDevTool);
        } else {
            setTimeout(argument.callee, 0);
        }
    } else {
        window.addEventListener('load', detectDevTool);
        window.addEventListener('resize', detectDevTool);
        window.addEventListener('mousemove', detectDevTool);
        window.addEventListener('focus', detectDevTool);
        window.addEventListener('blur', detectDevTool);
    }
  }
}

const qs = target => document.querySelector(target);
const qsa = target => document.querySelectorAll(target);

const getRandomNum = (mn, mx) => Math.floor(Math.random() * (mx - mn + 1)) + mn;

const ajaxPost = (opt) => {
  //XMLHttpRequest 객체 생성
  const xhr = new XMLHttpRequest();

  //요청을 보낼 방식, 주소, 비동기여부 설정
  xhr.open('POST', opt.url, true);
  
  //HTTP 요청 헤더 설정
  xhr.setRequestHeader('Content-type', 'application/json');
  
  //요청 전송
  xhr.send(JSON.stringify(opt.data));

  //통신후 작업
  xhr.onload = function () {
      if (xhr.status == 200) {  //통신 성공
          if(typeof opt.success == 'function') opt.success(xhr.response);
      } else {  //통신 실패
          if(typeof opt.error == 'function') opt.error();
      }
  }
}