slide = new XMLHttpRequest();
slide.open("GET","slide.svg",false);
slide.overrideMimeType("image/svg+xml");
slide.send("");
var slide= document.getElementById("main").appendChild(slide.responseXML.documentElement);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//Browser Adjustments
var slideAudio = document.getElementById('music');
slideAudio.src="slide.mp3"

var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isBlink = (isChrome || isOpera) && !!window.CSS;

if(isFirefox == true){
	TweenLite.to(slideAudio, 0, {bottom:0})
	slideAudio.onloadeddata = function() {
	slideAudio.play();
	slideTl.play();
	};
}
if(isEdge == true){
	TweenLite.to(slideAudio, 0, {bottom:-490})
	slideAudio.onloadeddata = function() {
	slideAudio.play();
	slideTl.play();
	};
}
if(isChrome == true){
	TweenLite.to(slideAudio, 0, {bottom:-750})
}
if(isOpera == true){
	TweenLite.to(slideAudio, 0, {bottom:-750})
	slideAudio.onloadeddata = function() {
	slideAudio.play();
	slideTl.play();
	};
}
if(isSafari == true){
	TweenLite.to(slideAudio, 0, {bottom:-750})
	slideAudio.onloadeddata = function() {
	slideAudio.play();
	slideTl.play();
	};
}
//End Browser Adjustments

//Audio
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

function pausePlayer(){
	slideAudio.pause();
}
//End Audio

var slideTl = new TimelineMax({paused:true});

// Start Meter Numbers
var onesArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneE_hide,oneF_hide,oneG_hide];
var tensArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenE_hide,tenF_hide,tenG_hide];
var hunsArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunE_hide,hunF_hide,hunG_hide];
var thousArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouE_hide,thouF_hide,thouG_hide];

var onesZeroArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneE_hide,oneF_hide];
var onesOneArray=[oneB_hide,oneC_hide];
var onesTwoArray=[oneA_hide,oneB_hide,oneD_hide,oneE_hide,oneG_hide];
var onesThreeArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneG_hide];
var onesFourArray=[oneB_hide,oneC_hide,oneF_hide,oneG_hide];
var onesFiveArray=[oneA_hide,oneC_hide,oneD_hide,oneF_hide,oneG_hide];
var onesSixArray=[oneA_hide,oneC_hide,oneD_hide,oneE_hide,oneF_hide,oneG_hide];
var onesSevenArray=[oneA_hide,oneB_hide,oneC_hide];
var onesEightArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneE_hide,oneF_hide,oneG_hide];
var onesNineArray=[oneA_hide,oneB_hide,oneC_hide,oneD_hide,oneF_hide,oneG_hide];

var tensZeroArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenE_hide,tenF_hide];
var tensOneArray=[tenB_hide,tenC_hide];
var tensTwoArray=[tenA_hide,tenB_hide,tenD_hide,tenE_hide,tenG_hide];
var tensThreeArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenG_hide];
var tensFourArray=[tenB_hide,tenC_hide,tenF_hide,tenG_hide];
var tensFiveArray=[tenA_hide,tenC_hide,tenD_hide,tenF_hide,tenG_hide];
var tensSixArray=[tenA_hide,tenC_hide,tenD_hide,tenE_hide,tenF_hide,tenG_hide];
var tensSevenArray=[tenA_hide,tenB_hide,tenC_hide];
var tensEightArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenE_hide,tenF_hide,tenG_hide];
var tensNineArray=[tenA_hide,tenB_hide,tenC_hide,tenD_hide,tenF_hide,tenG_hide];

var hunsZeroArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunE_hide,hunF_hide];
var hunsOneArray=[hunB_hide,hunC_hide];
var hunsTwoArray=[hunA_hide,hunB_hide,hunD_hide,hunE_hide,hunG_hide];
var hunsThreeArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunG_hide];
var hunsFourArray=[hunB_hide,hunC_hide,hunF_hide,hunG_hide];
var hunsFiveArray=[hunA_hide,hunC_hide,hunD_hide,hunF_hide,hunG_hide];
var hunsSixArray=[hunA_hide,hunC_hide,hunD_hide,hunE_hide,hunF_hide,hunG_hide];
var hunsSevenArray=[hunA_hide,hunB_hide,hunC_hide];
var hunsEightArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunE_hide,hunF_hide,hunG_hide];
var hunsNineArray=[hunA_hide,hunB_hide,hunC_hide,hunD_hide,hunF_hide,hunG_hide];

var thousZeroArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouE_hide,thouF_hide];
var thousOneArray=[thouB_hide,thouC_hide];
var thousTwoArray=[thouA_hide,thouB_hide,thouD_hide,thouE_hide,thouG_hide];
var thousThreeArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouG_hide];
var thousFourArray=[thouB_hide,thouC_hide,thouF_hide,thouG_hide];
var thousFiveArray=[thouA_hide,thouC_hide,thouD_hide,thouF_hide,thouG_hide];
var thousSixArray=[thouA_hide,thouC_hide,thouD_hide,thouE_hide,thouF_hide,thouG_hide];
var thousSevenArray=[thouA_hide,thouB_hide,thouC_hide];
var thousEightArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouE_hide,thouF_hide,thouG_hide];
var thousNineArray=[thouA_hide,thouB_hide,thouC_hide,thouD_hide,thouF_hide,thouG_hide];
//End Meter Numbers

//Hide Code
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
		case "hide":
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
		break;
		case "current":
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
		break;
	}
}
//End Hide Code

//Make duplicate black copy
var diagram1AllPaths = [];
var groupPaths = document.getElementById("diagram1_hide").getElementsByTagName("path");
var groupPathsLength = groupPaths.length;
for(i=0; i<groupPathsLength; i++){
	pathLastName = groupPaths[i].id.split("_")
	if(groupPaths[i].parentNode.id == "diagram1_hide"){
		var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','black');
		path.setAttribute('fill','none');
		path.setAttribute('id',groupPaths[i].id + 'copy');
		path.style['stroke-width']=1;
		path.style['stroke-linecap']="round";
		path.setAttribute("d", groupPaths[i].getAttribute("d"));
		diagram1_hide.appendChild(path);
		if(pathLastName[1] == "current"){
			path.setAttribute('opacity','0');
		}
		if(pathLastName[1] == "noCurrent"){
			path.setAttribute('opacity','0');
			// path.setAttribute('stroke','red');
			console.log("fired")
		}
	}
	diagram1AllPaths.push(path)
}
//End make duplicate black copy



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
TweenMax.to([s1,s1copy],0,{rotation:20, transformOrigin:"0 20"})
TweenMax.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
slideTl
.to(headingText,1,{autoAlpha:0, delay:1})
.to(diagram1_hide,1,{autoAlpha:1, delay:0})

//Trace entire diagram then hide
.to([break1copy,gnd1copy,gnd2copy,gnd3copy,s1copy,r1copy,gnd3copy,pos1copy,pos2copy], 0, {stroke:"red", strokeWidth:3})
.staggerFromTo([break1copy], .25, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([gnd1copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([s1copy], .25, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([gnd2copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([gnd3copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([r1copy], .25, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([pos2copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})
.staggerFromTo([pos1copy], .75, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone, delay:0})


// Characteristics of series circuit
.to(diagram1_hide, 1 , {autoAlpha:0, delay:0})
.to([gnd1copy,gnd2copy,gnd3copy,s1copy,r1copy,gnd3copy,pos1copy,pos2copy], 0, {autoAlpha:0, delay:0})
.to([firstText], 1 , {autoAlpha:1, delay:-1})
.to([firstText1_hide], 1 , {autoAlpha:1, delay:1})
.to(firstText2_hide, 1 , {autoAlpha:1, delay:1.5})
.to(firstText3_hide, 1 , {autoAlpha:1, delay:2})
.to(firstText4_hide, 1 , {autoAlpha:1, delay:3})

// Move and scale Characteristics to to left
.to(firstText, 2 ,{scaleX:.25, scaleY:.25, x:450, y:-90, transformOrigin:"50 50", delay:3})
.to(firstText2_hide, 0, {fill:"red"})
.to(firstTextBorder_hide, 1, {autoAlpha:1})
.to(diagram1_hide, 1 , {autoAlpha:1, delay:-2})

//Show meter
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:-1})
.to(multimeterGroup_hide, 1, {autoAlpha:1, delay:-1})

//Change meter to dc amps
.to(meterKnob, 2, {rotation:180, transformOrigin:"29.5 29.5"})
.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
.to([thousZeroArray,hunsZeroArray,tensZeroArray,onesZeroArray,dc_hide], 0, {autoAlpha:1})


//Move meter leads
.to([break1,break1copy],1, {autoAlpha:0})
.to(blackLead, 1, {morphSVG:blackLead1_hide})
.to(redLead, 1, {morphSVG:redLead1_hide,delay:-1})

//Current flow on
.to([s1,s1copy],1,{rotation:0, transformOrigin:"0 20"})
.to([diagram1AllPaths], 0, {strokeDasharray:"2,6", ease:Linear.easeNone, strokeWidth:3, stroke:"black", delay:-1})
.add(function(){TweenMax.to([diagram1AllPaths], 0.1, {strokeDashoffset:"-=8", repeat:-1, ease:Linear.easeNone,yoyo:false})})
.to([pos1copy,pos1copy], 0, {stroke:"red"})
.to([r1copy], 0, {stroke:"orange"})
.to([diagram1AllPaths], 0, {autoAlpha:1})
.to([break1,break1copy,batterySymbol_copy,noCurrentcopy],0, {autoAlpha:0})


.to([onesArray,tensArray,hunsArray,thousArray], 0, {autoAlpha:0})
.to([thousOneArray,hunsZeroArray,tensSOneArray,onesZeroArray,dc_hide,twoDot_hide], 0, {autoAlpha:1})
