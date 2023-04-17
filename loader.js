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
    height: 10px;
    width: 600px;
    top: ${iframe.offsetTop}px;
    left: ${iframe.offsetLeft}px;
    background-color: #000;
    cursor: move;
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


var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;


var script = iframeDoc.createElement('script');
script.src = 'https://craexz.github.io/mortal-hub/raw.js';
iframeDoc.head.appendChild(script);
