var iframe = document.createElement("iframe");
iframe.style.cssText = `
    position: fixed;
    z-index: 999999;
    border: none;
    width: 600px;
    height: 300px;
    top: 100px;
    left: 100px;
`;
document.body.appendChild(iframe);


var bar = document.createElement("div");
bar.id = "bar";
bar.style.cssText = `
    position: fixed;
    z-index: 999999;
    height: 15px;
    width: 600px;
    top: ${iframe.offsetTop}px;
    left: ${iframe.offsetLeft}px;
    background-color: #000;
    cursor: move;
	visibility: visible;
`;
document.body.appendChild(bar);


var isDragging = false;
var dragStartX, dragStartY;

bar.addEventListener("mousedown", function(event) {
    isDragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
});


document.addEventListener("mouseup", function(event) {
    isDragging = false;
});

document.addEventListener("mousemove", function(event) {
    if (isDragging) {
        var deltaX = event.clientX - dragStartX;
        var deltaY = event.clientY - dragStartY;
        iframe.style.left = (iframe.offsetLeft + deltaX) + "px";
        iframe.style.top = (iframe.offsetTop + deltaY) + "px";
        bar.style.left = iframe.offsetLeft + "px";
        bar.style.top = iframe.offsetTop + "px";
        dragStartX = event.clientX;
        dragStartY = event.clientY;
    }
});

document.addEventListener('keydown', function(event) {
		if (event.shiftKey && event.code === 'ShiftRight') {
			iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
			var alertUI = document.getElementById('alert-ui');
			if (iframe.style.display === 'none') {
				if (!alertUI) {
					alertUI = document.createElement('div');
					alertUI.id = 'alert-ui';
					alertUI.style.cssText = 'position: fixed; bottom: 10px; right: 10px; background-color: #333; color: #fff; padding: 10px; border-radius: 5px; font-size: 14px; z-index: 99999;';
					alertUI.textContent = 'UI has been hidden, press right shift to show';
					document.body.appendChild(alertUI);
				} else {
					document.getElementById("bar").style.visibility = "hidden";
					alertUI.style.display = 'block';
				}
			} else {
				if (alertUI) {
					document.getElementById("bar").style.visibility = "visible";
					alertUI.style.display = 'none';
				}	
			}
		}
});
	

var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;


var script = iframeDoc.createElement('script');
script.src = 'https://craexz.github.io/mortal-hub/raw.js';
iframeDoc.head.appendChild(script);
