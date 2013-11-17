// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


matches = document.getElementsByTagName('video');
if (matches.length>0) {
  var payload = {
    count: matches.length    // Pass the number of matches back.
  };
  chrome.extension.sendRequest(payload, function(response) {});
}

