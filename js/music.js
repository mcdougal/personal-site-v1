
window.onload = function() {

    var hasFlash = false;
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (fo) {
            hasFlash = true;
        }
    }
    catch(e) {
        if (navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) {
            hasFlash = true;
        }
    }

    if (!hasFlash) {
        document.getElementById('flash').className = "show_flash";
    }

}
