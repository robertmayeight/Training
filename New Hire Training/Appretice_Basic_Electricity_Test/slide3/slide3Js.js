slide3 = new XMLHttpRequest();
slide3.open("GET","slide3Svg.svg",false);
slide3.overrideMimeType("image/svg+xml");
slide3.send("");
var slide3= document.getElementById("main").appendChild(slide3.responseXML.documentElement);

var gArray = document.getElementsByTagName("g");
var tArray = document.getElementsByTagName("text");
var imageArray = document.getElementsByTagName("image");
var pathArray = document.getElementsByTagName("path");
var rectArray = document.getElementsByTagName("rect");
var objectArray=[];

for (i=0; i<gArray.length; i++) {
	objectArray.push(gArray[i]);
}
for (i=0; i<tArray.length; i++) {
	objectArray.push(tArray[i]);
}
for (i=0; i<imageArray.length; i++) {
	objectArray.push(imageArray[i]);
}
for (i=0; i<pathArray.length; i++) {
	objectArray.push(pathArray[i]);
}
for (i=0; i<rectArray.length; i++) {
	objectArray.push(rectArray[i]);
}
for (i=0; i<objectArray.length; i++) {
	objectArray[i].style.display="inline";
	groupNameSplit = objectArray[i].id.split("_");
	switch(groupNameSplit[1]) {
		case "drag":
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
	}
}

//Audio
var slideAudio = document.getElementById('music');
slideAudio.onplay = function() {
	slide3Tl.play();
};

slideAudio.onpause = function() {
	slide3Tl.pause();
};

slideAudio.onseeked = function() {
	slide3Tl.time(slideAudio.currentTime);
}

slideAudio.ontimeupdate = function() {
	slide3Tl.time(slideAudio.currentTime);
};

function playAudio(){
	slideAudio.play();
}
//End Audio

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var slide3Tl = new TimelineMax({paused:false});
slide3Tl
.to(music, 1, {opacity:1, onStart:playAudio()})
.to([battery_drag],1, {autoAlpha:1},"+=4")
// .to([box_drag],1, {autoAlpha:1})
.from(path19362, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone},"+=9")

.from(arrow1, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1},"+=6")
.to([arrowHead1_drag],.5, {autoAlpha:1})

.to([s2Text2_drag],1, {autoAlpha:1},"-=1")
.to([s2Text1_drag],1, {autoAlpha:1},"+=1")

.to([arrow1],1, {autoAlpha:0},"+=15")
.to([arrowHead1_drag],1, {autoAlpha:0},"-=1")

.from(arrow2, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.to([arrowHead2_drag],1, {autoAlpha:1})
.to([s2Text3_drag],1, {autoAlpha:1},"+=3")

.to(arrow2, 1, {autoAlpha:0},"+=27")
.to(arrowHead2_drag, 1, {autoAlpha:0},"-=1")
.to([s2Text1_drag,s2Text2_drag],1, {autoAlpha:0},"-=1")
.to([battery_drag,s2Text3_drag,path19362],1, {autoAlpha:0},"+=4")

//show battery grooup
.to([batteries_drag],1, {autoAlpha:1},"+=5.5")

.to(['#pd1_drag'],1, {autoAlpha:1},"+=3")

.from([path230951,path23095], 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})

.to([BatteryACharges_drag],1, {autoAlpha:1},"+=11")

.from([path23357], 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1},"+=24.5")

.to([BatteryACharges_drag],1, {autoAlpha:1})



