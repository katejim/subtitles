// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function onRequest(request, sender, sendResponse) {

  var url = "infobar.html#" + request.count;


  chrome.infobars.show({
    tabId: sender.tab.id,
    path: url
  });

  sendResponse({});
};

chrome.extension.onRequest.addListener(onRequest);
