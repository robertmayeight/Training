slide2 = new XMLHttpRequest();
slide2.open("GET","slide2.svg",false);
slide2.overrideMimeType("image/svg+xml");
slide2.send("");
var slide2= document.getElementById("main").appendChild(slide2.responseXML.documentElement);

var svgWindow = document.getElementById("main");
var svg = d3.select(slide2);
function redraw(){
	var width = svgWindow.clientWidth;
	var height = svgWindow.clientHeight;
	svg
	.attr("width", width)
	 .attr("height", height);
}
redraw();
window.addEventListener("resize", redraw);


//Audio
var thisTrack = document.getElementById('music');
thisTrack.onplay = function() {
	slide2Tl.play();
};

thisTrack.onpause = function() {
	slide2Tl.pause();
};

thisTrack.onseeked = function() {
	slide2Tl.time(thisTrack.currentTime);
}

thisTrack.ontimeupdate = function() {
	slide2Tl.time(thisTrack.currentTime);
};
//End Audio

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var slide2Tl = new TimelineMax({paused:true});
slide2Tl

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



