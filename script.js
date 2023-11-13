try {
  document.getElementById("mortalhubui").remove();
} catch (e) {
  /* */
}

const buttonCSS = 'display:block;margin:10px auto;width: 58%;padding:10px 20px;background-color:rgba(55, 55, 55, 0.8);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out,text-shadow 0.2s ease-in-out;text-align:left;outline-top: none;outline:none;border-radius:10px;';
const tabCSS = 'width:100%;background-color:rgba(0,0,0, 1);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out;text-align:center;border-top: none;border-bottom: none;border-left: none;border-right: none; outline: none;margin-top: -1px;margin-bottom:none;padding-top:-1px;padding-botton:none;padding-left:none; text-align: center; border-radius: 0px;';
const toggleButtonCSS = 'display: flex; align-items: center; justify-content: space-between; margin: 10px auto; width: 58%; padding: 10px 20px; background-color: rgba(55, 55, 55, 0.8); border: none; color: #fff; font-size: 14px; font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold; border-radius: 10px; transition: background-color 0.2s ease-in-out; outline: none; max-height: 39px;';
const dropdownButtonCSS = 'display:block;margin:10px auto;width:58%;padding:10px 20px;background-color:rgba(55, 55, 55, 0.8);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out,text-shadow 0.2s ease-in-out;text-align:left;outline-top: none;outline:none;border-radius:10px;';
const dropdownContentCSS = 'display:none;margin:10px auto;width:58%;border-radius:10px;padding:none;background-color:rgba(55, 55, 55, 0.8);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out,text-shadow 0.2s ease-in-out;text-align:left;outline-top: none;outline:none;';
const dropdownOptionCSS = 'display:block;margin:0px auto;width:calc(100% - 40px);padding:10px 20px;background-color:rgba(55, 55, 55, 0.8);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out,text-shadow 0.2s ease-in-out;text-align:left;border-top: 1px solid black;outline:none;border-radius:10px;';
const inputCSS = 'display:block;margin:10px auto;width:50%;padding:10px 20px;background-color:rgba(55, 55, 55, 0.8);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;border-radius: 10px;transition:background-color 0.2s ease-in-out;text-align:left;outline-top: none;';
const textCSS = 'width:100%;padding-left:0px;background-color:rgba(22, 22, 22, 0);border:none;color:#fff;font-size:14px;font-family:\'Inter\', sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out;text-align:center;border-left: none;border-right: none; max-height: 50px; margin-top: 0px; margin-bottom: 0px; border-top-left-radius: 0px;';
const textboxCSS = 'width: calc(100% - 40px);' + 'height: auto;' +'padding: 10px;' + 'background-color: rgba(0, 0, 0, 0.7);' +'border: 1px solid white;' +'color: white;' +'font-size: 14px;' +'font-family: \'Inter\', sans-serif;' +'font-weight: bold;' +'cursor: pointer;' +'transition: background-color 0.2s ease-in-out;' +'text-align: left;' + 'border-radius: 10px;' + 'margin-top: 20px;' + 'margin-bottom: 0px;'; 

let fakewindow = window.open("about:blank", "", "width=1,height=1, top=2000,left=2000");



function createTab(title) {
  var button = document.createElement('button'); 
  button.textContent = title; 
  button.id = "mortal-hub-button-"+title;
  button.style.borderTop = title === 'Links' ? 'none' : '1px solid #666';
  button.style.cssText = tabCSS;
	
  button.addEventListener('mouseover', function() { button.style.textDecoration = "underline"; button.style.paddingBottom = "2px"; });
  button.addEventListener('mouseout', function() { if (localStorage.getItem('uiPage') !== title) { button.style.textDecoration = "none";button.style.paddingBottom = "0px";}});

  button.addEventListener('click', function() {

    if (title !== localStorage.getItem("uiPage")) {
      var oldBtn = document.getElementById("mortal-hub-button-"+localStorage.getItem("uiPage"));

      if (oldBtn) {
        oldBtn.style.textDecoration = "none";
      }
      
      button.style.backgroundColor = 'rgba(0, 0, 0, 1)';


      loadPage(title);
    }
    
  });
  
  return button;
}


function copyToClipboard(text) {
  var tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand('copy');

  tempInput.remove();
}

function fadeIn(element, duration) {
  var startingOpacity = 0;
  var targetOpacity = 1;
  var startTime = null;

  function animate(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }

    var timeElapsed = currentTime - startTime;
    var opacity = startingOpacity + (timeElapsed / duration) * (targetOpacity - startingOpacity);

    element.style.opacity = opacity;

    if (timeElapsed < duration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}


function showAlert(text) {
	Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
	  const dts = Math.floor(Date.now());

    new Notification('Mortal Hub', {
      body: text,
			tag: "mortal-hub-notification",
			timestamp: dts,
			vibrate: [1000, 1000, 1000],
			renotify: true
    });
  }
});
}

function createButton(title, function_) {
  var content = document.getElementById("mortalhubcontent");
  var button = document.createElement('button');
	
  button.textContent = title;
  button.style.borderTop = title === 'Links' ? 'none' : '1px solid #666';
  button.style.cssText = buttonCSS;
	button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'rgba(22, 22, 22, 0.8)';
    button.style.textShadow = '1px 1px 3px rgba(255, 255, 255, 0.3)';
  });
  button.addEventListener('mouseout', function() {
    button.style.backgroundColor = 'rgba(55, 55, 55, 0.8)';
    button.style.textShadow = 'none';
  });
  button.addEventListener('click', function() {
    function_();
  });
  content.appendChild(button);
}


function createToggle(title, onToggle) {
  var content = document.getElementById("mortalhubcontent");
  var toggleButton = document.createElement('button');
  toggleButton.style.cssText = toggleButtonCSS;
	
	toggleButton.style.backgroundColor = "rgba(55, 55, 55, 0.8)";
  var titleContainer = document.createElement('div');
  titleContainer.style.cssText = 'display: flex; align-items: center; flex-grow: 1;';

  var titleText = document.createElement('h2');
  titleText.style.cssText = 'margin: 0; font-size: 14px; font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold; text-align: left;';

  var statusText = document.createElement('h2');
  statusText.style.cssText = 'margin: 0; font-size: 14px; font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold; text-align: right;';

  titleText.textContent = title;

  titleContainer.appendChild(titleText);

  toggleButton.appendChild(titleContainer);
  toggleButton.appendChild(statusText);

  var toggleStatus = false;
  updateButtonStyles();

  toggleButton.addEventListener('click', function() {

    toggleStatus = !toggleStatus;
    updateButtonStyles();

    onToggle(toggleStatus);
  });

  toggleButton.addEventListener('mouseover', function() {
    toggleButton.style.backgroundColor = 'rgba(22, 22, 22, 0.8)';
  });

  toggleButton.addEventListener('mouseout', function() {
    toggleButton.style.backgroundColor = 'rgba(55, 55, 55, 0.8)';
  });

  content.appendChild(toggleButton);

  function updateButtonStyles() {
    statusText.style.color = toggleStatus ? '#006400' : '#8B0000';

    statusText.innerHTML = toggleStatus ? 'ON' : 'OFF';
    
    
  }
}



function createDropdown(title, options, function_) {
  var content = document.getElementById("mortalhubcontent");
  var dropdown = document.createElement('div');
  dropdown.className = 'dropdown';
  var dropdownButton = document.createElement('button');
  dropdownButton.textContent = title;
  dropdownButton.style.cssText = dropdownButtonCSS;
	
	dropdown.appendChild(dropdownButton);
  var dropdownContent = document.createElement('div');
  dropdownContent.className = 'dropdown-content';
  dropdownContent.style.cssText = dropdownContentCSS;
	
 var style = document.createElement('style');
  style.innerHTML = `
      ::-webkit-scrollbar {
        display: none;
      }
    `;
  document.head.appendChild(style);

  for (var i = 0; i < options.length; i++) {
    var option = document.createElement('a');
    option.textContent = options[i];
    option.style.cssText = dropdownOptionCSS;
		
	  option.addEventListener('mouseover', function() {
    	this.backgroundColor = 'rgba(22, 22, 22, 0.8)';
  	});

		option.addEventListener('mouseout', function() {
			this.backgroundColor = 'rgba(55, 55, 55, 0.8)';
		});
	
		option.addEventListener('click', function() {
      function_(this.textContent);
      hideDropdown();
    });
    dropdownContent.appendChild(option);
  }
  dropdown.appendChild(dropdownContent);
  content.appendChild(dropdown);
  dropdownButton.addEventListener('click', function() {
    if (dropdownContent.style.display === 'none') {
      showDropdown();
    } else {
      hideDropdown();
    }
  });
	
	dropdownButton.addEventListener('mouseover', function() {
    dropdownButton.style.backgroundColor = 'rgba(22, 22, 22, 0.8)';
  });

  dropdownButton.addEventListener('mouseout', function() {
    dropdownButton.style.backgroundColor = 'rgba(55, 55, 55, 0.8)';
  });
	


  function showDropdown() {
    dropdownContent.style.display = 'block';
    dropdownContent.style.animation = 'slide-down 0.5s forwards';
  }
  function hideDropdown() {
    dropdownContent.style.animation = 'slide-up 0.5s forwards';
    setTimeout(function() {
      dropdownContent.style.display = 'none';
    }, 0);
  }
}

function createInput(title, function_, removeafter) {
  var removeafter = removeafter || false;
  var content = document.getElementById("mortalhubcontent");
  var input = document.createElement('input');
  input.id = title;
  if (removeafter === true) {
    input.className = 'geometry';
  };
  input.type = "text";
  input.placeholder = title;
  input.style.borderTop = title === 'Links' ? 'none' : '1px solid #666';
  input.style.cssText = inputCSS;
	
  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var text = input.value;
      input.value = "";
      if (removeafter === true) {
        input.remove();
      }
			input.style.scrollTop = input.style.scrollHeight;
      function_(text);
    }
  });

  content.appendChild(input);
}

function createText(value) {
  var content = document.getElementById("mortalhubcontent");
  var text = document.createElement('h1');
  text.textContent = value;
  text.style.borderTop = value === 'Links' ? 'none' : '1px solid #666';
  text.style.cssText = textCSS;
	
  content.appendChild(text);
}

function createConsoleBox() {
  var content = document.getElementById("mortalhubcontent");
  var text = document.createElement('div');
	text.id = "mortalhubconsole";
  text.textContent = "";
  text.style.cssText =
    'width: calc(100% - 40px);' + 
		'height: calc(70%);' +
    'padding: 10px;' + 
    'background-color: rgba(0, 0, 0, 0.7);' +
    'border: 1px solid white;' +
    'color: white;' +
    'font-size: 14px;' +
    'font-family: \'Inter\', sans-serif;' +
    'font-weight: bold;' +
    'cursor: pointer;' +
    'transition: background-color 0.2s ease-in-out;' +
    'text-align: left;' + 
    'border-radius: 10px;' + 
    'margin-top: 20px;' + 
    'margin-bottom: 0px;' +
		'overflow-y: auto';

  content.appendChild(text);
}

function createTextBox(text) {
  var content = document.getElementById("mortalhubcontent");
  var box = document.createElement('div');
  box.innerHTML = text;
  box.style.cssText = textboxCSS;

  content.appendChild(box);
}


function createSlider(name, minValue, maxValue, callback) {
  var content = document.getElementById("mortalhubcontent");
  var sliderContainer = document.createElement('div');
  sliderContainer.style.cssText = 'display: flex; align-items: center; justify-content: space-between; margin: 10px auto; width: 50%; padding: 10px 20px; background-color: rgba(55, 55, 55, 0.8); border: none; color: #fff; font-size: 14px; font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold; border-radius: 10px; transition: background-color 0.2s ease-in-out; outline: none; max-height: 39px; max-width:250px;';

  var title = document.createElement('span');
  title.textContent = name;
  title.style.cssText = 'font-size: 14px; margin-bottom: 5px; margin-right: 5px;display: block;';

  var slider = document.createElement('input');
  slider.type = 'range';
  slider.min = minValue;
  slider.max = maxValue;
  slider.value = (minValue + maxValue) / 2; 
  slider.style.cssText = 'width: 100%;';

  var valueDisplay = document.createElement('span');
  valueDisplay.textContent = slider.value;
  valueDisplay.style.cssText = 'display: inline-block; margin-left: 5px;';

  slider.addEventListener('input', function() {
    var newValue = parseFloat(slider.value);
    valueDisplay.textContent = newValue;
    callback(newValue);
  });

  sliderContainer.appendChild(title);
  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(valueDisplay);
  content.appendChild(sliderContainer);
}

async function isImageUrl(url) {
  try {
    var response = await fetch(url, { method: "HEAD" });

    if (response.ok) {
      var contentType = response.headers.get("content-type");
      return contentType && contentType.startsWith("image/");
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}



function loadPage(title) {
  localStorage.setItem("uiPage", title);

  var content = document.getElementById("mortalhubcontent");
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }


  removeAllChildNodes(content);

  var particlesContainer = document.createElement('div');
  particlesContainer.id = "particles-container";
  particlesContainer.style.position = "absolute";
  particlesContainer.style.top = "0";
  particlesContainer.style.left = "0";
  particlesContainer.style.width = "100%";
  particlesContainer.style.height = "100%";
  particlesContainer.style.pointerEvents = "none"; 

  content.appendChild(particlesContainer);

  if (title === "Info") {
    createText("‎ ‎ ");
    createText("(SECURLY SCRIPTS NOT FOR USE IN SCHOOL ENVIRONMENTS)");
    createText("Public Project Made by: bznel#0");
		
		createText("‎ ‎ ");
		createText("Scripts");
		
		createTextBox("- History Flooder (spams browser history with entries)<br>- Screen Hider (hides your screen from securly)<br>- Disable Tab Closing (bypasses securly's tab closing)<br>- Tab Disguise (makes your tab look like google drive)<br>- Barrel Roll (animates your page to spin in a circle)<br>- Show Text Alert (simple script to show an alert)<br>- Page Editing (allows you to edit any text on your page)");
		
		createText("‎ ‎ ");
    createText("Console");
    createTextBox("- Console box displays logs, errors, and warnings<br>- Command input allows you to run any javascript commands");


		
  }
  if (title === "Scripts") {
    createText("‎ ‎ ");
    createText('History Flooder');
    createInput('Entries (ex: 50)', function(num) {
      var done = false;
      for (var i = 1; i <= num; i++) {
        window.history.pushState(0, 0, i == num ? window.location.href : i);
        if (i == num) {
          done = true
        }
      }

      if (done === true) {
        showAlert("History Flooding Successful! (" + num.toString() + " Entries)")
      }
    });

    createText("‎ ‎ ");
    createText('Securly (against school terms!)');
    createToggle("Hide Screen", function(toggle) {
      if (toggle === true) {
        localStorage.setItem('mortal-hub-cloak', true);
      } else {
        localStorage.setItem('mortal-hub-cloak', false);
      }
    });

    createButton("Disable Securly Tab Closing", function() {
      showAlert("Securly can't close this tab now. If you load a new page this won't work there.");
      window.onbeforeunload = function() {
        return 1;
      };
    });

    createButton("Tab Disguise", function() {
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon'; link.rel = 'shortcut icon';
      link.href = 'https://www.pngall.com/wp-content/uploads/9/Google-Drive-Logo-Transparent-180x180.png';
      document.title = 'My Drive - Google Drive';
      document.getElementsByTagName('head')[0].appendChild(link);

      showAlert('Tab is now cloaked.')
    });



    createText("‎ ‎ ");
    createText('Fun');

    isAnimating = false;
    createButton("Spin Page (Barrel Roll)", function() {
      if (!isAnimating) {
        var css = "\n@keyframes roll {\n  100%{\n    transform:rotate(360deg)\n  }\n}\nbody {\n  animation-name: roll;\n  animation-duration: 4s;\n  animation-iteration-count: 1;\n}\n";
        style = document.createElement("style");
        style.innerHTML = css;
        document.head.appendChild(style);
        isAnimating = true;
        setTimeout(function() {
          document.head.removeChild(style);
          isAnimating = false;
        }, 4000);
      }
    });




    createInput("Show a text alert (ex: hello)", function(text) {
      alert(text);
    });
    createText("‎ ‎ ");
    createText('Toggles');
    createToggle("Page Editing", function(toggle) {
      if (toggle === true) {
        document.body.contentEditable = 'true'; document.designMode = 'on';
      } else {
        document.body.contentEditable = 'false'; document.designMode = 'off';
      }
    });


  }
  if (title === "Sounds") {
    createText("‎ ‎ ");
    createButton("Vine Boom", function() {
      var audio = new Audio("https://bznel.github.io/Mortal-Hub/Vine-boom-sound-effect.mp3");
      audio.play();
    });

  }
	if (title === "Console") {
		createConsoleBox();
		
		createInput("Type command", function(text) {
		    try{
					eval(text);
					
				}catch(e) {
				
					if (e instanceof Error) {
            console.error(e);
					} else if (e instanceof Warning) {
						console.warn(e);
					} else {
						console.log(e);
					}
					
					
				}

    });
		
	}

  particlesJS("particles-container", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "star", /* Options: "circle", "edge", "triangle", "polygon", "star", "image" */
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "", 
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none", /* Options: "none", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left" */
        random: false,
        straight: false,
        out_mode: "out", /* Options: "out", "bounce" */
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab", /* Options: "grab", "bubble", "repulse", "remove"*/
        },
        onclick: {
          enable: true,
          mode: "push", /* Options: "push", "remove", "bubble", "repulse" */
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.5,
          },
        },
        bubble: {
          distance: 200,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    fps_limit: 60,
    particles_nb: 100, /* This option can be used to set the number of particles */
  });
}

function main(savedX = null, savedY = null, savedPage = null) {
  localStorage.setItem('mortal-hub-cloak', false); 
  
  document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.code === 'ShiftRight') {
      document.getElementById('mortalhubui').style.display = document.getElementById('mortalhubui').style.display === 'none' ? 'block' : 'none';
    }
  });

  var ui = document.createElement('div');
  ui.setAttribute('contenteditable', false);
  ui.id = "mortalhubui";
  ui.style.cssText = 'width: 600px; height: 300px; background-color: rgba(33, 33, 33, 0.5); border-radius: 10px; position: fixed; top: 271px; left: 430px; transform: translate(-50%, -50%); font-family: Arial, sans-serif; z-index: 99999; border-right: none; border-left: none; user-select: none; animation: gradientAnimation 5s infinite linear; background: linear-gradient(45deg, #111, #800080);background-size: 200% 200%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);';
 
  if (savedX !== null && savedY !== null) {
    ui.style.left = savedX;
    ui.style.top = savedY;
  }


  var tabs = document.createElement('div');
  tabs.style.cssText = 'width:100px;height:300px;background-color:rgba(0,0,0, 1);border-radius:10px;position:absolute;top:50%;left:0;transform:translateY(-50%); font-size: 0; text-align: center;border-bottom-right-radius: 0px;border-right: 1px solid white;';


  var tabList = [
    createTab('Info'),
    createTab('Scripts'),
    createTab('Console'),
    createTab('Sounds'),
    
	
  ];

  for (var i = 0; i < tabList.length; i++) {
    tabs.appendChild(tabList[i])
  };


  var content = document.createElement('div');
  content.id = "mortalhubcontent";
  content.style.cssText = 'width:500px;height:300px;background-color:black;border-radius:10px 0px 10px 0px;position:absolute;top:50%;right:0;transform:translateY(-50%);overflow-y:scroll;max-height: 300px;overflow-y: auto;text-align:center;border-top:none;::-webkit-scrollbar { width: 0px; background-color: transparent; }; background-size: 200% 200%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);border-top-left-radius: 0px;';
  content.style.borderTopRightRadius = '0';

  var particlesContainer = document.createElement('div');
  particlesContainer.id = "particles-container";
  particlesContainer.style.position = "absolute";
  particlesContainer.style.top = "0";
  particlesContainer.style.left = "0";
  particlesContainer.style.width = "100%";
  particlesContainer.style.height = "100%";
  particlesContainer.style.pointerEvents = "none"; 


  var topBar = document.createElement('div');
  topBar.style.cssText = 'height: 20px; background-color: black; position: absolute; top: -17px; left: 0; right: 0; cursor: move; border-top-left-radius: 10px; border-top-right-radius: 10px;border-bottom: 5px solid white;';

  ui.appendChild(topBar);

  topBar.addEventListener('mousedown', function(event) {
    initialX = event.clientX - ui.offsetLeft;
    initialY = event.clientY - ui.offsetTop;

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', release);
  });

  function move(event) {
    ui.style.left = (event.clientX - initialX) + 'px';
    localStorage.setItem("uiX", (event.clientX - initialX) + 'px');

    ui.style.top = (event.clientY - initialY) + 'px';
    localStorage.setItem("uiY", (event.clientY - initialY) + 'px');
  }
  
  function release(event) {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', release);
  }

  ui.appendChild(tabs);
  ui.appendChild(content);
  content.appendChild(particlesContainer);

  ui.style.opacity = 0;
  document.body.appendChild(ui);
  fadeIn(ui, 500);


  var initialX, initialY;

  alertCount = 0;
  lastAlertTime = 0;
  numAlerts = 0;


  if (savedPage !== null) {
    loadPage(savedPage);
  };


	function monitoringLoop() {
		if (document.hasFocus && localStorage.getItem('mortal-hub-cloak') === "true") {
			try {
				fakewindow.focus();
			} catch(e) {
				fakewindow = window.open("about:blank", "", "width=1,height=1,top=2000,left=2000");
				
			

				fakewindow.focus();
			}
		}

		requestAnimationFrame(monitoringLoop);
	}

	monitoringLoop();
	
	var consoleContent = [];

	function overrideConsoleMethods() {
			var methods = ['log', 'warn', 'error', 'info', 'debug', 'trace', 'group', 'groupEnd', 'table', 'time', 'timeEnd'];

			methods.forEach(methodName => {
					var originalMethod = console[methodName];
					console[methodName] = function(...args) {
							originalMethod.apply(console, args);

							var text = `[${methodName.charAt(0).toUpperCase()}${methodName.slice(1)}] ${args.join(" ")}`;
							
							document.getElementById('mortalhubconsole').scrollTop = (document.getElementById('mortalhubconsole').scrollHeight);
							consoleContent.push(text);
					};
			});
	}

	overrideConsoleMethods();

	function consoleLoop() {
			if (localStorage.getItem('uiPage') === "Console") {
					var consoleContentText = consoleContent.join("<br>");
					document.getElementById('mortalhubconsole').innerHTML = consoleContentText;
			}

			requestAnimationFrame(consoleLoop);
	}

	consoleLoop();

	
	  console.log("Mortal Hub Loaded");



		loadPage('Info');

	}


function startPrompt() {
  var style = document.createElement("style");
  style.innerHTML = `
  .background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .background-fade-out {
    animation: fadeOut 0.5s forwards;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes buttonFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  `;

  document.head.appendChild(style);

  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  document.body.appendChild(script);

  script.onload = function() {
    if (localStorage.getItem("mortalSessionActive") !== 'true') {

      var blackGradient = document.createElement("div"); 
      blackGradient.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: black; z-index: 999;"; 
      document.body.appendChild(blackGradient); 

      document.body.style.cssText = "overflow: hidden; pointer-events: auto; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;";

      var overlay = document.createElement("div");
      overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 200%; z-index: 9999;";
      overlay.classList.add("background-container");
  
      var particlesContainer = document.createElement("div");
      particlesContainer.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 999;"; 
      particlesContainer.id = "particles-js"; 
      overlay.appendChild(particlesContainer);
  
      var alertContainer = document.createElement("div");
      alertContainer.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 50%; max-width: 600px; padding: 20px; background-color: #212121; color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); opacity: 0; transition: opacity 0.5s; font-family: 'Poppins', sans-serif;z-index:999999;";
      overlay.appendChild(alertContainer);
  
      var messageText = document.createElement("p");
      messageText.style.cssText = "font-size: 16px; text-align: center; margin-bottom: 20px; line-height: 1.5; font-family: 'Montserrat', sans-serif;";
      messageText.innerHTML = "This is public software that has been developed to test the vulnerabilities of computer monitoring software within a personal environment. This script is not intended for use on any school device or network. The developer claims no responsibility for any consequences that may arise from doing so.<br><br>By using this software, you agree to abide by all applicable terms and rules."; 
      alertContainer.appendChild(messageText); 
  
      var okButton = document.createElement("button");
      okButton.style.cssText = "display: block;  padding: 10px 20px; background-color: #333; color: #fff; border: 2px solid #333; border-radius: 30px; font-size: 16px; font-weight: 500; letter-spacing: 1px; font-family: 'Montserrat', sans-serif; cursor: pointer; transition: all 0.3s ease; width: 100%; opacity: 0; pointer-events: none; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-top: 3%;";
      okButton.innerHTML = "I UNDERSTAND AND AGREE";
      alertContainer.appendChild(okButton); 
  
      document.body.appendChild(overlay);
  
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "star", /* Options: "circle", "edge", "triangle", "polygon", "star", "image" */
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "", 
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none", /* Options: "none", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left" */
            random: false,
            straight: false,
            out_mode: "out", /* Options: "out", "bounce" */
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab", /* Options: "grab", "bubble", "repulse", "remove"*/
            },
            onclick: {
              enable: true,
              mode: "push", /* Options: "push", "remove", "bubble", "repulse" */
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 200,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        fps_limit: 60,
        particles_nb: 100, /* This option can be used to set the number of particles */
      });

        
      document.body.style.cssText = "overflow: hidden; pointer-events: auto; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;";
  

      setTimeout(function() {
        alertContainer.style.opacity = 1; 
        okButton.style.animation = "buttonFadeIn 5s forwards";
        okButton.style.pointerEvents = "auto";
      }, 100);
  
      okButton.addEventListener("mouseover", function() {
        okButton.style.backgroundColor = "transparent";
        okButton.style.color = "#fff";
      });
  
      okButton.addEventListener("mouseout", function() {
        okButton.style.backgroundColor = "#333";
        okButton.style.color = "#fff";
      });
  
      okButton.addEventListener("click", function() {

        okButton.style.pointerEvents = "none";
        alertContainer.style.opacity = 0; 
        blackGradient.classList.add("background-fade-out"); 
        setTimeout(function() {
          document.body.removeChild(overlay);
          document.body.style.cssText = "";
          localStorage.setItem('mortalSessionActive', true);
          overlay.remove();
          blackGradient.remove();
          particlesContainer.remove();
          main();
        }, 500);
      });
    } else {
        var savedX = localStorage.getItem("uiX");
        var savedY = localStorage.getItem("uiY");
        var savedPage = localStorage.getItem("uiPage");
        main(savedX, savedY, savedPage);
    }
  }
  
}




window.addEventListener('unload', exit);

function exit() {

	alert('exiting');


  var itemsToRemove = ['uiX', 'uiY', 'uiPage'];

  for (var item of itemsToRemove) {
    localStorage.removeItem(item);
  }

  localStorage.setItem("mortalSessionActive", false);
  localStorage.setItem('mortal-hub-cloak', false);


  window.addEventListener('error', function (e) {
    e.preventDefault();
    e.stopPropagation();
  }, false);

  var handlers = [
    'copy', 'cut', 'paste',
    'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
    'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
    'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
  ];

  function stopPropagation(e) {
    e.stopPropagation();
  }

  for (var handler of handlers) {
    window.addEventListener(handler, stopPropagation, true);
  }

  if (window.stop) {
      window.stop();
  }

  throw '';
}


function antidebug() {
  function chromeGetter() {
    let div = document.createElement('div');

    Object.defineProperty(div, "id", {
      get: () => { 
        alert("Not in Chrome? Go home."); 
        throw new Error("Exit");
      }
    });

    setTimeout(chromeGetter, 500);
  }

  chromeGetter();

  function getCallStack() {
    var stack = "#", total = 0, fn = arguments.callee;
    while ((fn = fn.caller)) {
      stack += fn.name;
      total++;
    }
    return { stack, total };
  }

  function checkCallStack() {
    var { stack, total } = getCallStack();
    if (total !== 2) {
      alert("Imagining hooking my script? ()");
      throw new Error("Exit");
    }
  }

  checkCallStack();

  if (document.createElement.toString() !== 'function createElement() { [native code] }') {
    alert("This code isn't in native JS.");
    throw new Error("Exit");
  }

  if (["localhost", "127.0.0.1", ""].includes(location.hostname)) {
    alert("Imagine trying to debug this in a different application and failing.");
    throw new Error("Exit");
  }

  try { 
    console.log(window); 
  } catch (e) { 
    alert("Nice environment, LOL."); 
    throw new Error("Exit");
  }

	showAlert("Loaded!");
  main();
}



try {
  antidebug();
} catch (error) {
  if (error.message !== "Exit") {
    throw error;
  }
}
