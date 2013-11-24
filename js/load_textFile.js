/**
 * Created by KateKate on 24.11.13.
 */
 function handle_files(files) {
       var f = files[0];
       if (f) {
          var r = new FileReader();
          r.onload = function(e) {
              var contents = e.target.result;
            alert(contents);
            p    = document.write("p" + contents + "</p>");
          }
          r.readAsText(f);
       } else {
          //alert("Failed to load file");
       }
    //научиться передавать текст injected.js
   //chrome.extension.sendRequest(payload, function(response) {});
}