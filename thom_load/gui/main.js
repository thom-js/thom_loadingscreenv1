var play = false;
var vid = document.getElementById("loading");
vid.volume = 0.1;
window.addEventListener('keyup', function(e)
{
    if (e.which == 69){
        vid.volume = Math.min(vid.volume + 0.1,1);
    } else if(e.which == 65){
        vid.volume = Math.max(vid.volume - 0.1,0);
    };
});

var audio = document.querySelector('audio');

if (video) {

    window.addEventListener('keydown', function (event) {

            var key = event.which || event.keyCode;

            if (key === 32) { // spacebar

                event.preventDefault();

                audio.paused ? audio.play() : audio.pause();

    }

});
}



/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });