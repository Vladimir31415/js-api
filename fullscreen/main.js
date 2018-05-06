document.onwebkitfullscreenchange = event => console.log(event)

function launchFullscreen(element) {
    const method = element.requestFullscreen ||
        element.mozRequestFullScreen ||
        element.webkitRequestFullscreen ||
        element.msRequestFullscreen; 
    method.call(element);
}

function stopFullscreen() {
  const method = document.exitFullscreen ||
      document.mozCancelFullScreen || 
      document.webkitExitFullscreen;
  method.call(document);
}

function enterFullscreen() {
    launchFullscreen(document.documentElement);
}

function exitFullscreen() {
    stopFullscreen();
}

let fsmode = false;
function toggleImageFullscreen() {
    if(fsmode) {
      exitFullscreen();
    } else {
      launchFullscreen(document.querySelector('img'));
    }
    fsmode = !fsmode;
}