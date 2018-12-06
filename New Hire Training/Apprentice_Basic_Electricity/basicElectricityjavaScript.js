var htmlBody = document.getElementsByTagName("BODY")[0];

introSlide = new XMLHttpRequest();
introSlide.open("GET","introPage.svg",false);
introSlide.overrideMimeType("image/svg+xml");
introSlide.send("");
var introSlide= document.getElementById("main").appendChild(introSlide.responseXML.documentElement);
var slides = [introSlide];

slide1 = new XMLHttpRequest();
slide1.open("GET","slide1.svg",false);
slide1.overrideMimeType("image/svg+xml");
slide1.send("");
var slide1= document.getElementById("hiddenWindow").appendChild(slide1.responseXML.documentElement);
slides.push(slide1);

slide2 = new XMLHttpRequest();
slide2.open("GET","slide2.svg",false);
slide2.overrideMimeType("image/svg+xml");
slide2.send("");
var slide2= document.getElementById("hiddenWindow").appendChild(slide2.responseXML.documentElement);
slides.push(slide2);

slide3 = new XMLHttpRequest();
slide3.open("GET","slide3.svg",false);
slide3.overrideMimeType("image/svg+xml");
slide3.send("");
var slide3= document.getElementById("hiddenWindow").appendChild(slide3.responseXML.documentElement);
slides.push(slide3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var svgWindow = document.getElementById("main");
var svg = d3.select(introSlide);
function redraw(){
	var width = svgWindow.clientWidth;
	var height = svgWindow.clientHeight;
	svg
	.attr("width", width)
	 .attr("height", height);
}
redraw();
window.addEventListener("resize", redraw);

//Change Menu Item

var currentTimeline;

function changeSlides(slide){
	console.log(slide)
	if(slide.id!="slide3"){
		document.getElementById("colorPickerDiv").className="menuItemsHidden";
	}
	closeMenu();
	for(i=0; i<slides.length; i++){
		TweenMax.to(slides[i], .001, {autoAlpha:0})
		TweenMax.to([slides[i]], .001, {className:"hidden"});
	}
	var showThisSlide = document.getElementById(slide.id)
	TweenMax.to([showThisSlide], .01, {className:"mainWindow"});
	TweenMax.to(showThisSlide, 1, {autoAlpha:1, delay:.5})
	currentTimeline=slide.id;
	slideSplit=slide.id.split("slide")
	var n = slideSplit[1]
	console.log(n)
	thisTrack.src='audioTracks/slide' + n + '.ogg';
	thisTrack.load();
	thisTrack.play(0);
	timelinesArray[n].restart();
}
function closeMenu(){
	document.getElementById("menuItems").className="menuItemsHidden";
}

var timelinesArray = []

//Audio
var thisTrack = document.getElementById('music');
thisTrack.onplay = function() {
	var nameSplit = currentTimeline.split("slide")
	var slideNumber = nameSplit[1];
	timelinesArray[slideNumber].play();
};

thisTrack.onpause = function() {
	var nameSplit = currentTimeline.split("slide")
	var slideNumber = nameSplit[1];
	timelinesArray[slideNumber].pause();
};

thisTrack.onseeked = function() {
	var nameSplit = currentTimeline.split("slide")
	var slideNumber = nameSplit[1];
	timelinesArray[slideNumber].time(thisTrack.currentTime);
}

thisTrack.ontimeupdate = function() {
	var nameSplit = currentTimeline.split("slide")
	var slideNumber = nameSplit[1];
	timelinesArray[slideNumber].time(thisTrack.currentTime);
};
//End Audio

var gArray = document.getElementsByTagName("g");
var tArray = document.getElementsByTagName("text");
var imageArray = document.getElementsByTagName("image");
var pathArray = document.getElementsByTagName("path");
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


for (i=0; i<objectArray.length; i++) {
	objectArray[i].style.display="inline";
	groupNameSplit = objectArray[i].id.split("_");
	switch(groupNameSplit[1]) {
		case "drag":
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
	}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var slide0Tl = new TimelineMax({paused:false, repeat:-1});
timelinesArray.push(slide0Tl);
slide0Tl
// .from([g2381], .01, {autoAlpha:0})
.from(s1T1_drag, 1, {x:-800, autoAlpha:0, ease:Back.easeOut})
.to(g2381, 2.5, {x:500, ease: Power0.easeNone},"-=.5")
.from(text2524, 1, {x:-800, ease: Power0.easeNone},"-=2")
.from(s1T2, 1, {x:-600, ease:Back.easeOut},"+=.1")
 .from(path2810, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(path2411, .01, {autoAlpha:0, ease:Back.easeOut})
 .from(s1T3, 1, {x:-600, ease:Back.easeOut})
 .from(sineWave1, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
 .from(s1T4, 1, {x:-600, ease:Back.easeOut},"-=1")
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
 .from(s1T6PressPlayToStart, 1, {x:-800, ease:Back.easeOut})
 .to([s1T1_drag,s1T2,path2810,path2411,s1T3,sineWave1,s1T4,s1Heater,path4846,path4846,path1043,path_fzLight,path10,path_waterValve,path2812,s1T5,s1T6,s1H1,text5457,path25942,text2524], 1, {autoAlpha:0, ease:Back.easeOut},"+=5")
.add("end");

var orbitPath1 = MorphSVGPlugin.pathDataToBezier("#orbitPath1", {align:electron1_drag});
TweenLite.set(electron1_drag, {xPercent:-50, yPercent:-50});
var orbitPath2 = MorphSVGPlugin.pathDataToBezier("#orbitPath2", {align:electron2_drag});
TweenLite.set(electron2_drag, {xPercent:-50, yPercent:-50});
var orbitPath3 = MorphSVGPlugin.pathDataToBezier("#orbitPath3", {align:electron3_drag});
TweenLite.set(electron3_drag, {xPercent:-50, yPercent:-50});
var orbitPath4 = MorphSVGPlugin.pathDataToBezier("#orbitPath4", {align:electron4_drag});
TweenLite.set(electron4_drag, {xPercent:-50, yPercent:-50});
var orbitPath5 = MorphSVGPlugin.pathDataToBezier("#orbitPath5", {align:electron5_drag});
TweenLite.set(electron5_drag, {xPercent:-50, yPercent:-50});
var orbitPath6 = MorphSVGPlugin.pathDataToBezier("#orbitPath6", {align:electron6_drag});
TweenLite.set(electron6_drag, {xPercent:-50, yPercent:-50});
var orbitPath7 = MorphSVGPlugin.pathDataToBezier("#orbitPath7", {align:electron7_drag});
TweenLite.set(electron7_drag, {xPercent:-50, yPercent:-50});
var orbitPath8 = MorphSVGPlugin.pathDataToBezier("#orbitPath8", {align:electron8_drag});
TweenLite.set(electron8_drag, {xPercent:-50, yPercent:-50});

var electronOrbitTl = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl.to(electron1_drag, 4.2, {bezier:{values:orbitPath1, type:"cubic"}, ease:Linear.easeNone})
var electronOrbitTl2 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl2.to(electron2_drag, 3.8, {bezier:{values:orbitPath2, type:"cubic"}, ease:Linear.easeNone})
var electronOrbitTl3 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl3.to(electron3_drag, 4, {bezier:{values:orbitPath3, type:"cubic"}, ease:Linear.easeNone})
var electronOrbitTl4 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl4.to(electron4_drag, 4, {bezier:{values:orbitPath4, type:"cubic"}, ease:Linear.easeNone});
var electronOrbitTl5 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl5.to(electron5_drag, 4.2, {bezier:{values:orbitPath5, type:"cubic"}, ease:Linear.easeNone});
var electronOrbitTl6 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl6.to(electron6_drag, 3.8, {bezier:{values:orbitPath6, type:"cubic"}, ease:Linear.easeNone});
var electronOrbitTl7 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl7.to(electron7_drag, 4, {bezier:{values:orbitPath7, type:"cubic"}, ease:Linear.easeNone});
var electronOrbitTl8 = new TimelineMax({paused:false, repeat:-1});
electronOrbitTl8.to(electron8_drag, 4, {bezier:{values:orbitPath8, type:"cubic"}, ease:Linear.easeNone});

var orbitsArray = [orbitPath1,orbitPath2,orbitPath3,orbitPath4,orbitPath5,orbitPath7];
var orbit1Array = [orbitPath1,orbitPath2,orbitPath3,orbitPath4,orbitPath5,orbitPath7];

// Timelines//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

TweenMax.to([svgAtom_drag,electron1_drag,electron2_drag,electron3_drag,electron4_drag,electron5_drag,electron6_drag,electron7_drag,electron8_drag], .01, {autoAlpha:1})
TweenMax.to([mainBackground], .01, {autoAlpha:0})
var slide1Tl = new TimelineMax({paused:true});
timelinesArray.push(slide1Tl);

slide1Tl
.from([mainBackground],1, {autoAlpha:0})
.from([slide1Text1], 1, {autoAlpha:0})
.to([slide1Text1], 1, {autoAlpha:0},"+=5")
.from([svgAtom_drag], 1, {autoAlpha:0})
.to([text3115_drag], 1, {autoAlpha:1},"-=1")
.from([text4691_drag], 1, {autoAlpha:0},'+=0')
.to([electronOrbitTl], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},'+=19')
.to([electronOrbitTl2], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl3], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl4], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl5], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl6], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl7], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl8], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")

.to([text3115_drag], 1, {autoAlpha:0})


//Call out nucleus
.from([text2412_drag], 1, {autoAlpha:0})
.from(path4459, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},'-=1')


// hide nucleus call out
.to([text2412_drag], 1, {autoAlpha:0},"+=2")
.to(path4459, 1, {autoAlpha:0, ease: Power0.easeNone},'-=1')

//Show nuecleus protons and neutons.
.to([nucleus_drag], 1, {x:127, y:-174, scaleX:0.3567945767525061, scaleY:0.350428666064864, autoAlpha:1, transformOrigin: '50% 50%', ease: Power0.easeNone})

//Show Inside the nucleus are...
.from([text2755_drag], .5, {autoAlpha:0},'+=1')
.from(protonArrow_drag, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},'-=1')
//Draw proton line
// .from(protonArrow_drag, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'-=.5')

// //Show Neutrally charged...
.from([text3603_drag], .5, {autoAlpha:0},'+=2')
.from(neutronArrow_drag, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},'-=1')


// Hide protons and neutrons
.to([text2755_drag,text3603_drag,text4691_drag], .5, {autoAlpha:0},'+=1.5')
.to([protonArrow_drag,neutronArrow_drag], .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone},"-=.5")

// //Atom connecting lines
.fromTo(path4790, .1, {drawSVG:"0%"}, {drawSVG:"13%",immediateRender:true, ease: Power0.easeNone},"+=.5")
.to([electron5_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron5_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"12%"}, {drawSVG:"26%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron6_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron6_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"26%"}, {drawSVG:"39%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron7_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron7_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"39%"}, {drawSVG:"50%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron4_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron4_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"50%"}, {drawSVG:"64%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron1_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron1_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"64%"}, {drawSVG:"75%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron2_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron2_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

.fromTo(path4790, .1, {drawSVG:"75%"}, {drawSVG:"87%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron3_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron3_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')
.fromTo(path4790, .1, {drawSVG:"87%"}, {drawSVG:"100%",immediateRender:false, ease: Power0.easeNone},'-=.0')
.to([electron8_drag], .1, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn},'+=0')
.to([electron8_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'+=0')

// //Hide Nucleus and Text and Lines
.to([path4790], .5, {autoAlpha:0, transformOrigin: '50% 50%', ease: Power0.easeNone})
.to([nucleus_drag], 1, {x:127, y:-174, scaleX:.01, scaleY:.01, autoAlpha:0, transformOrigin: '50% 50%', ease: Power0.easeNone})


// //Arrow showing attraction
.from([path2538,"#path2538-0","#path2538-4",path5082,path5080,path5084,path5084,path5088,path5086], .75, {drawSVG:"0%",immediateRender:true, ease: Power0.easeNone},'-=.0')
.to([path2538,"#path2538-0","#path2538-4",path5082,path5080,path5084,path5084,path5088,path5086], .5, {autoAlpha:0},'+=3')

.to(htmlBody, 1, {className:"blackBg"},"-=0")
.from([solarSystem_drag], 2, {autoAlpha:0},'-=1')
// .to([text11768_drag], .01, {autoAlpha:0},'-=0')
.to([text3390], .01, {autoAlpha:0},'-=0')


//Draw electron highlights.
.from(picOrbit1, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from([text3573_drag], 1, {autoAlpha:0})



.from(path3490, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone},"+=1")
.from(path3490a, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490b, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490c, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490d, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490e, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490f, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from(path3490g, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.from([text3595_drag], 1, {autoAlpha:0})
.to([solarSystem_drag,svgAtom_drag], 1, {autoAlpha:0},"+=3")
.to([solarSystem_drag], 1, {x:254, y:-37, scaleX:0.5000000000000001, scaleY:0.5000000000000001, transformOrigin: '50% 50%', ease: Power0.easeNone},'-=0')
.to([svgAtom_drag], 1, {x:1160, y:-218, transformOrigin: '50% 50%', ease: Power0.easeNone},'-=1')
.from("#path3608-0", .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]})

.to([copperAtom_drag], 1, {autoAlpha:1})
.from([outerBand], 1, {autoAlpha:0, immediateRender:true},"+=3.5")
.to([copperAtom_drag], 1, {x:"+=275", transformOrigin: '50% 50%', ease: Power0.easeNone},"+=8")
.from([copperAtom_drag2], 1, {autoAlpha:0})



var slide2Tl = new TimelineMax({paused:true});
timelinesArray.push(slide2Tl);
slide2Tl
// .to([Schematic_drag],1, {autoAlpha:1})



slide3.classList.add("center");
// zoomSlider.value=0;

var noPaths = document.getElementById("diagram1").getElementsByTagName("path");
var noPathsLength = noPaths.length;
for(i=0; i<noPathsLength; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke','blue');
	path.setAttribute('fill','none');
	path.setAttribute('opacity',0);
	path.setAttribute('id',noPaths[i].id + 'copy');
	path.setAttribute('onclick','wireClicked(this);');
	path.setAttribute('onmouseover','this.style.cursor = "default"; overWire(this);');
	path.setAttribute('onmouseout','outWire(this);');
	path.style['stroke-width']=1;
	path.style['stroke-linecap']="round";
	noPaths[i].style['stroke-linecap']="round";
	path.setAttribute("d", noPaths[i].getAttribute("d"));
	diagram1.appendChild(path);
	path.style["stroke-width"]= 3;
	path.setAttribute('touchmove','wireClicked(this);');	
}

var slide3Drag = Draggable.create(slide3, {zIndexBoost:false});
slide3.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);

var scaleUp = 1;
function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .25;
			TweenMax.to(slide3, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .25;
    	TweenMax.to(slide3, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}

// zoomSlider.addEventListener("input", update);
// function update(){
// 	TweenMax.set(slide3, {scaleX:zoomSlider.value, scaleY:zoomSlider.value, transformOrigin: "50% 50%", ease: Power0.easeNone});
// }

function wireClicked(wire){
	nameSplit = wire.id.split("copy");
	wire2 = document.getElementById(nameSplit[0]);
	console.log(wire2)
	TweenMax.to(wire2,.1,{stroke:highlightColor});
}

function overWire(wire){
	nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", ".5"); 
}

function outWire(wire){
nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", "0");
}

var highlightColor=black;
function changeColors(myColor){
	redBox.style.border = "none";
	blueBox.style.border = "none";
	orangeBox.style.border = "none";
	yellowBox.style.border = "none";
	purpleBox.style.border = "none";
	greenBox.style.border = "none";
	greyBox.style.border = "none";
	blackBox.style.border = "none";
	brownBox.style.border = "none";
	highlightColor=myColor;
	switch(myColor) {
    case "red":
    redBox.style.border = "medium solid #000000";
    break;
    case "blue":
    blueBox.style.border = "medium solid #000000";
    break;
    case "orange":
    orangeBox.style.border = "medium solid #000000";
    break;
    case "yellow":
    yellowBox.style.border = "medium solid #000000";
    break;
    case "purple":
    purpleBox.style.border = "medium solid #000000";
    break;
    case "green":
    greenBox.style.border = "medium solid #000000";
    break;
    case "grey":
    greyBox.style.border = "medium solid #000000";
    highlightColor="#f2f4f4";
    break;
    case "brown":
    brownBox.style.border = "medium solid #000000";
    highlightColor=brown;
    break;
    case "black":
    blackBox.style.border = "medium solid #000000";
    break;
	}
}

// -----------------------------------------------------------------------------------------------------------------------------
var ccSwitchRotated=false;
ccSwitch.setAttribute('onclick','changeccSwitch();');
ccSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeccSwitch(){
	if(ccSwitchRotated === false){
		TweenMax.to(tcBlade,1,{rotation:-30});
		TweenMax.to(tcBladecopy,1,{rotation:-30});
		TweenMax.to(g3942,1,{y:"-=6"});
		ccSwitchRotated=true;
	}else{
		TweenMax.to(tcBlade,1,{rotation:0});
		TweenMax.to(tcBladecopy,1,{rotation:0});
		TweenMax.to(g3942,1,{y:"+=7"});
		ccSwitchRotated=false;
	}
}

var timerSwitchRotated=false;
timerSwitch.setAttribute('onclick','changeTimerSwitch();');
timerSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeTimerSwitch(){
	console.log("fires")
	if(timerSwitchRotated === false){
		TweenMax.to(defrostControlWiper,1,{rotation:-33});
		TweenMax.to(defrostControlWipercopy,1,{rotation:-33});
		timerSwitchRotated=true;
	}else{
		TweenMax.to(defrostControlWiper,1,{rotation:0});
		TweenMax.to(defrostControlWipercopy,1,{rotation:0});
		timerSwitchRotated=false;
	}
}

var doorSwitchRotated=false;
doorSwitch.setAttribute('onclick','changeDoorSwitch();');
doorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeDoorSwitch(){
	if(doorSwitchRotated === false){
		TweenMax.to(path200,1,{rotation:-26});
		TweenMax.to(path200copy,1,{rotation:-26});
		doorSwitchRotated=true;
	}else{
		TweenMax.to(path200,1,{rotation:0});
		TweenMax.to(path200copy,1,{rotation:0});
		doorSwitchRotated=false;
	}
}

var defrostThermostatRotated=false;
defrostThermostat.setAttribute('onclick','changeDefrostThermostatSwitch();');
defrostThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeDefrostThermostatSwitch(){
	if(defrostThermostatRotated === false){
		TweenMax.to(path334,1,{rotation:30});
		TweenMax.to(path334copy,1,{rotation:30});
		TweenMax.to(path324,1,{y:3});
		defrostThermostatRotated=true;
	}else{
		TweenMax.to(path334,1,{rotation:0});
		TweenMax.to(path334copy,1,{rotation:0});
		TweenMax.to(path324,1,{y:0});
		defrostThermostatRotated=false;
	}
}

