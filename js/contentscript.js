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


matches = document.getElementsByTagName('video');
if (matches.length>0) {
    addButton()
    //injected code
    addMyFunctionToPage()
}

function addMyFunctionToPage(){
    $.get(chrome.extension.getURL('/js/injected.js'),
        function(data) {
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.innerHTML = data;
            document.getElementsByTagName("head")[0].appendChild(script);
            matches[0].setAttribute("onplaying", "onPlay();");
            //изменение размеров видео
            document.getElementsByTagName("body")[0].setAttribute("onresize", "onResize();");
            //событие при паузе
            matches[0].setAttribute("onpause", "onPauseStopEndError();");
            //событие при окончание файла
            matches[0].setAttribute("onended", "onPauseStopEndError();");
            //событие при остановке
            matches[0].setAttribute("onended", "onPauseStopEndError();");
            //событие при ошибки загрузки
            matches[0].setAttribute("onemptied", "onPauseStopEndError();");
        }
    );
}

function createInputButton(){
  var input = document.createElement('input')
  input.innerHTML = '<input id = "uniq" class="my-message-ok" type="file" onchange="handleFiles(this.files)" /> '
  return input.firstChild
}

function addButton(){
    myb = createInputButton()
    positionMessage(myb)
    document.body.appendChild(myb)
}
//стиль для ручного инфобара
function positionMessage(elem) {
  elem.style.position = 'absolute'
  elem.style.top =  20 +  'px'
  elem.style.left = 20 +'px'
  elem.style.backgroundColor = 'red'
  rect = matches[0].getBoundingClientRect()
  width = (rect.right - rect.left) - 40 + 'px'
  elem.style.width = width
}