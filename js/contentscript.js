// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //скрипт для обработки загрузки текста с компьютера придумать что-то красивое для его ввода
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
        //createInputButton
        //кнопка для загрузки


var globtext = "";
var title = "eterte"
matches = document.getElementsByTagName('video');
if (matches.length>0) {
  var payload = {
    count: matches.length    // Pass the number of matches back.
  };
    //alert(matches[0].id)

  //chrome.extension.sendRequest(payload, function(response) {});

    addButton()
    //injected code
    $.get(chrome.extension.getURL('/js/injected.js'),
    function(data) {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = data;
        document.getElementsByTagName("head")[0].appendChild(script);

        document.getElementsByTagName("video")[0].setAttribute("onplay", "setupMessageButton();");
        //title = textArray[3]

    }
    );

}
 /*window.addEventListener('load', function() {
            //output = document.createElement('div'); // JS is enabled, so insert a div to put the captions into
		    //output.id = 'caption'; // it has an id of caption
		    //video = document.querySelector('video'); // and it's after the first video element
		    //video.parentNode.insertBefore(output, video.nextSibling);
		    //getCaptions();
            output = document.createElement('div'); // JS is enabled, so insert a div to put the captions into
		    output.id = 'caption'; // it has an id of caption
     output.innerHTML = "hgfkhgfjg"

		    video = document.querySelector('video'); // and it's after the first video element
		   // video.parentNode.appendChild(output);
            video.addEventListener('timeupdate',setupMessageButton, true)
}, false);
*/
function createInputButton(){
  var input = document.createElement('input')
  input.innerHTML = '<input id = "uniq" class="my-message-ok" type="file" onchange="handleFiles(this.files)" /> '
  //input.onchange =
  input.setAttribute("onchange","handleFiles(this.files)")
  return input.firstChild
}

function addButton(){
    myb = createInputButton()
    positionMessage(myb)
    //myb.setAttribute("onchange", "handleFiles(this.files);");
    document.body.appendChild(myb)
}



function positionMessage(elem) {
  elem.style.position = 'absolute'
  elem.style.top =  20 +  'px'

  elem.style.left = 20 +'px'
  elem.style.backgroundColor = 'red'
  rect = matches[0].getBoundingClientRect()
  width = (rect.right - rect.left) - 40 + 'px'
  elem.style.width = width

}