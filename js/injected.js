/**
 * Created by KateKate on 24.11.13.
 */
function injected_main() {
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

function createMessage(title, body) {
  var container = document.createElement('div')
  container.innerHTML = '<div> \
    <div> <p>'+title+' </p></div> \
    <div >'+body+'</div> \
  </div>'
  return container.firstChild
}

function positionMessage(elem) {

  var v = document.querySelector('video');
  var videoRectangle =v.getBoundingClientRect()
  var videoTop =  videoRectangle.top
  var videoBottom =  videoRectangle.bottom
  var videoLeft =  videoRectangle.left
  var videoRight =  videoRectangle.right
    alert(videoBottom  - videoTop)
     alert(videoLeft)
   var scroll = document.documentElement.scrollTop || document.body.scrollTop

  //alert(width)
  elem.style.position = 'absolute'

  elem.style.top =  videoBottom -30 + 'px'
  //elem.style.width =width + 'px'
  elem.style.color = 'red'
  elem.style.left = videoLeft + Math.round((videoRight-videoLeft)/15) + scroll+ 'px'
  elem.style.right = videoRight - Math.round((videoRight-videoLeft)/15) + 'px'
  /*elem.style.width = width + scroll + 'px'
  elem.style.position = 'relative'
  elem.style.margin = 'auto'
  */
  elem.textAlign = 'center'
  elem.fontFamily = 'sans-serif'
  elem.fontWeight =  'bold'
  elem.textShadow = 'black 1px 1px 3px'
  elem.paddingBottom = '.5em'

}
function addCloseOnClick(messageElem) {

  var input = messageElem.getElementsByTagName('INPUT')[0]

  input.onclick = function() {
    messageElem.parentNode.removeChild(messageElem)
  }

}

function setupMessageButton() {
   title = "heyrettttrretertertertertertreterttr"
   body = "friend"

  // создать
  var messageElem = createMessage(title, body)

  // позиционировать
  positionMessage(messageElem)

  // добавить обработчик на закрытие
  //addCloseOnClick(messageElem)

  // вставить в документ
 // video = document.querySelector('video')
  document.body.appendChild(messageElem)

}
