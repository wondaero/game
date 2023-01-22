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
  }
}

const qs = target => document.querySelector(target);
const qsa = target => document.querySelectorAll(target);