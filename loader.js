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
bar.style.cssText = `
    position: fixed;
    z-index: 999999;
    height: 15px;
    width: 600px;
    top: ${iframe.offsetTop}px;
    left: ${iframe.offsetLeft}px;
    background-color: #000;
    cursor: move;
`;
document.body.appendChild(bar);


var minimizeButton = document.createElement("div");
minimizeButton.style.cssText = `
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 15px;
    background-color: #666;
    cursor: pointer;
`;
bar.appendChild(minimizeButton);


var reopenButton = document.createElement("div");
reopenButton.style.cssText = `
    position: fixed;
    z-index: 999999;
    width: 100px;
    height: 50px;
    bottom: 10px;
    right: 10px;
    background-color: #666;
    color: #fff;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    display: none;
`;
reopenButton.innerHTML = "Open UI";
document.body.appendChild(reopenButton);

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


minimizeButton.addEventListener("click", function(event) {
    iframe.style.display = "none";
	topbar.style.visibility = "hidden";
    reopenButton.style.display = "block";
});


reopenButton.addEventListener("click", function(event) {
    iframe.style.display = "block";
	topbar.style.visibility = "visible";
    reopenButton.style.display = "none";
});



var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;


var script = iframeDoc.createElement('script');
script.src = 'https://craexz.github.io/mortal-hub/raw.js';
iframeDoc.head.appendChild(script);

