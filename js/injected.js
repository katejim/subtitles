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
              var re = myText()
              alert(re)
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
    while((tek = myReEnd.exec(contents)) != null)
              endArray.push(tek)
    //косяк в конце число надо убрать
    textArray = contents.split(/\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/)
    for(i = 0; i< textArray.length; i += 1){
        textArray[i] = textArray[i].replace(/[\r\n]/g, ' ')
        textArray[i] = textArray[i].substr(0,textArray[i].length - 5)
    }
    alert(textArray[2])

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

function timeupdate() {
		/*var now = video.currentTime; // how soon is now?
		var text = "", cap = "";
		for (var i = 0; i < caplen; i++) {
			cap = captions[i];
			if (now >= cap.start && now <= cap.end) { // is now within the times specified for this caption?
				text = cap.text; // yes? then load it into a variable called text
				break;
			}
		}*/
        //text = "hsfsdf"
		//output.innerHTML = text; // and put contents of text into caption div
        alert("sfdsf")

}
function createMessage(title) {
  var container = document.createElement('div')
  container.innerHTML = '<div > \
    <p style= "font-size:25px; text-align: center;" >'+title+' </p> \
  </div>'
  return container.firstChild
}



