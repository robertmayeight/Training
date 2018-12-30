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
slideAudio.src="slide3Audio.mp3"
slideAudio.onloadeddata = function() {
	slideTl.play();
	playAudio();
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
}
if(isEdge == true){
	TweenLite.to(slideAudio, 1, {bottom:-490})
}
if(isChrome == true){
	TweenLite.to(slideAudio, 1, {bottom:-750})
}
function pausePlayer(){
	slideAudio.pause();
}
//End Audio




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
TweenMax.to([copperAtom_drag],1, {autoAlpha:1})
TweenMax.to([freeElectronPath2,electronPath3], 0.5, {opacity:0});
TweenMax.to([electronPath2], 0.5, {strokeDasharray:"2,12", ease:Linear.easeNone});
TweenMax.to([electronPath2], 0.5, {strokeDashoffset:"-=14", repeat:-1, ease:Linear.easeNone,yoyo:false});

var motionPath0 = MorphSVGPlugin.pathDataToBezier("#freeElectronPath2", {align:freeElectronAtom2});
var motionPath1 = MorphSVGPlugin.pathDataToBezier("#motionPath1", {align:freeElectron1});
var motionPath2 = MorphSVGPlugin.pathDataToBezier("#motionPath2", {align:freeElectron2});
var motionPath3 = MorphSVGPlugin.pathDataToBezier("#motionPath3", {align:freeElectron1});
var motionPath4 = MorphSVGPlugin.pathDataToBezier("#electronPath3", {align:freeElectronAtom2});

slideTl
.set(freeElectron1, {xPercent:-50, yPercent:-50, delay:3})
.to(freeElectron1, 2, {bezier:{values:motionPath1, type:"cubic"}, ease:Linear.easeNone})
.set(freeElectron2, {xPercent:-50, yPercent:-50})
.to(freeElectron2, 2, {bezier:{values:motionPath2, type:"cubic"}, ease:Linear.easeNone})
.to([copperAtom_drag],1, {autoAlpha:0,delay:2})
.to([magnet1_drag,magnet2_drag],1, {autoAlpha:1,delay:0})

.to([magnet1_drag],1, {x:"+=42",delay:3.5})
.to([magnet2_drag],1, {x:"-=42",delay:-1})
.to(magnet1_drag,1, {rotation:180, transformOrigin:"150 50", delay:2.5})
.to(magnet1_drag,1, {y:"-=5", delay:-1})
.to([magnet1_drag],1, {x:"-=42",delay:1})
.to([magnet2_drag],1, {x:"+=42",delay:-1})

.to([magnet1_drag,magnet2_drag],1, {autoAlpha:0,delay:1})

.to([copperAtom2_drag,positiveAtom_drag, negativeAtom_drag],1, {autoAlpha:1,delay:0})

.set(freeElectronAtom2, {xPercent:-50, yPercent:-50})
.to([freeElectronAtom2], 10, {bezier:{values:motionPath0, type:"cubic"}, ease: CustomEase.create("custom", "M0,0 C0.36,0.12 0.167,0.041 0.446,0.436 0.744,0.858 0.748,0.406 1,1")})
.to([positiveAtom_drag,negativeAtom_drag,"#negativeAtom_drag-4-9","#negativeAtom_drag-4"],1, {autoAlpha:0, delay:1})


.staggerFromTo([dividerLine], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:8})

.to(freeElectronAtom2, 2, {bezier:{values:motionPath4, type:"cubic"}})

.to([copperAtom2_drag,dividerLine], 1, {autoAlpha:0, delay:1})
.to([battery1_drag],1, {autoAlpha:1,delay:0})
.to([batteryCover],1, {autoAlpha:0, delay:2})

.to([leftElectrons, leftHoles], .5, {scaleX:1.05, scaleY:1.05, transformOrigin: "50% 50%", ease:Bounce. easeOut, delay:2})
.to([leftElectrons, leftHoles], .5, {scaleX:1, scaleY:1, transformOrigin: "50% 50%", ease: Power0.easeNone})

.to([rightElectrons, rightHoles], .5, {scaleX:1.05, scaleY:1.05, transformOrigin: "50% 50%", ease:Bounce. easeOut})
.to([rightElectrons, rightHoles], .5, {scaleX:1, scaleY:1, transformOrigin: "50% 50%", ease: Power0.easeNone})

.from(arrow1, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:1})
.to([arrowHead1_drag],.5, {autoAlpha:1})

.to([arrow1,arrowHead1_drag],.5, {autoAlpha:0, delay:2})

.to([s2Text3_drag],1, {autoAlpha:1, delay:2})
.to([s2Text3_drag],1, {autoAlpha:0, delay:2.5})

//Move electrons right
.to(rightElectrons, 3, {x:"-=134", ease: Power0.easeNone, delay:1})
.to([s2Text2_drag],1, {autoAlpha:1, delay:8})
.to([s2Text1_drag],1, {autoAlpha:1, delay:13})
.to(rightHoles, 1, {stroke:"red", delay:-1})

.to([s2Text4_drag],1, {autoAlpha:1, delay:8})
.to([s2Text4_drag],1, {autoAlpha:0, delay:2.5})

// wire between pos and neg
.staggerFromTo([wire1], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([wire2], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.from(electronPath2, 1, {autoAlpha:0, delay:1})



.to([wire1,wire2,battery1_drag,electronPath2,s2Text2_drag,s2Text1_drag], 1, {autoAlpha:0, delay:28})

.from([endText1],1, {autoAlpha:0, delay:4})

.from([endText2],1, {autoAlpha:0, delay:5.5})

.from([endText3],1, {autoAlpha:0, delay:3.1})


