javascript:(function() {
    var scriptUrl = 'https://bznel.github.io/Mortal-Hub/script.js';
    if (scriptUrl.startsWith('javascript:')) {
      scriptUrl = scriptUrl.substring('javascript:'.length);
    }

    var script = document.createElement('script');
    script.src = scriptUrl;
    script.onerror = function() {
      showErrorOverlay();
    };
    document.body.appendChild(script);

    function showErrorOverlay() {
        var overlay = document.createElement("div");
        overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); backdrop-filter: blur(5px); z-index: 9999;";
        var alertBox = document.createElement("div");
        alertBox.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 50%; max-width: 600px; padding: 20px; background-color: #212121; color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); opacity: 0; transition: opacity 0.5s; font-family: 'Poppins', sans-serif;";
        var titleText = document.createElement("h1");
        titleText.style.cssText = "font-size: 36px; font-weight: 800; text-align: center; margin-bottom: 20px; letter-spacing: 2px; font-family: 'Space Grotesk', sans-serif;background-color:rgba(0,0,0,0);border:none;";
        titleText.innerHTML = "Error";
        var messageText = document.createElement("p");
        messageText.style.cssText = "font-size: 16px; text-align: center; margin-bottom: 20px; line-height: 1.5; font-family: 'Montserrat', sans-serif;";
        messageText.innerHTML = "The script doesn't have permission to load on this site. (XSS is blocked)";
        var okButton = document.createElement("button");
        okButton.style.cssText = "display: block; margin: auto; padding: 10px 20px; background-color: #333; color: #fff; border: 2px solid #333; border-radius: 30px; font-size: 16px; font-weight: 500; letter-spacing: 1px; font-family: 'Montserrat', sans-serif; cursor: pointer; transition: all 0.3s ease;width: 100%;";
        okButton.innerHTML = "OK";

        alertBox.appendChild(titleText);
        alertBox.appendChild(messageText);
        alertBox.appendChild(okButton);
        overlay.appendChild(alertBox);
        document.body.appendChild(overlay);

        document.body.style.cssText = "overflow: hidden; pointer-events: auto; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;";

        setTimeout(function() {
          alertBox.style.opacity = 1;
        }, 100);

        okButton.addEventListener("mouseover", function() {
          okButton.style.backgroundColor = "#888";
          okButton.style.color = "black";
        });

        okButton.addEventListener("mouseout", function() {
          okButton.style.backgroundColor = "#333";
          okButton.style.color = "#fff";
        });

        okButton.addEventListener("click", function() {
          alertBox.style.opacity = 0;
          setTimeout(function() {
            document.body.removeChild(overlay);
            document.body.style.cssText = "";
          }, 500);
        });
    }
})();
