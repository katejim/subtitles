//добавление тулбар на страницу, если он был скрыт
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: 'document.getElementById("uniqToolBar").style.display = ""'
  });
});
