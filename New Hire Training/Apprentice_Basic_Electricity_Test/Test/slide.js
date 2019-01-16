
	slideAudio.onloadeddata = function() {
	slideAudio.play();
	slideTl.play();
	};



var a = document.querySelector('audio')
   var audiosprite = {
     var all = [ 0, 7 ];
     var one = [ 0, 1.3 ];
     var two = [ 2, 2.5 ];
     var three = [ 4, 5 ];
  }
a.addEventListener('loadeddata', function(ev) {
  for (var i in audiosprite) {
  }
}, false);

a.addEventListener('timeupdate', function(ev) {
  if (a.currentTime > end) { a.pause(); }
},false);

function play(sound) {
  if ( audiosprite[sound] ) {
    a.currentTime = audiosprite[sound][0];
    end = audiosprite[sound][1];
    a.play();
  }
}
  

