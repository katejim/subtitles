// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var globtext = "";
matches = document.getElementsByTagName('video');
if (matches.length>0) {
  var payload = {
    count: matches.length    // Pass the number of matches back.
  };
  chrome.extension.sendRequest(payload, function(response) {});

    //injected code
    $.get(chrome.extension.getURL('/js/injected.js'),
    function(data) {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = data;
        document.getElementsByTagName("head")[0].appendChild(script);
        //показывает время в секундах при паузе
       // video =  document.querySelector('video')
        //обработчик вешается на полную страницу
      /* var a = {"begin":12, "end":14, "text":"hello"}
        alert(a["begin"])
        alert(a["end"])
        alert(a["text"])
       captions = []
        captions.push(a)
        alert(captions[0]["begin"])*/
        window.addEventListener('load', function() {
           matches[0].addEventListener('timeupdate',setupMessageButton, true)
        }, true);
    }
    );

}
function createMessage(title) {
  var container = document.createElement('div')
  container.innerHTML = '<div > \
    <p style= "font-size:25px; text-align: center;" >'+title+' </p> \
  </div>'
  return container.firstChild
}

function positionMessage(elem) {
  elem.style.position = 'absolute'
  elem.style.top =  20 +  'px'
  elem.style.left = 20 +'px'
  elem.style.backgroundColor = 'red'
  rect = matches[0].getBoundingClientRect()
  width = (rect.right - rect.left) - 10 + 'px'
  elem.style.width = width
}

function setupMessageButton() {
   title = "heyrettttrr  dsdf"

   var messageElem = createMessage(title)
   positionMessage(messageElem)
   //matches = document.querySelector('video')

   parent = matches[0].parentNode;
   //текст поверх добавляем к родителю видеоы
   parent.appendChild(messageElem)

}




/*function parseSubs(inSubs){
    alert(inSubs)
    globtext = inSubs

}*/
chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  if(message.text == "getStuff"){
    sendResponse({type:"test"});
      alert(message.text)}
});


