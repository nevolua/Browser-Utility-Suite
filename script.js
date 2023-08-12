javascript:try {
  document.getElementById("mortalhubui").remove();
} catch (e) {
  /* */
}

function createTab(title) {
  var button = document.createElement('button'); 
  button.textContent = title; 
  button.style.borderTop = title === 'Links' ? 'none' : '1px solid #666';
  button.style.cssText = 'width:100%;background-color:rgba(22, 22, 22, 0.5);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out;text-align:center;border-top: none;border-bottom: 1px solid #222;border-left: none;border-right: none; outline: none;margin-top: none;margin-bottom:none;padding-top:none;padding-botton:none;padding-left:none; padding-right: 50px';

  button.addEventListener('click', function() {
    loadPage(title);
  });
  return button;
}

function copyToClipboard(text) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand('copy');

  document.body.removeChild(tempInput);
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


function showAlert(text, timeout) {
  const now = Date.now();
  if (now - lastAlertTime < 1000) {
    numAlerts++;
    if (numAlerts > 3) {
      alert('Please slow down. You are trying to spam the alert function.');
    }
  } else {
    numAlerts = 0;
  }
  lastAlertTime = now;


  timeout = timeout || 5000;
  alertCount++;

  const ui = document.getElementById('mortalhubui');
  const alertUI = document.createElement('div');
  alertUI.id = 'alert-ui-' + alertCount;
  alertUI.style.cssText = 'position: fixed; bottom: ' + (10 + (alertCount - 1) * 150) + 'px; right: 10px; background-color: #333; color: #fff; padding: 10px; border-radius: 5px; font-size: 14px; z-index: 99999; opacity: 0;';

  const titleUI = document.createElement('div');
  titleUI.textContent = 'Mortal Hub';
  titleUI.style.fontWeight = 'bold';
  alertUI.appendChild(titleUI);

  const contentUI = document.createElement('div');
  contentUI.textContent = text;
  contentUI.style.marginTop = '10px';
  alertUI.appendChild(contentUI);

  const buttonUI = document.createElement('button');
  buttonUI.textContent = 'OK';
  buttonUI.style.marginTop = '10px';
  buttonUI.style.backgroundColor = '#555';
  buttonUI.style.color = '#fff';
  buttonUI.style.border = 'none';
  buttonUI.style.borderRadius = '5px';
  buttonUI.style.padding = '10px';
  buttonUI.style.width = '100%';
  buttonUI.style.outline = "none";
  buttonUI.addEventListener('mouseenter', () => {
    buttonUI.style.backgroundColor = '#000';
  });
  buttonUI.addEventListener('mouseleave', () => {
    buttonUI.style.backgroundColor = '#555';
  });
  buttonUI.addEventListener('click', () => {
    alertUI.style.opacity = '0';
    alertUI.style.pointerEvents = 'none';
    setTimeout(() => {
      alertUI.remove();
    }, 500);
    alertCount--;
  });
  alertUI.appendChild(buttonUI);

  document.body.appendChild(alertUI);

  alertUI.style.transition = 'all 0.5s ease-out';
  alertUI.style.transform = 'translateX(100%)';
  setTimeout(() => {
    alertUI.style.display = 'block';
    alertUI.style.opacity = '1';
    alertUI.style.transform = 'translateX(0)';
  }, 0);
  setTimeout(() => {
    alertUI.style.opacity = '0';
    setTimeout(() => {
      alertUI.remove();
    }, 500);
    alertCount--;
  }, timeout);
}

function createButton(title, function_) {
  var content = document.getElementById("mortalhubcontent");
  var button = document.createElement('button');
  button.textContent = title;
  button.style.borderTop = title === 'Links' ? 'none' : '1px solid #666';
  button.style.cssText = 'display:block;margin:10px auto;width:50%;padding:10px 20px;background-color:rgba(22, 22, 22, 0.5);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out,text-shadow 0.2s ease-in-out;text-align:left;outline-top: none;outline:none;border-radius:10px;';
  button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    button.style.textShadow = '1px 1px 3px rgba(255, 255, 255, 0.3)';
  });
  button.addEventListener('mouseout', function() {
    button.style.backgroundColor = 'rgba(22, 22, 22, 0.5)';
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
  toggleButton.style.cssText = 'width:50%;display: inline-block; margin: 10px auto; padding: 10px 20px; font-size: 14px; font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold; color: #fff; text-align: left; outline: none; border-radius: 5px;background-color: rgba(22, 22, 22, 0.5); border: none; transition: background-color 0.2s ease-in-out;';
  toggleButton.innerHTML = title;
  var toggleStatus = false;
  var statusText = document.createElement('span');
  statusText.style.cssText = 'display: inline-block; margin-left: 80px; padding: 5px; font-size: 14px; font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold; color: #fff; background-color: rgba(22, 22, 22, 0); border-radius: 5px; transition: background-color 0.2s ease-in-out;';
  statusText.innerHTML = 'OFF';
  toggleButton.appendChild(statusText);
  toggleButton.addEventListener('click', function() {
    toggleStatus = !toggleStatus;
    toggleButton.style.backgroundColor = toggleStatus ? 'rgba(22, 22, 22, 0.5)' : 'rgba(22, 22, 22, 0.5)';
    toggleButton.style.color = toggleStatus ? '#fff' : '#fff';
    statusText.style.color = toggleStatus ? '#006400' : '#8B0000';
    statusText.innerHTML = toggleStatus ? 'ON' : 'OFF';
    onToggle(toggleStatus);
  });
  toggleButton.addEventListener('mouseover', function() {
    toggleButton.style.backgroundColor = toggleStatus ? 'rgba(22, 22, 22, 0.8)' : 'rgba(22, 22, 22, 0.8)';
  });
  toggleButton.addEventListener('mouseout', function() {
    toggleButton.style.backgroundColor = toggleStatus ? 'rgba(22, 22, 22, 0.5)' : 'rgba(22, 22, 22, 0.5)';
  });
  content.appendChild(toggleButton);
}

function createDropdown(title, options, function_) {
  var content = document.getElementById("mortalhubcontent");
  var dropdown = document.createElement('div');
  dropdown.className = 'dropdown';
  var dropdownButton = document.createElement('button');
  dropdownButton.textContent = title;
  dropdownButton.style.cssText = 'display:block;margin:10px auto;width:50%;padding:10px 20px;background-color:rgba(22, 22, 22, 0.5);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out,text-shadow 0.2s ease-in-out;text-align:left;outline-top: none;outline:none;border-radius:10px;';
  dropdown.appendChild(dropdownButton);
  var dropdownContent = document.createElement('div');
  dropdownContent.className = 'dropdown-content';
  dropdownContent.style.cssText = 'display: none; width: 50%;position: absolute; z-index: 1; background-color:rgba(22, 22, 22, 0.5); border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out,text-shadow 0.2s ease-in-out;text-align:left;outline-top: none;outline:none;border-radius:10px;margin-left:125px;max-height: 100px;overflow-y: scroll;';
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
    option.style.cssText = 'display:block;margin:0px auto;width:83%;padding:10px 20px;background-color:rgba(22, 22, 22, 0.5);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out,text-shadow 0.2s ease-in-out;text-align:left;outline-top: none;outline:none;';
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
  input.style.cssText = 'display:block;margin:10px auto;width:42%;padding:10px 20px;background-color:rgba(22, 22, 22, 0.5);border:none;color:#fff;font-size:14px;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;font-weight:bold;border-radius: 10px;transition:background-color 0.2s ease-in-out;text-align:left;outline-top: none;';

  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var text = input.value;
      input.value = "";
      if (removeafter === true) {
        input.remove();
      }
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
  text.style.cssText =
    'width:100%;padding-left:0px;background-color:rgba(22, 22, 22, 0);border:none;color:#fff;font-size:14px;font-family:\'Inter\', sans-serif;font-weight:bold;cursor:pointer;transition:background-color 0.2s ease-in-out;text-align:center;border-left: none;border-right: none;';

  content.appendChild(text);
}

function loadPage(title) {
  var content = document.getElementById("mortalhubcontent");
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  removeAllChildNodes(content);
  if (title === "Info") {
    createText("‎ ‎ ");
    createText("(NOT FOR USE IN SCHOOL ENVIRONMENTS)");
    createText("‎ ‎ ");
    createText("Public Project Made by: bznel#0");
    createText("Features: Scripts, proxies, cheats, sounds, etc.");

  }
  if (title === "JS") {
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
        document.getElementById('mortal-hub-cloak').innerHTML = 'TRUE';
      } else {
        document.getElementById('mortal-hub-cloak').innerHTML = 'FALSE';
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
  if (title === "Proxies") {
    createText("‎ ‎ ");
    createText('Holy Unblocker');
    createButton("Link 1", function() {
      window.open("https://terrariaisgreat.com/", '_blank');
    });
    createButton("Link 2", function() {
      window.open("https://effectdog.me/", '_blank');
    });

    createText("Don't actually use these, its against the schools terms");


  }
  if (title === "Cheats") {
    createText("‎ ‎ ");
    createText('Blooket');

    createButton("Anticheat Bypass (run in-game)", function() {
      showAlert("Blooket Anticheat Bypass is running.");
      function rogue·bestw(E, w) {
        const i = rogue·bestE();
        rogue·bestw = function(u, A) {
          u = u - 293;
          let Y = i[u];
          return Y;
        };
        return rogue·bestw(E, w);
      }
      (function(E, w) {
        const rogue·besth = { E: 607, w: "0x261", i: 620, u: 615, A: "0x269", m: 612, a: "0x26b", N: "0x268", v: "0x262", h: "0x265", Q: "0x264", q: 607, U: "0x26b", p: "0x274", s: 625, d: 618, B: "0x26f", P: 617, k: "0x26e", z: 624, f: 615, j: 622, F: 611, r: "0x266", e: "0x266", S: "0x260", J: "0x26a", n: 632, M: 628, I: "0x26d", D: "0x270", l: 617, g: 619, t: "0x26e", V: 620, G: "0x26b", R: "0x25b", X: 615, O: "0x262", b: "0x263", c: 609, W: 625, x: "0x26c", K: 621, H: 616, o: "0x26d", L: "0x272", Z: "0x262", T: 611, C: "0x26a", E0: 616, E1: "0x25e", E2: "0x25c", E3: 605, E4: 609, E5: 606 };
        const rogue·bestv = { E: 317 };
        const i = E();
        while (true) {
          try {
            const u = parseInt(rogue·bestw(rogue·besth.u - rogue·bestv.E, rogue·besth.m)) / 1 + -parseInt(rogue·bestw(rogue·besth.h - rogue·bestv.E, rogue·besth.q)) / 2 + -parseInt(rogue·bestw(rogue·besth.B - rogue·bestv.E, rogue·besth.k)) / 3 + parseInt(rogue·bestw(rogue·besth.r - rogue·bestv.E, rogue·besth.S)) / 4 + parseInt(rogue·bestw(rogue·besth.z - rogue·bestv.E, rogue·besth.p)) / 5 * (-parseInt(rogue·bestw(rogue·besth.g - rogue·bestv.E, rogue·besth.V)) / 6) + parseInt(rogue·bestw(rogue·besth.O - rogue·bestv.E, rogue·besth.b)) / 7 * (-parseInt(rogue·bestw(rogue·besth.K - rogue·bestv.E, rogue·besth.H)) / 8) + parseInt(rogue·bestw(rogue·besth.C - rogue·bestv.E, rogue·besth.E0)) / 9 * (parseInt(rogue·bestw(rogue·besth.m - rogue·bestv.E, rogue·besth.E4)) / 10);
            if (u === w) {
              break;
            } else {
              i.push(i.shift());
            }
          } catch (A) {
            i.push(i.shift());
          }
        }
      }(rogue·bestE, 210335));
      function rogue·bestN(E, w, i, u, A, m, a) {
        const rogue·bestQ = { E: 930 };
        return rogue·bestw(i - -rogue·bestQ.E, A);
      }
      const rogue·besti = XMLHttpRequest[rogue·bestN(-624, -631, -625, -625, -622, -620, -627)][rogue·bestN(-636, -625, -631, -627, -638, -635, -626)];
      function rogue·bestE() {
        const p = ["523400OVPvkq", "prototype", "443448NKReRN", "1025SiXKxf", "GXBbg", "35RcghHY", "suspend", "5547170XGaucQ", "710688jVFPnJ", "434864jkGnwJ", "378212KKaSNR", "open", "includes", "9nLjYWp", "30XHnsRW", "apply"];
        rogue·bestE = function() {
          return p;
        };
        return rogue·bestE();
      }
      XMLHttpRequest[rogue·bestN(-620, -620, -625, -618, -622, -620, -618)][rogue·bestN(-623, -627, -631, -625, -634, -635, -638)] = () => {
        const rogue·bestU = { E: "0x1fa", w: "0x205", i: 502, u: "0x1ff", A: "0x1fe", m: "0x1fb", a: "0x1fa", N: "0x20f", v: "0x204", h: "0x20e", Q: "0x213", q: 524, U: 528, p: 517, s: 516, d: 515, B: "0x203", P: 524, k: 518, z: 518, f: 510, j: 509, F: 517, r: 506, e: "0x1f7", S: "0x200", J: 512, n: 522, M: 512, I: "0x200", D: 510 };
        const rogue·bestq = { E: "0x4e", w: "0x152", i: "0x70", u: 285, A: 194, m: 472 };
        const w = {};
        w[rogue·bestN(-rogue·bestU.E - rogue·bestq.E, -rogue·bestU.w - rogue·bestq.w, -rogue·bestU.A - rogue·bestq.i, -rogue·bestU.u - rogue·bestq.u, -rogue·bestU.w, -rogue·bestU.m - rogue·bestq.A, -rogue·bestU.a - rogue·bestq.m)] = rogue·bestN(-rogue·bestU.N - rogue·bestq.E, -rogue·bestU.v - rogue·bestq.w, -rogue·bestU.q - rogue·bestq.i, -rogue·bestU.Q - rogue·bestq.u, -rogue·bestU.v, -rogue·bestU.U - rogue·bestq.A, -rogue·bestU.p - rogue·bestq.m);
        const i = w;
        if (!arguments[1][rogue·bestN(-rogue·bestU.s - rogue·bestq.E, -rogue·bestU.d - rogue·bestq.w, -rogue·bestU.k - rogue·bestq.i, -rogue·bestU.P - rogue·bestq.u, -rogue·bestU.d, -rogue·bestU.z - rogue·bestq.A, -rogue·bestU.f - rogue·bestq.m)](i[rogue·bestN(-rogue·bestU.j - rogue·bestq.E, -rogue·bestU.F - rogue·bestq.w, -rogue·bestU.A - rogue·bestq.i, -rogue·bestU.s - rogue·bestq.u, -rogue·bestU.F, -rogue·bestU.e - rogue·bestq.A, -rogue·bestU.S - rogue·bestq.m)])) rogue·besti[rogue·bestN(-rogue·bestU.J - rogue·bestq.E, -rogue·bestU.n - rogue·bestq.w, -rogue·bestU.B - rogue·bestq.i, -rogue·bestU.I - rogue·bestq.u, -rogue·bestU.n, -rogue·bestU.B - rogue·bestq.A, -rogue·bestU.D - rogue·bestq.m)](this, arguments);
      };


    })
  }

  if (title === "Sounds") {
    createText("‎ ‎ ");
    createButton("Vine Boom", function() {
      const audio = new Audio("https://craexz.github.io/mortal-hub/Vine-boom-sound-effect.mp3");
      audio.play();
    });

  }
  if (title === "Math") {
    createText("‎ ‎ ");
    createText("Geometry Calculator");
    createDropdown('Options', [
      "Sphere Volume",
      "Cylinder Volume",
      "Pyramid Volume",
      "Cone Volume",
      "Prism Volume",
      "Sphere Surface Area",
      "Cylinder Surface Area",
      "Cylinder Lateral Area",
      "Prism Lateral Area",
      "Prism Surface Area",
      "Triangle Area",
      "Circle Area",
      "Rectangle Area",
      "Trapezoid Area",
      "Circumference"
    ], function(selectedOption) {

      var elements = document.getElementsByClassName("geometry");
      if (elements.length > 0) {
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }

      switch (selectedOption) {
        case "Sphere Volume":
          createInput("Enter sphere radius", function(text) {
            let r = parseInt(text);
            let r3 = r * r * r;
            let volume = (((r3 * 3.14) / 3) * 4);

            copyToClipboard(volume.toString());
            showAlert("Copied Sphere Volume: " + volume.toString() + " to your clipboard.", 60000);

          }, true);
          break;
        case "Cylinder Volume":
          createInput("Enter cylinder radius", function(radius) {
            createInput("Enter cylinder height", function(height) {
              let r = parseInt(radius);
              let h = parseInt(height);

              let r2 = r * r;
              let volume = (3.14 * r2 * h);

              showAlert("Copied Cylinder Volume: " + volume.toString() + " to your clipboard.", 60000);
            }, true);
          }, true);
          break;
        case "Pyramid Volume":
          createInput("Enter pyramid height", function(height) {
            createInput("Enter pyramid base length", function(baselength) {
              createInput("Enter pyramid base width", function(basewidth) {
                var h = parseInt(height);
                var bl = parseInt(baselength);
                var bw = parseInt(basewidth);
                var ba = bw * bl;
                var volume = ((ba * h) / 3);

                showAlert("Copied Pyramid Volume: " + volume.toString() + " to your clipboard.", 60000);
              }, true);
            }, true);
          }, true);

          break;
        case "Cone Volume":
          createInput("Enter cone radius", function(radius) {
            createInput("Enter cone height", function(height) {
              var r = parseInt(radius);
              var h = parseInt(height);

              let r2 = r * r;
              let volume = (3.14 * (r2 * (h / 3)));

              showAlert("Copied Cone Volume: " + volume.toString() + " to your clipboard.", 60000);
            }, true);
          }, true);

          break;
        case "Prism Volume":
          createInput("Enter prism height", function(height) {
            createInput("Enter prism base length", function(baselength) {
              createInput("Enter prism base width", function(basewidth) {
                var h = parseInt(height);
                var l = parseInt(baselength);
                var w = parseInt(basewidth);
                var v = h * (l * w);

                showAlert("Copied Prism Volume: " + v.toString() + " to your clipboard.", 60000);
              }, true);
            }, true);
          }, true);
          break;

        case "Sphere Surface Area":
          createInput("Enter sphere radius", function(radius) {
            var r = parseInt(radius);
            let r2 = r * r;
            let sa = r2 * 3.14 * 4;
            showAlert("Copied Sphere Surface Area: " + sa.toString() + " to your clipboard.", 60000);
          }, true);
          break;
        case "Cylinder Surface Area":
          createInput("Enter cylinder radius", function(radius) {
            createInput("Enter cylinder height", function(height) {
              let r = parseInt(radius);
              let h = parseInt(height);
              let r2 = r * r;
              let fp = 2 * (3.14 * r2);
              let sp = 2 * (3.14 * r * h);
              let sa = fp + sp;

              showAlert("Copied Cylinder Surface Area: " + sa.toString() + " to your clipboard.", 60000);
            }, true);

          }, true);

          break;
        case "Cylinder Lateral Area":
          createInput("Enter cylinder radius", function(radius) {
            createInput("Enter cynlinder height", function(height) {
              var r = parseInt(radius);
              var h = parseInt(height);
              var la = (2 * (3.14 * r * h));

              showAlert("Copied Cylinder Lateral Area: " + la.toString() + " to your clipboard.", 60000);
            }, true);
          }, true);
          break;
        case "Prism Lateral Area":
          createInput("Enter prism radius", function(height) {
            createInput("Enter Prism height", function(baseperimeter) {
              let h = parseInt(height);
              let P = parseInt(baseperimeter);
              let la = P * h;

              showAlert("Copied Prism Lateral Area: " + la.toString() + " to your clipboard.", 60000);
            }, true);
          }, true);
          break;

        case "Prism Surface Area":
          createInput("Enter prism height", function(height) {
            createInput("Enter prism base perimeter", function(baseperimeter) {
              createInput("Enter prism base area", function(basearea) {
                let h = parseInt(height);
                let P = parseInt(baseperimeter);
                let b = parseInt(basearea);
                let B = b * 2;
                let la = P * h + B;

                showAlert("Copied Prism Surface Area " + la.toString() + " to your clipboard.", 60000);
              }, true);
            }, true);
          }, true);

          break;

        case "Triangle Area":
          createInput("Enter Triangle Base", function(base) {
            createInput("Enter Triangle Height", function(height) {
              let b = parseInt(base);
              let h = parseInt(height);
              let a = (b * h) / 2;

              showAlert("Copied Triangle Area: " + a.toString() + " to your clipboard.", 60000);
            }, true);
          }, true);

          break;
        case "Circle Area":
          createInput("Enter Circle Radius", function(radius) {
            let r = parseInt(radius);
            let a = 3.14 * (r * r);

            showAlert("Copied Circle Area: " + a.toString() + " to your clipboard.", 60000);
          }, true);
          break;

        case "Rectangle/Parallelogram Area":
          createInput("Enter Base", function(base) {
            createInput("Enter Height", function(height) {

              let b = parseInt(base);
              let h = parseInt(height);
              let a = b * h;

              showAlert("Copied Rectangle/Parallelogram Area: " + a.toString() + " to your clipboard.", 60000);
            }, true);
          }, true);

          break;
        case "Trapezoid Area":
          createInput("Enter height", function(height) {
            createInput("Enter first base", function(baseone) {
              createInput("Enter second base", function(basetwo) {
                let h = parseFloat(height);
                let b1 = parseFloat(baseone);
                let b2 = parseFloat(basetwo);
                let a = (b1 + b2) * h / 2;
                showAlert("Copied Trapezoid Area: " + a.toString() + " to your clipboard.", 60000);
              }, true);
            }, true);
          }, true);

          break;
        case "Circumference":
          createInput("Enter diameter", function(diameter) {
            let d = parseInt(diameter);
            let c = d * 3.14;

            showAlert("Copied Circumference: " + c.toString() + " to your clipboard.", 60000);
          }, true);
          break;
        default:

          break;
      }
    });

  }

}

function setImageSrc(logo) {
  logo.src = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAFiAwwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoo6V+kX/BPD/gk/wDts/8ABTrxz/wi/wCzB8Kb3UfCOmakNN8bfGnxc1x4a+DfgCRYLe6mg8Q+M5rS4jvtcS1u7S4h8H+FrPxD4yure7t72HQDppnvoHb010V2lr5XaA/N2vqH9mH9ij9rT9tDxW3gv9lf9nv4pfHDXLe5t7TU38DeF76+0Dw9Ldhmt28WeLrhbXwl4Qt5VV3S88Ua3pFpsR3M4RGI/wBIf/gnt/waMfsF/sxxeHPHP7WWoan+2h8XrCKK9utL8TW03hP4B6Nq5YyqmmfDTTdQnv8Axhb6ej/YWk+IviHX9B1wxtqc/grSHlhsLH99/jN+07+wV/wTa+FejW/xf+KPwF/ZS+GGg6fInhLwZ5vh7wajWNsGWS18B/DDwvaLrmuFcMn9neDvDGoTs52JbEvgrdaK22/bS/XR/r5D0W7+712v37WTR/n+fss/8GYf7evxSt9M1r9qT43fBr9lXTL23We98NaTBdfH34laRISM2eoaX4U1jwt8NHmADb5tH+LeswJmNkM5MiRfud8Iv+DLr/gnJ4SttJl+Lnxw/aj+MGsWsanWF0/xB4D+GvhfVbhQgb7Poul+Cte8R6VZMwci2XxtfXQVyf7SZlQjmP2rv+D0P9iP4atqmjfsnfAn4uftO61AzQWPibxbPb/An4bXeSF+3W1zrOm+KviLcwopMi2N/wDD3w9NcFTG11ZbhKP58fjx/wAHhf8AwVc+Js+owfCS2+AP7N2kTyD7BJ4L+GqePvE9jb5ysdxrHxa1Dxn4fvJ2GVkuYPBtgpyDDBAQDRyu65pW76/mkm9vO907JE720+euuvVXWuna3r1/tN8Cf8Gwn/BEXwHNZ3kP7GFt4q1GzTaL3x38av2gfFUN0xQo0l7oF98Ux4UuHYEtg6AsaPho40Kpt9mP/Bvp/wAEZCrof+CfnwRxIxckHxoGDEOCEceLA8agMcJGyoCFIUGOMr/mLfEL/gvv/wAFj/ia92/iX/goJ8e7Fb0gzQ+BNU0D4WW6gDaFt7f4Y6B4QhtEwOVtUhDH5n3MSx+d5P8Agql/wUylLmT/AIKBftlv5gUOD+0n8XsNs+7kf8Jdjj9Ty2TzTsls29Xff5PV9ddNNgt+Lu/PS3Sy7dLabLp/qpeI/wDg3Q/4IqeKdKk0bU/2Bfhha2j7S0/hzxZ8W/B2rALI8g2694S+Imia7HlnZW2aioeMJG2Y40RPjL4rf8Gin/BHLx9HJ/whfgL44/A6ZlxE/wAN/jl4n1yGN2cnc8Xxkt/iu0gCnYFEifKFIZHzJX+dP4U/4LE/8FVPBVyt14e/4KE/tcQyoQQupfHHx54htzgYw9n4i1jVbSRccbZIHXrwckn7f+FP/B0H/wAFrPhZcaf5v7WkPxM0ixP7zQPir8JPhF4nt9RjIbMWoa/ZeC9F8cSAllbzoPFlvdKUVVnVDIjy4ptO7vpa0pJLydmlp53/AMmklt+K7WVt3fr2+8/oT/aT/wCDIvw9cRX+r/sifts6tpNwkROn+A/2ifh7ba1bXExLsftHxS+G1zo9zYQIoSNEX4RatLJlpGmUhY2/nA/a6/4Nvv8Agrf+yDFq2va5+zRqXxs+Hel/MfiN+zjqlt8WNPmgVGkmuZ/A2nR2Xxh0a0s41BvNR174b6XpURbEeoTKrsv7s/sy/wDB7b8WdGOn6R+19+xt4K8dWzOkWoeOfgF421bwFq1pCCd92vw+8dxeNdL126K4H2WPx94Stmb5lljxtb+mX9jv/g5F/wCCSv7ZNxo/hzR/2ibX4I/EbWHSKH4cftH6TJ8K9Q+1MVENvaeNb2fUPhNq11cTDy7Ox0n4gXmrTOFA09d8Zd2etne9tG103fRrzeqWtuzSvro9E3vfsld663tpre/Xp/j5XVpdWNzcWd7bXFnd2dxNa3drdQSW9za3VvIYri2uYJVSWC4glVo5oZVWSKRWR1VgRVfjjn6j0r/a9/bl/wCCRn/BPP8A4KT+HJ5/2h/gN4M8Q+LNW0+GbQvjh4EEfg74t6cktsv9m6lp/wARPC5tr3xDZQwOktlpXiw+KPCcyeU82h3aiPH8LX/BTT/g0K/ai/Zt0/Xfir+wl4r1L9rn4X2Jur+9+Fmo6bpfh79oTwrpkayS40y0t7uDw38X4raGPEh8K2/hnxlfXE0NppHw51TZLdkT9Fovx006O7+ezVkPpdf5Pp0frtvZN2P456K09a0XWPDmr6r4f8Q6VqWha9oWpX2ja3omsWN1pmr6NrGl3Mllqelarpt7FBeadqenXkM1pf2F5DDd2d1FLb3MMU0boMygAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKntba5vbiCzs7ea6u7qaK2tra2iknuLi4nkWKGCCGJXkmmmldI4oo0Z5JGREUswB1fDPhrxJ418RaB4O8H6BrPirxZ4p1nTPDnhjwx4c0u91vxB4i8Qa3fQaZo2h6Ho+mwXOo6tq+raldW1hpum2FvcXl9e3EFrawyzyxxt/p1/wDBAP8A4NsPBf7DNh4H/a8/bT0XSvHP7aMltFr/AIN+Hc8mm674G/ZinuVV7E2c9tJeaX4x+Mllb4fUfGUE914e8GajcS6b4C+23ukRfEHW5crNJK7ey6WW7k+i8929Fdh/X/BPyj/4Irf8GmerfEmx8NftJ/8ABU3RfEPgzwbe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FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z";
}

function main() {
  document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.code === 'ShiftRight') {
      document.getElementById('mortalhubui').style.display = document.getElementById('mortalhubui').style.display === 'none' ? 'block' : 'none';
    }
  });

  var ui = document.createElement('div');
  ui.setAttribute('contenteditable', false);
  ui.id = "mortalhubui";
  ui.style.cssText = 'width: 600px; height: 300px; background-color: rgba(33, 33, 33, 0.5); border-radius: 10px; border: 1px solid rgb(102, 102, 102); position: fixed; top: 271px; left: 430px; transform: translate(-50%, -50%); font-family: Arial, sans-serif; z-index: 99999; border-right: none; border-left: none; user-select: none;';

  var tabs = document.createElement('div');
  tabs.style.cssText = 'width:150px;height:300px;background-color:rgba(0,0,0, 1);border-radius:10px;position:absolute;top:50%;left:0;transform:translateY(-50%); font-size: 0; text-align: center;';

  var logoContainer = document.createElement('div');
  logoContainer.style.cssText = 'display: flex; justify-content: left; align-items: left; height: 70px; background-color: black; border-top: none; padding-left: 10px;pointer-events: none;';
  tabs.appendChild(logoContainer);

  var logo = document.createElement('img');
  
  setImageSrc(logo);

  logoContainer.appendChild(logo);

  var tabList = [
    createTab('Info'),
    createTab('JS'),
    createTab('Proxies'),
    createTab('Sounds'),
    createTab('Cheats'),
    createTab('Math')
  ];

  for (var i = 0; i < tabList.length; i++) {
    tabs.appendChild(tabList[i])
  };


  var content = document.createElement('div');
  content.id = "mortalhubcontent";
  content.style.cssText = 'width:500px;height:300px;background-color:#333;border-radius:10px;border:1px solid black;position:absolute;top:50%;right:0;transform:translateY(-50%);overflow-y:scroll;max-height: 300px;overflow-y: auto;text-align:center;border-top:none;::-webkit-scrollbar { width: 0px; background-color: transparent; }';
  content.style.borderTopRightRadius = '0';


  var topBar = document.createElement('div');
  topBar.style.cssText = 'height: 20px; background-color: black; position: absolute; top: -17px; left: 0; right: 0; cursor: move; border-top-left-radius: 10px; border-top-right-radius: 10px;';

  ui.appendChild(topBar);

  topBar.addEventListener('mousedown', function(event) {
    initialX = event.clientX - ui.offsetLeft;
    initialY = event.clientY - ui.offsetTop;

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', release);
  });

  function move(event) {
    ui.style.left = (event.clientX - initialX) + 'px';
    ui.style.top = (event.clientY - initialY) + 'px';
  }
  
  function release(event) {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', release);
  }

  ui.appendChild(tabs);
  ui.appendChild(content);

  ui.style.opacity = 0;
  document.body.appendChild(ui);
  fadeIn(ui, 500);


  var initialX, initialY;

  alertCount = 0;
  lastAlertTime = 0;
  numAlerts = 0;

  var cloakEnabled = document.createElement('h1');
  cloakEnabled.id = 'mortal-hub-cloak';
  cloakEnabled.innerHTML = "FALSE";
  cloakEnabled.style.display = 'none';

  document.body.appendChild(cloakEnabled);

  var fakewindow = window.open("https://google.com", "", "width=1,height=1, top=2000,left=2000");
  function monitoringLoop() {
    if (document.hasFocus) {
      if (document.getElementById('mortal-hub-cloak').innerHTML === "TRUE") {
        fakewindow.focus();
      }

    }
    setTimeout(() => {
      monitoringLoop();
    }, "50")

  }

  monitoringLoop();

}

function startUp() {
 
  var overlay = document.createElement("div");
  overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); backdrop-filter: blur(5px); z-index: 9999;";
  var alertBox = document.createElement("div");
  alertBox.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 50%; max-width: 600px; padding: 20px; background-color: #212121; color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); opacity: 0; transition: opacity 0.5s; font-family: 'Poppins', sans-serif;";
  var titleText = document.createElement("h1");
  titleText.style.cssText = "font-size: 36px; font-weight: 800; text-align: center; margin-bottom: 20px; letter-spacing: 2px; font-family: 'Space Grotesk', sans-serif;background-color:rgba(0,0,0,0);border:none;";
  titleText.innerHTML = "Disclaimer";
  var messageText = document.createElement("p");
  messageText.style.cssText = "font-size: 16px; text-align: center; margin-bottom: 20px; line-height: 1.5; font-family: 'Montserrat', sans-serif;";
  messageText.innerHTML = "This is public software that has been developed to test the vulnerabilities of computer monitoring software within a personal environment. This script is not intended for use on any school device or network. The developer claims no responsibility for any consequences that may arise from doing so.<br><br>By using this software, you agree to abide by all applicable terms and rules.";
  var okButton = document.createElement("button");
  okButton.style.cssText = "display: block; margin: auto; padding: 10px 20px; background-color: #333; color: #fff; border: 2px solid #333; border-radius: 30px; font-size: 16px; font-weight: 500; letter-spacing: 1px; font-family: 'Montserrat', sans-serif; cursor: pointer; transition: all 0.3s ease;width: 100%;";
  okButton.innerHTML = "I UNDERSTAND AND AGREE";

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

      main();

    }, 500);
  })
}

function exit() {
  var i;

  window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

  var handlers = [
      'copy', 'cut', 'paste',
      'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
      'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
      'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
  ];

  function stopPropagation (e) {
      e.stopPropagation();
  }
  for (i=0; i < handlers.length; i++) {
      window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
  }

  if (window.stop) {
      window.stop();
  }

  throw '';
}


function chromeGetter() {
    let div = document.createElement('div');

    Object.defineProperty(div, "id", {
      get: () => { 
        alert("not in chrome? go home."); 
        exit()
      }
    });

    
    setTimeout(() => {
      chromeGetter();
    }, "500")

}

chromeGetter();

function getCallStack() {
  var stack = "#", total = 0, fn = arguments.callee;
  while ( (fn = fn.caller) ) {
      stack = stack + "" +fn.name;
      total++
  }
  return stack, total
}

function call1() {
  var stack, total = getCallStack();
  if (total !== 4) {
    exit()
  } 
}

function call2() {
  call1();
}

function call3() {
  call2();
}

function call4() {
  call3();
}

call4();


if (document.createElement.toString() !== 'function createElement() { [native code] }') {
  alert("bro isn't in native js"); 
  exit() 
}

if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "") {
  alert("imagine trying to debug this in a diff application and failing"); 
  exit() 
}

try { 
 console.log(window); 
} catch(e){ 
  alert("Nice environment lol"); 
  exit() 
}

setInterval(function(){
  eval("debugger");
}, 50);

startUp();


 
