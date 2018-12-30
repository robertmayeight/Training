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



console.log(isFirefox)

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
slideAudio.src="slide5Audio.mp3"
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

// yesButton.setAttribute('onclick','slideAudio.play();');
// yesButton.setAttribute('onmouseover','this.style.cursor = "pointer";');
// noButton.setAttribute('onclick','yesClicked();');
// noButton.setAttribute('onmouseover','this.style.cursor = "pointer";');


// function yesClicked(){
// 	console.log("fired")
// 	slideAudio.play();
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
TweenMax.to([electronPath2], 0.25, {strokeDashoffset:"-=12", repeat:-1, ease:Linear.easeNone,yoyo:false})
TweenMax.to([electronPath2], 0.25, {strokeDasharray:"2,10", ease:Linear.easeNone})


slideTl


.to([batteryCover],1, {autoAlpha:0},"+=2")
// wire between pos and neg
.staggerFromTo([wire1], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:10})
.staggerFromTo([wire2], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

//Hide wire between pos and neg
.to([wire1,wire2], 1, {autoAlpha:0, delay:7})
.staggerFromTo([wire2], .001, {drawSVG:'100% 0%', immediateRender:false}, {drawSVG: '0% 0%', ease: Power0.easeNone})
.staggerFromTo([wire1], .001, {drawSVG:'100% 0%', immediateRender:false}, {drawSVG: '0% 0%', ease: Power0.easeNone})

//Move electrons right
.to(rightElectrons, 3, {x:"-=78", ease: Power0.easeNone},"+=0")
.to(holes, 1, {stroke:"red"})
.to(leftElectrons, 1, {fill:"#000000"},"-=1")

// draw wire across battery
.to([wire1,wire2], 1, {autoAlpha:1, delay:8})
.staggerFromTo([wire1], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([wire2], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.from(electronPath2, 1, {autoAlpha:0})
















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