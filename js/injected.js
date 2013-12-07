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

function createMessage(title) {
  var container = document.createElement('div')
  container.innerHTML = '<div  style= "width: 800px; height = 600px; " > \
    <p style= "font-size:16px" >'+title+' </p> \
  </div>'
  return container.firstChild
}

function positionMessage(elem) {
  elem.style.position = 'absolute'
  elem.style.top =  10 +  'px'
  elem.style.left = 10 +'px'
  elem.style.backgroundColor = 'red'
}

function setupMessageButton(title) {
   title = "heyrettttrretertertertert ertreterttr dgsgsgf sfgsfgsdfgsfdg sgs fgsdf gsfd gdsf g dfg fd gsdf gs dg sfg s gf "
   body = "friend"
   var messageElem = createMessage(title)
   positionMessage(messageElem)
   video = document.querySelector('video')
   parent = video.parentNode;
   //текст поверх добавляем к родителю видеоы
   parent.appendChild(messageElem)
}
