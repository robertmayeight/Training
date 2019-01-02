// slide = new XMLHttpRequest();
// slide.open("GET","slide4Svg.svg",false);
// slide.overrideMimeType("image/svg+xml");
// slide.send("");
// var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);




var svgWindow = document.getElementById("main");
var svg = d3.select(svgContent);
function redraw(){
	var width = svgWindow.clientWidth;
	var height = svgWindow.clientHeight;
	svg
	.attr("width", width)
	 .attr("height", height);
}
redraw();
window.addEventListener("resize", redraw);

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 68
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


var gArray = document.getElementsByTagName("g");
var tArray = document.getElementsByTagName("text");
var imageArray = document.getElementsByTagName("image");
var pathArray = document.getElementsByTagName("path");
var rectArray = document.getElementsByTagName("rect");
var objectArray=[];

var slideTl = new TimelineMax({paused:true});

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
slideAudio.src="slide4Audio.mp3"
slideAudio.onloadeddata = function() {
	
};

slideAudio.onplay = function() {
	slideTl.play();
};

slideAudio.onpause = function() {
	slideTl.pause();
};

slideAudio.onseeked = function() {
	slideTl.time(slideAudio.currentTime);
}

slideAudio.ontimeupdate = function() {
	slideTl.time(slideAudio.currentTime);
};

function playAudio(){
	slideAudio.play();
}

if(isFirefox == true){
	TweenLite.to(slideAudio, 1, {bottom:0})
	window.removeEventListener("resize", redraw);
}
if(isEdge == true){
	TweenLite.to(slideAudio, 1, {bottom:-490})
	window.removeEventListener("resize", redraw);
}
if(isChrome == true){
	TweenLite.to(slideAudio, 1, {bottom:-750})
	window.removeEventListener("resize", redraw);
}
if(isOpera == true){
	TweenLite.to(slideAudio, 1, {bottom:-750})
	window.removeEventListener("resize", redraw);
}
if(isSafari == true){
	TweenLite.to(slideAudio, 1, {bottom:-750})
	window.removeEventListener("resize", redraw);
}

function pausePlayer(){
	slideAudio.pause();
}
//End Audio

// Start Meter Numbers
var onesArray=[oneA,oneB,oneC,oneD,oneE,oneF,oneG];
var tensArray=[tenA,tenB,tenC,tenD,tenE,tenF,tenG];
var hunsArray=[hunA,hunB,hunC,hunD,hunE,hunF,hunG];
var thousArray=[thouA,thouB,thouC,thouD,thouE,thouF,thouG];

var onesZeroArray=[oneA,oneB,oneC,oneD,oneE,oneF];
var onesOneArray=[oneB,oneC];
var onesTwoArray=[oneA,oneB,oneD,oneE,oneG];
var onesThreeArray=[oneA,oneB,oneC,oneD,oneG];
var onesFourArray=[oneB,oneC,oneF,oneG];
var onesFiveArray=[oneA,oneC,oneD,oneF,oneG];
var onesSixArray=[oneA,oneC,oneD,oneE,oneF,oneG];
var onesSevenArray=[oneA,oneB,oneC];
var onesEightArray=[oneA,oneB,oneC,oneD,oneE,oneF,oneG];
var onesNineArray=[oneA,oneB,oneC,oneD,oneF,oneG];

var tensZeroArray=[tenA,tenB,tenC,tenD,tenE,tenF];
var tensOneArray=[tenB,tenC];
var tensTwoArray=[tenA,tenB,tenD,tenE,tenG];
var tensThreeArray=[tenA,tenB,tenC,tenD,tenG];
var tensFourArray=[tenB,tenC,tenF,tenG];
var tensFiveArray=[tenA,tenC,tenD,tenF,tenG];
var tensSixArray=[tenA,tenC,tenD,tenE,tenF,tenG];
var tensSevenArray=[tenA,tenB,tenC];
var tensEightArray=[tenA,tenB,tenC,tenD,tenE,tenF,tenG];
var tensNineArray=[tenA,tenB,tenC,tenD,tenF,tenG];

var hunsZeroArray=[hunA,hunB,hunC,hunD,hunE,hunF];
var hunsOneArray=[hunB,hunC];
var hunsTwoArray=[hunA,hunB,hunD,hunE,hunG];
var hunsThreeArray=[hunA,hunB,hunC,hunD,hunG];
var hunsFourArray=[hunB,hunC,hunF,hunG];
var hunsFiveArray=[hunA,hunC,hunD,hunF,hunG];
var hunsSixArray=[hunA,hunC,hunD,hunE,hunF,hunG];
var hunsSevenArray=[hunA,hunB,hunC];
var hunsEightArray=[hunA,hunB,hunC,hunD,hunE,hunF,hunG];
var hunsNineArray=[hunA,hunB,hunC,hunD,hunF,hunG];

var thousZeroArray=[thouA,thouB,thouC,thouD,thouE,thouF];
var thousOneArray=[thouB,thouC];
var thousTwoArray=[thouA,thouB,thouD,thouE,thouG];
var thousThreeArray=[thouA,thouB,thouC,thouD,thouG];
var thousFourArray=[thouB,thouC,thouF,thouG];
var thousFiveArray=[thouA,thouC,thouD,thouF,thouG];
var thousSixArray=[thouA,thouC,thouD,thouE,thouF,thouG];
var thousSevenArray=[thouA,thouB,thouC];
var thousEightArray=[thouA,thouB,thouC,thouD,thouE,thouF,thouG];
var thousNineArray=[thouA,thouB,thouC,thouD,thouF,thouG];
//End Meter Numbers

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
TweenMax.to([electronPath2], 0, {strokeDashoffset:"-=12", repeat:-1, ease:Linear.easeNone,yoyo:false})
TweenMax.to([electronPath2], 0, {strokeDasharray:"2,10", ease:Linear.easeNone})
TweenMax.to([electronPath2], 0, {strokeWidth:0})
// TweenLite.to("#path8300", 1, {morphSVG:"#path5632"})

// TweenMax.to([slideAudio], 0.25, {hdi})

slideTl


.staggerFromTo([path8300], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:2})
.staggerFromTo([path5714,path5718], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.from([leftElectrons, leftHoles,rightHoles], 1, {autoAlpha:0})
.staggerFromTo([lightBulb], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:.5})
.staggerFromTo([path5728], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([path5734], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})

.staggerFromTo([wire1,wire2], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:3.5})
.staggerFromTo([path5465,path5467,path5469,path5471,path5473], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:1})
.to([electronPath2], 0.5, {strokeDasharray:"2,12", ease:Linear.easeNone, strokeWidth:8, delay:-.5})
.to([electronPath2], 0.5, {strokeDashoffset:"-=14", repeat:15, ease:Linear.easeNone,yoyo:false})
.to([leftElectrons, leftHoles,rightHoles,electronPath2], 1, {autoAlpha:0})


//Morph to diagram style

.to(path8300, 1, {morphSVG:"#batterySymbol_drag"})
.to(path5714, 1, {morphSVG:"#path5712_drag", delay:-1})
.to(path5718, 1, {morphSVG:"#path9233-0-2_drag", delay:-1})
.to([twelveV_drag], 1, {autoAlpha:1, delay:-1})

.to(lightBulb, 1, {morphSVG:"#lightBulbFilament_drag", delay:-1})
.to([path5728, path5734,path5465,path5467,path5469,path5471,path5473], 1 ,{autoAlpha:0, delay:-1})

.to(wire1, 1, {morphSVG:"#path5745_drag", delay:-1})
.to(wire2, 1, {morphSVG:"#path5747_drag", delay:-1})



.to([dots_drag], 0, {autoAlpha:1, delay:0})
.to(pole_drag, 1, {autoAlpha:1, delay:0})
.to([path5882_drag], 0, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:5, delay:6})
.to([path5882_drag], 0, {strokeDashoffset:"-=10", ease:Linear.easeNone,yoyo:false})
.to([lightBulbFilament2_drag], 0, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:5, delay:0})
.to([lightBulbFilament2_drag], 0, {strokeDashoffset:"-=10", ease:Linear.easeNone,yoyo:false})
.to([path5899_drag], 0, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:5, delay:0})
.to([path5899_drag], 0, {strokeDashoffset:"-=10", ease:Linear.easeNone,yoyo:false})
.to([path5882_drag,lightBulbFilament2_drag,path5899_drag], 0, {stroke:"red", delay:0})
.to([feExtendingFromBattery_drag], 0, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:5, delay:0})
.to([feExtendingFromBattery_drag], 0, {strokeDashoffset:"-=10", ease:Linear.easeNone,yoyo:false})

.to([feExtendingFromBattery_drag], 1, {autoAlpha:1, delay:17})
.to([path5882_drag,lightBulbFilament2_drag,path5899_drag], 1, {autoAlpha:1, delay:20})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], 0, {fill:"black"})
.from(multimeterGroup_drag, 1, {autoAlpha:0, delay:14})
.to(blackLead, 1.5, {morphSVG:"#blackLeadPos1_drag",delay:2})
.to(redLead, 1.5, {morphSVG:"#redLeadPos1_drag"})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})


.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:5})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(redLead, 1.5, {morphSVG:"#redLeadPos2_drag",delay:-.5})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:10})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(redLead, 1.5, {morphSVG:"#redLeadPos3_drag",delay:-.5})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:3})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(redLead, 1.5, {morphSVG:"#redLeadPos4_drag",delay:-.5})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})

.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:2})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})
.to(blackLead, 1.5, {morphSVG:"#blackLeadPos2_drag",delay:-.5})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {fill:"#b3b3b3", delay:0})
.to([thousOneArray,hunsTwoArray,tensZeroArray,onesZeroArray], .5, {fill:"black"})












// TweenMax.to([path5745_drag], .5, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:3, delay:0})
// TweenMax.to([path5745_drag], .5, {strokeDashoffset:"-=10", repeat:-1, ease:Linear.easeNone,yoyo:false})


// TweenMax.to([pole1Copy_drag], .5, {strokeDasharray:"2,8", ease:Linear.easeNone, strokeWidth:3, delay:0})
// TweenMax.to([pole1Copy_drag], .5, {strokeDashoffset:"-=10", repeat:-1, ease:Linear.easeNone,yoyo:false})















// .to("#path9233-0", 1, {morphSVG:"#path9233-0-2"})


// .to([batteryCover_drag],1, {autoAlpha:0})
// // wire between pos and neg
// .staggerFromTo([wire1], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:10})
// .staggerFromTo([wire2], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

// //Hide wire between pos and neg
// .to([wire1,wire2], 1, {autoAlpha:0, delay:7})
// .staggerFromTo([wire2], .001, {drawSVG:'100% 0%', immediateRender:false}, {drawSVG: '0% 0%', ease: Power0.easeNone})
// .staggerFromTo([wire1], .001, {drawSVG:'100% 0%', immediateRender:false}, {drawSVG: '0% 0%', ease: Power0.easeNone})

// //Move electrons right


// // draw wire across battery
// .to([wire1,wire2], 1, {autoAlpha:1, delay:8})
// .staggerFromTo([wire1], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .staggerFromTo([wire2], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

















// var motionPath1 = MorphSVGPlugin.pathDataToBezier("#motionPath1", {align:freeElectron1});
// var motionPath2 = MorphSVGPlugin.pathDataToBezier("#motionPath2", {align:freeElectron2});
// var motionPath3 = MorphSVGPlugin.pathDataToBezier("#motionPath3", {align:freeElectron1});
// slideTl
// .set(freeElectron1, {xPercent:-50, yPercent:-50})
// .to(freeElectron1, 4, {bezier:{values:motionPath1, type:"cubic"}, ease:Linear.easeNone})

// .set(freeElectron2, {xPercent:-50, yPercent:-50})
// .to(freeElectron2, 4, {bezier:{values:motionPath2, type:"cubic"}, ease:Linear.easeNone})

// .from(dividerLine1, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1},"+=1")

// .set(freeElectron1, {xPercent:-50, yPercent:-50})
// .to(freeElectron1, 2, {bezier:{values:motionPath3, type:"cubic"}, ease:Linear.easeNone})

// .to([copperAtom_drag],1, {autoAlpha:0},"+=1")
// .to([battery_drag],1, {autoAlpha:1},"-=1")

// .from(arrow1, 2.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1},"+=5")
// .to([arrowHead1_drag],.5, {autoAlpha:1})

// .to([s2Text2_drag],1, {autoAlpha:1})
// .to([s2Text1_drag],1, {autoAlpha:1},"+=2.5")

// .to([arrow1],1, {autoAlpha:0},"+=5")
// .to([arrowHead1_drag],1, {autoAlpha:0},"-=1")

// .from(arrow2, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone},"+=2")
// .to([arrowHead2_drag],1, {autoAlpha:1})
// .to([s2Text3_drag],1, {autoAlpha:1},"+=4")

// .to([s2Text3_drag,arrow2,arrowHead2_drag,s2Text1_drag,s2Text2_drag,s2Text3_drag,battery_drag],1, {autoAlpha:0},"+=33")

// .to([batteries_drag],1, {autoAlpha:1})

// .to(['#pd1_drag'],1, {autoAlpha:1},"+=3")

// .from([path230951,path23095], 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})

// .to([BatteryACharges_drag],1, {autoAlpha:1},"+=11")

// .to([BatteryACharges_drag,path230951,path23095,'#pd1_drag'],1, {autoAlpha:0},"+=8")

// .from([path23357], 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1},"+=7")
// .from([yesButton,noButton], 1, {autoAlpha:0, onComplete:pausePlayer},"+=.5")
// .to([yesButton,noButton,path23357], 1, {autoAlpha:0})

// .from(wire, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone},"+=13")
// .from(path5359, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone},"+=4")
// .to([yesButton,noButton], 1, {autoAlpha:1, onComplete:pausePlayer})


// .to([yesButton,noButton,path23357,path23357,path5359,wire,batteries_drag,batteryALabel,batterBLabel], 1, {autoAlpha:0},"+=5.5")

// .from([endText1],1, {autoAlpha:0},"+=3")

// .from([endText2],1, {autoAlpha:0},"+=8")

// .from([endText3],1, {autoAlpha:0},"+=7")