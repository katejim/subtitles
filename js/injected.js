/**
 * Created by KateKate on 24.11.13.
 */
var beginArray = []
var endArray = []
var textArray = []
contents = ""
function handleFiles(files) {
   // alert("hgdgg")
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
    //косяк в конце число надо убрать
    textArray = contents.split(/\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/)
    for(i = 0; i< textArray.length; i += 1){
        textArray[i] = textArray[i].replace(/[\r\n]/g, ' ')
        textArray[i] = textArray[i].substr(0,textArray[i].length - 5)
    }
    return beginArray
}



video = document.querySelector('video');


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
  width = (rect.right - rect.left) - 40 + 'px'
  elem.style.width = width

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
  width = (rect.right - rect.left) - 40 + 'px'
  elem.style.width = width

}

matches = document.getElementsByTagName('video');
var i = 0
function setupMessageButton() {
    /*var begin = []
    begin.push(10)
    begin.push(20)
    begin.push(30)
    var end = []
    end.push(20)
    end.push(30)
    end.push(40)*/



   window.setInterval( function() {
       var now = matches[0].currentTime
       for(i = 0; i < beginArray.length; i++){
           // alert(now + " " + beginArray[i] + " " +endArray[i])
           if(parseFloat(now) >= parseFloat(beginArray[i]) && parseFloat(now) <= parseFloat(endArray[i])){
                title = textArray[i];
                var messageElem = createMessage(title)
                 positionMessage(messageElem)
                 //matches = document.querySelector('video')
                 parent = matches[0].parentNode;
                 //текст поверх добавляем к родителю видеоы
                 parent.appendChild(messageElem)

           }
       }

   }, 1000);
}





