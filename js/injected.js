/**
 * Created by KateKate on 24.11.13.
 */
/*function injected_main() {
    //alert('Injected!');
    //количество пройденного времени
    var v = document.querySelector('video');
    var now = v.currentTime;
    //иак можно азнавать ширину любого элемента даже если она на стиле забита
    var width = v.offsetLeft;
    var height = v.offsetHeight;
        alert(width);

   var newDiv = document.createElement('div')
    newDiv.className = 'my-class'
    newDiv.id = 'my-id'
    newDiv.style.backgroundColor = 'red'

    newDiv.innerHTML = 'Привет, мир!'
    document.body.appendChild(newDiv)
}

function addCloseOnClick(messageElem) {

  var input = messageElem.getElementsByTagName('INPUT')[0]

  input.onclick = function() {
    messageElem.parentNode.removeChild(messageElem)
  }

}*/



/*var




function injected_main(){
    alert("jgk")
    //globtext = inSubs

})*/


contents = ""
function handleFiles(files) {
   // alert("hgdgg")
       var f = files[0]
       if (f) {
          var r = new FileReader();
          r.onload = function(e) {
              contents = e.target.result;
              testr = myText()
              alert(testr)
          }
          r.readAsText(f);
       } else {
          alert("Failed to load your subs");
       }
}
var beginArray = []
var endArray = []
var textArray = []
var testMy = 5
function myText(){
    var myReBegin = /^\d{2}:\d{2}:\d{2},\d{3}/mg;
    var myReEnd = /\d{2}:\d{2}:\d{2},\d{3}$/mg
    while((tek = myReBegin.exec(contents)) != null)
              beginArray.push(tek)


    /*for(i = 0;i < beginArray.length ; i++){
        newbegin  = beginArray[i].split(/:/)
        alert(newbegin)
        /*last = newbegin[2].split(',')
        beginArray[i] = last[1] + 10*last[0] + 60*newbegin[1]+3600*newbegin[0]
        alert(beginArray[i])*/
    //}*/
    t = beginArray[0].split(":")
    alert(t)


    while((tek = myReEnd.exec(contents)) != null)
              endArray.push(tek)
    //косяк в конце число надо убрать
    textArray = contents.split(/\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/)
    for(i = 0; i< textArray.length; i += 1){
        textArray[i] = textArray[i].replace(/[\r\n]/g, ' ')
        textArray[i] = textArray[i].substr(0,textArray[i].length - 5)
    }
    //alert(textArray[2])

    return beginArray
}
function myText2(){
    var myReBegin = /^\d{2}:\d{2}:\d{2},\d{3}/mg;
    var myReEnd = /\d{2}:\d{2}:\d{2},\d{3}$/mg
    while((tek = myReBegin.exec(contents)) != null)
              beginArray.push(tek)
    while((tek = myReEnd.exec(contents)) != null)
              endArray.push(tek)
    //косяк в конце число надо убрать
    textArray = contents.split(/\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/)
    for(i = 0; i< textArray.length; i += 1){
        textArray[i] = textArray[i].replace(/[\r\n]/g, ' ')
        textArray[i] = textArray[i].substr(0,textArray[i].length - 5)
    }
    //alert(textArray[2])

    return endArray
}
function myText3(){
    var myReBegin = /^\d{2}:\d{2}:\d{2},\d{3}/mg;
    var myReEnd = /\d{2}:\d{2}:\d{2},\d{3}$/mg
    while((tek = myReBegin.exec(contents)) != null)
              beginArray.push(tek)
    while((tek = myReEnd.exec(contents)) != null)
              endArray.push(tek)
    //косяк в конце число надо убрать
    textArray = contents.split(/\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/)
    for(i = 0; i< textArray.length; i += 1){
        textArray[i] = textArray[i].replace(/[\r\n]/g, ' ')
        textArray[i] = textArray[i].substr(0,textArray[i].length - 5)
    }
    //alert(textArray[2])

    return textArray
}


function getBegin(){
   beginArray
}
function getEnd(){
   return endArray
}

function getText(){
  return textArray
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

    var begin = []
    begin.push(10)
    begin.push(20)
    begin.push(30)
    var end = []
    end.push(20)
    end.push(30)
    end.push(40)
    var mytext = myText3()

   window.setInterval( function() {
       var now = matches[0].currentTime
       for(i = 0; i < begin.length; i++){

           if(parseInt(now) >= begin[i] && parseInt(now) <= end[i]){
                 //alert(parseInt(now) +" "+ begin[i]+" " + end[i] + " ")
                title = mytext[i];
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





