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
/*object = document.getElementsByTagName('object');
objectId = object[0].id
alert("find")
if(object.length > 0){
   addButton()
    addMyFunctionToPage()

}


function getMovie(idMovie) {
    var M$ =  document[idMovie]
    return (M$ ? document : window)[idMovie]
}
function getUppoadCurTime(playerID){
    return
}*/

matches = document.getElementsByTagName('video');
if ((matches.length>0)) {
   addMyFunctionToPage()
}


function addMyFunctionToPage(){
    $.get(chrome.extension.getURL('/js/injected.js'),
        function(data) {
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.innerHTML = data;
            document.getElementsByTagName("head")[0].appendChild(script);
            document.getElementsByTagName("body")[0].setAttribute("onLoad", "addButton()");

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
           // alert("yes")
        }
    );
}
//создать красивую тулбр
//кнопка на ее закрытие
// прозрачность, красиво слово Sybtitles on top - png картинка
// иконку.
//иконку слева, которая ищет видео принудительно и выовди тулбар, если найдена
//uppoad?
