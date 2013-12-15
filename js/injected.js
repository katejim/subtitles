/**
 * Created by KateKate on 24.11.13.
 */
video = document.getElementsByTagName('video');
var beginArray = []
var endArray = []
var textArray = []
contents = ""
var output = ""
var intervalID

//загрузка файла разбивка на массивы
function handleFiles(files) {
       var f = files[0]
       if (f) {
          var r = new FileReader();
          r.onload = function(e) {
              contents = e.target.result;
              myText()

          }
          r.readAsText(f);
       } else {
          alert("Failed to load your subs");
       }
}

//парсинг субтитров
function myText(){
    var myReBegin = /^\d{2}:\d{2}:\d{2},\d{3}/mg;
    var myReEnd = /\d{2}:\d{2}:\d{2},\d{3}$/mg
    while((tek = myReBegin.exec(contents)) != null){
              var k = tek.toString().split(/:|,/)
              var real = parseInt(k[2]) + parseInt(k[1])*60 + parseInt(k[0])*3600
              beginArray.push(real + "." + k[3])
    }

    while((tek = myReEnd.exec(contents)) != null){
              var k = tek.toString().split(/:|,/)
              var real = parseInt(k[2]) + parseInt(k[1])*60 + parseInt(k[0])*3600
              endArray.push(real + "." + k[3])
    }
       //нулевой текст - пустой
    textArray = contents.split(/\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/)
    for(i = 0; i< textArray.length; i += 1){
        textArray[i] = textArray[i].replace(/[\r\n]/g, ' ')
        textArray[i] = textArray[i].substr(0,textArray[i].length - 5)
    }
    return beginArray
}


//настройка расположения блока субтитров
function positionMessage(elem) {
  elem.style.position = 'absolute'
  elem.style.top =  20 +  'px'
  elem.style.left = 20 +'px'
  rect = video[0].getBoundingClientRect()
  width = (rect.right - rect.left)  - 40 + 'px'
  elem.style.width = width
}

 var  forwardOffset = 0
//событие при воспроизведение
function onPlay() {
   if(output == ""){
       output = document.createElement('div'); // JS is enabled, so insert a div to put the captions into
       positionMessage(output)
       parent = video[0].parentNode
       parent.appendChild(output)
   }
   intervalID = window.setInterval( function() {

       var now = video[0].currentTime
       for(i = 0; i < beginArray.length; i++){
           if((parseFloat(now) + parseFloat(forwardOffset)) >= parseFloat(beginArray[i]) && (parseFloat(now) + parseFloat(forwardOffset)) <= parseFloat(endArray[i])){
                 output.innerHTML =  '<div > \
                    <p style= "font-size:25px; text-align: center; text-shadow: black 1px 1px 3px;" >'+textArray[i + 1] + '</p> \
                  </div>'
                 break
           }
           else output.innerHTML = ""
       }
   }, 1000);
}

//событие при изменение размера экрана
function onResize(){
    output.innerHTML = ""
    positionMessage(output)
}
//событие при паузе, остновке, ошибке, конце файла
function onPauseStopEndError(){
    clearInterval(intervalID)
}

function increaseTemp(){
   forwardOffset  = forwardOffset + 0.1
}

function decreaseTemp(){
   forwardOffset  = forwardOffset - 0.1
}


var toolbar = ""
function createToolBar(){
    toolbar = document.createElement('table')
    toolbar.id = "uniqToolBar"
    toolbar.innerHTML =  '<table  border="6" align = "center"> \
                          <tr>\
                              <td width = "25%" align = "right">\
                                <input id = "mytool" class="my-message-ok" type="file" onchange="handleFiles(this.files)"/> \
                              </td>\
                              <td width  = "25%" align = "right"> \
                                <input type = "button" value = "вперед"onclick="increaseTemp()" />\
                              </td>\
                              <td width  = "25%" align = "left">\
                                <input type = "button" value = "назад" onclick="decreaseTemp()"/>  \
                              </td>\
                              <td width  = "25%" align = "center">\
                                   <input type = "button" value = "закрыть" onclick="closeToolBar()"/> \
                              </td>\
                          </tr>\
                        </table>'
}

function positionMessage2(elem) {
  elem.style.position = 'fixed'
  elem.style.top =  0 + 'px'
  elem.style.left = 0 +'px'
  elem.style.backgroundColor = 'red'
  elem.style.opacity = '0.85'
  elem.style.width = 100 + '%'
  elem.style.height = 7 + '%'
}

function addButton(){
    createToolBar()
    positionMessage2(toolbar)
    document.body.appendChild(toolbar)
}

function closeToolBar(){
    toolbar.style.display = "none"
}

function openToolBar(){
    alert("ata")
}

//to uppoad
/*object = document.getElementsByTagName('object');
objectId = object[0].id
function my(){
    alert(object.length)
    for(i = 0; i < object.length; i++){
        alert(object[i].id)
     k = uppodGet(object[i].id,'getime')
        alert("time" + " " + k)
    }

}*/


/*window.onclick=function(e){
  var elem = e ? e.target : window.event.srcElement;
  alert(elem.id)
}*/