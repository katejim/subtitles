// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


matches = document.getElementsByTagName('video');

if (matches.length>0) {
  var payload = {
    count: matches.length    // Pass the number of matches back.
  };

    //injected code
  $.get(chrome.extension.getURL('/js/injected.js'),
    function(data) {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = data;
        document.getElementsByTagName("head")[0].appendChild(script);
        //показывает время в секундах при паузе
        document.getElementsByTagName("video")[0].setAttribute("onpause", "injected_main();");
    }
  );

  chrome.extension.sendRequest(payload, function(response) {});
}

