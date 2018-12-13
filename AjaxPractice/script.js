/*
$(document).ready(()=>{
  getData('popular.html');
})
*/

function getData(pageName){
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'http://127.0.0.1/Practice/AjaxPractice/' + pageName);
  xhr.send();
  xhr.onload= function(){
    //alert('SDF');
    let content = document.getElementById('content');
    content.innerHTML = this.responseText;
  }

}
