document.onclick = onclickEventHandler;
function onclickEventHandler(e){
  switch(e.target.id){
    case 'toir': change_scene(0); break;
    case 'tocs': change_scene(1); break;
    case 'toans': change_scene(2); break;
    case 'house': clear_text(0); break;
    case 'name': clear_text(1); break;
  }
}
function clear_text(num){
  if(num){
    document.getElementById('name').value = '';
    document.getElementById('name').style.color = 'black';
  }else{
    document.getElementById('house').value = '';
    document.getElementById('house').style.color = 'black';
  }
}
function change_scene(num){
  var cs = document.getElementById('crime_scene');
  var ir = document.getElementById('incident_report');
  var ans = document.getElementById('transition');
  if(num === 0){
    cs.style.display = 'none';
    ir.style.display = 'block';
    document.getElementById('name').value = '이름';
    document.getElementById('name').style.color = 'gray';
    document.getElementById('house').value = '호수';
    document.getElementById('house').style.color = 'gray';
  }else if(num === 1){
    ir.style.display = 'none';
    cs.style.display = 'block';
  }else if(num === 2){
    if(document.getElementById('house').value === '1106' && document.getElementById('name').value === '김선생'){
      alert('추리에 성공하셨습니다!');
      ir.style.display = 'none';
      ans.style.display = 'block';
    }else{
      document.getElementById('name').value = '이름';
      document.getElementById('name').style.color = 'gray';
      document.getElementById('house').value = '호수';
      document.getElementById('house').style.color = 'gray';
    }
  }
}
