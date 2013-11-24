/**
 * Created by KateKate on 24.11.13.
 */
<script>

(function(_global) {
	var captions = [];
	var video;
	var output;
	var caplen;

	window.addEventListener('load', function() {
		output = document.createElement('div'); // JS is enabled, so insert a div to put the captions into
		output.id = 'caption'; // it has an id of caption
		video = document.querySelector('video'); // and it's after the first video element
		video.parentNode.insertBefore(output, video.nextSibling);
		getCaptions();
		video.addEventListener('timeupdate', timeupdate, false);
	}, false);


	// function to populate the 'captions' array
	function getCaptions() {
		captions = []; // empty the captions array
		var nodes = document.querySelectorAll('#transcript span');
		var node = "";
		var caption = "";
		for (var i = 0, node; node = nodes[i]; i++) {
			caption = {'start': parseFloat(node.getAttribute('data-begin')), // get start time
				'end': parseFloat(node.getAttribute('data-end')), // and end time
				'text': node.textContent};
			captions.push(caption); // and all the captions into an array
		}
		caplen = captions.length;
	}


	function timeupdate() {
		var now = video.currentTime; // how soon is now?
		var text = "", cap = "";
		for (var i = 0; i < caplen; i++) {
			cap = captions[i];
			if (now >= cap.start && now <= cap.end) { // is now within the times specified for this caption?
				text = cap.text; // yes? then load it into a variable called text
				break;
			}
		}
		output.innerHTML = text; // and put contents of text into caption div
	}

	// hide transcript div when scripting is enabled
	document.write('<style>#transcript{display:none}</style>');
})(this);

</script>
