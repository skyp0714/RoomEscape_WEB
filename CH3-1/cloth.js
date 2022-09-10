
function search_onclick_submit(){
  var text = document.getElementById('SearchWindow').value;
  if(text.toLowerCase()==='wiz1'){
    location.href = 'https://cksdml1014.github.io/web1/%EB%B0%A9%ED%83%88%EC%B6%9C/chapter3-2-0.html';
  }
  else{
    alert('검색한 내용을 알 수 없습니다.');
  }
}

function init(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('scoreboard').style.display = 'block';
  document.getElementById('eval').style.display = 'block';
  document.getElementById('clothContainer').style.display = 'flex';
}

var ti = -1;
var pi = -1;
var score;
var t = [29523567, 28484072, 34524050, 33523552, 30520773, 33513780];
var p = [54224999, 43314098, 50244999, 51204098, 53214999, 56234799];
var img = ['image/1.PNG',
           'image/2.png',
           'image/3.jpg'
         ];

var imgObj = new Image();
var imageWin;
function createImgWin(imgObj) {
  imageWin = window.open("", "imageWin","width=" + imgObj.width + ",height=" + imgObj.height);
  imageWin.document.write("<html><body style='margin:0'>");
  imageWin.document.write("<img src='" + "'>");
  imageWin.document.querySelector("img").src = imgObj;
  imageWin.document.write("</body><html>");
  imageWin.document.title = imgObj.src;
}


document.onclick = onclickEventHandler;
function onclickEventHandler(e){
  if(e.target.id === 'SearchWindow' || e.target.className === 'record'){
    document.querySelector(".RecordWindow").style.display = "flex";
  }else{
    document.querySelector(".RecordWindow").style.display = "none";
  }

  idx = Number(e.target.id.charAt(4));
  if(e.target.id.charAt(3) === 'T'){
    ti = idx - 1;
  }else if(e.target.id.charAt(3) === 'P'){
    pi = idx - 1;
  }else if(e.target.id === 'eval'){
    if(ti<0 || pi<0){
      alert('벗고 돌아다니면 더 눈에 띄일거야...');
    }else{
      document.getElementById('scoreboard').innerText = 'SCORE : ' + String(t[ti]+p[pi]);
    }
  }else if(e.target.className === 'record'){
    if(document.querySelector(".RecordWindow").style.display === 'flex'){
       createImgWin(img[e.target.id.charAt(6)-1]);
    }
  }
}
