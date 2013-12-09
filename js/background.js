
function onRequest(request, sender, sendResponse) {
  var url = "infobar.html#" + request.count;
  chrome.infobars.show({
    tabId: sender.tab.id,
    path: url
  });
  sendResponse({});
};

chrome.extension.onRequest.addListener(onRequest);



