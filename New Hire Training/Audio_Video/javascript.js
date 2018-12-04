var thisTrack = document.getElementById('music');
thisTrack.loop = true;

var timeline1 = new TimelineMax({
	paused: true
});

var itemOne = document.querySelector('.item.one');

timeline1
	.to(itemOne, 14, {x: 250, ease: Power0.easeNone})
;

// when the music is played, play the animation
thisTrack.onplay = function() {
	timeline1.play();
};

// when the music is paused, pause the animation
thisTrack.onpause = function() {
	timeline1.pause();
};

// when the progress bar on the audio element is jumped to a different
// point manually (or automatically), adjust the timeline to match
thisTrack.onseeked = function() {
	timeline1.time(thisTrack.currentTime);
}

// while the audio is being played, make sure the timelines are in sync 
// with the audio (it otherwise appears to go out of sync if, for 
// example, the tab is not in focus)
thisTrack.ontimeupdate = function() {
	timeline1.time(thisTrack.currentTime);
};
