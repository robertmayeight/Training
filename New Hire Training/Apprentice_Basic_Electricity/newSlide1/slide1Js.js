// document.getElementById('test').innerHTML = 
    // console.log(top.document.getElementById('test').contentWindow
    // document.getElementById('someOtherDiv').innerHTML;

slide1 = new XMLHttpRequest();
slide1.open("GET","slide1Svg.svg",false);
slide1.overrideMimeType("image/svg+xml");
slide1.send("");
var slide1= document.getElementById("main").appendChild(slide1.responseXML.documentElement);

var svgWindow = document.getElementById("main");
var svg = d3.select(slide1);
function redraw(){
	var width = svgWindow.clientWidth;
	var height = svgWindow.clientHeight;
	svg
	.attr("width", width)
	 .attr("height", height);
}
redraw();
window.addEventListener("resize", redraw);


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

var slide1Tl = new TimelineMax({paused:false, repeat:-1});
slide1Tl

.from(s1T1, 1, {x:-800, autoAlpha:0, ease:Back.easeOut})
.to(g2381, 2.5, {x:500, ease: Power0.easeNone},"-=.5")
.from(text2524, 1, {x:-800, ease: Power0.easeNone},"-=2")
.from(s1T2, 1, {x:-600, ease:Back.easeOut},"+=.1")
 .from(path2810, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(path2411, .01, {autoAlpha:0, ease:Back.easeOut})
 .from(s1T3, 1, {x:-600, ease:Back.easeOut},"+=.5")
 .from(sineWave1, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(s1T4, 1, {x:-600, ease:Back.easeOut})
 .from(s1Heater, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(path4846, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone},"+=.1")
 .from(path1043, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(path_fzLight, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(path10, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(path_waterValve, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(path2812, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(path25942, .5, {autoAlpha:0, immediateRender:true, ease: Power0.easeNone})
 .from(s1T5, 1, {x:-600, ease:Back.easeOut})
 .from(s1T6, .01, {autoAlpha:0, ease:Back.easeOut})
 .from(s1H1, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(text5457, .01, {autoAlpha:0, ease:Back.easeOut})
 .to([s1T1,s1T2,path2810,path2411,s1T3,sineWave1,s1T4,s1Heater,path4846,path4846,path1043,path_fzLight,path10,path_waterValve,path2812,s1T5,s1T6,s1H1,text5457,path25942,text2524], 1, {autoAlpha:0, ease:Back.easeOut},"+=5")

