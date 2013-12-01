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
    <div>'+title+'</div> \
    <div >'+body+'</div> \
    <input  type="button" value="OK"/> \
  </div>'
  return container.firstChild
}

function positionMessage(elem) {

  var v = document.querySelector('video');
  var width = v.offsetWidth;
   var scroll = document.documentElement.scrollTop || document.body.scrollTop
    alert(scroll)
  //alert(width)
  elem.style.position = 'absolute'

  var scroll = document.documentElement.scrollTop || document.body.scrollTop
  elem.style.top = scroll + 200 + 'px'
  //elem.style.width =width + 'px'
  elem.style.color = 'red'
  elem.style.left = Math.floor(document.body.clientWidth/2) - 150 + 'px'
  /*elem.style.width = width + scroll + 'px'
  elem.style.position = 'relative'
  elem.style.margin = 'auto'
  */
}
function addCloseOnClick(messageElem) {

  var input = messageElem.getElementsByTagName('INPUT')[0]

  input.onclick = function() {
    messageElem.parentNode.removeChild(messageElem)
  }

}

function setupMessageButton() {
   title = "hey"
   body = "friend"

  // создать
  var messageElem = createMessage(title, body)

  // позиционировать
  positionMessage(messageElem)

  // добавить обработчик на закрытие
  addCloseOnClick(messageElem)

  // вставить в документ
  document.body.appendChild(messageElem)
}
