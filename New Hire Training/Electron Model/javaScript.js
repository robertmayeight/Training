TweenMax.to(editor, .01, {autoAlpha:1})

xhr = new XMLHttpRequest();
xhr.open("GET","basicElectricity.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
document.getElementById("schematic").appendChild(xhr.responseXML.documentElement);

var ns = 'http://www.w3.org/2000/svg';
var svg = document.querySelector('svg');

document.getElementById("idText").onmouseover = function(){editorDrag[0].disable();this.style.cursor="text";};
document.getElementById("idText").onmouseout = function(){editorDrag[0].enable();};

var htmlBody = document.getElementsByTagName("BODY")[0];

myDraggable=Draggable.create("#schematic", {zIndexBoost:false, type:"x,y", edgeResistance:0.65});

editorDrag = Draggable.create("#editor", {zIndexBoost:false, type:"x,y", edgeResistance:0.65, onDrag:function() {
	console.log("mainTl.to(schematic, 2, {x:" + schematic._gsTransform.x + ", y:" + schematic._gsTransform.y + ", scaleX:" + schematic._gsTransform.scaleX + ", scaleY:" + schematic._gsTransform.scaleY + ", transformOrigin: '50% 50%', ease: Power0.easeNone}, '-=0');")
}});

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
		TweenMax.to(objectArray[i], instant, {autoAlpha:0})
		Draggable.create(objectArray[i], {zIndexBoost:false});
		objectArray[i].onmousedown = function(){myDraggable[0].disable(); setUpChechArrays(this);};
		objectArray[i].onmouseup = function(){
			myDraggable[0].enable(); 
			idText.innerHTML=this.id;
			objectTypeText.innerHTML=this.tagName;
			objectContentText.innerHTML=this.textContent;
			idText.innerHTML=this.id;
			xText.innerHTML=this._gsTransform.x;
			yText.innerHTML=this._gsTransform.y;
			scaleXText.innerHTML=this._gsTransform.scaleX;
			scaleYText.innerHTML=this._gsTransform.scaleY;
		};
		objectArray[i].addEventListener("DOMMouseScroll", function(e){zoomHandler2(e.detail, this)}, false)
		objectArray[i].onmouseover = function(){this.style.cursor="pointer"; schematic.removeEventListener ("DOMMouseScroll", zoomHandler, false); scaleUp = this._gsTransform.scaleX;};
		objectArray[i].onmouseout = function(){schematic.addEventListener ("DOMMouseScroll", zoomHandler, false);};
		break;
	}
}

// This code has to be seperate because it drags the parent and not the object!!!
for (i=0; i<tArray.length; i++) {
	Draggable.create(tArray[i], {zIndexBoost:true});
	tArray[i].onmousedown = function(){myDraggable[0].disable(); setUpChechArrays(this);};
	tArray[i].onmouseup = function(){
		myDraggable[0].enable();
		objectTypeText.innerHTML=this.tagName;
		objectContentText.innerHTML=this.textContent;
		idText.innerHTML=this.id;
		xText.innerHTML=this.parentNode._gsTransform.x;
		yText.innerHTML=this.parentNode._gsTransform.y;
		scaleXText.innerHTML=this.parentNode._gsTransform.scaleX;
		scaleYText.innerHTML=this.parentNode._gsTransform.scaleY;
		autoAlphaText.innerHTML=this.parentNode.style.autoAlpha;
	};
	// tArray[i].onmouseup = function(){myDraggable[0].enable();};
	tArray[i].onmouseover = function(){this.style.cursor="pointer";};
}

var editorHidden = true;
window.onkeydown = function(e) {
console.log(e.keyCode)
	switch(e.keyCode) {
    case 34:
        e.preventDefault();
        if(btn1.innerHTML === "PLAY"){
		mainTl.play();
		btn1.innerHTML="PAUSE"
	}else{
		mainTl.pause();
		btn1.innerHTML="PLAY"
	}
        break;
    case 33:
        e.preventDefault();
		mainTl.reverse();
        break;
        case 69:
        e.preventDefault();
		// if(e.ctrlKey){
			console.log(editor.autoAlpha)
			if(editorHidden === false){
				editorHidden = true;
				TweenMax.to(editor, 1, {autoAlpha:1})
			}else{
				TweenMax.to(editor, 1, {autoAlpha:0})
				editorHidden = false;
			}
		// }
        break;
        case 71:
        e.preventDefault();
		if(verticalCenterLine.style.display === "none"){
				verticalCenterLine.style.display="inline";
				horizontalCenterLine.style.display="inline";
			}else{
				verticalCenterLine.style.display="none";
				horizontalCenterLine.style.display="none";
			}
        break;
    
} 

}
var scaleUp = 1;

schematic.addEventListener ("DOMMouseScroll", zoomHandler, false);
function zoomHandler(event){
	scaleUp = this._gsTransform.scaleY;
	event.preventDefault();
	switch(event.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .01;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .01;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}

progressSlider.value = "0";
progressSlider.addEventListener("input", update);
function update(){
  mainTl.progress(progressSlider.value).pause();
  // currentTl.pause();
  btn1.innerHTML="PLAY"
}
function adjustUI() {
  progressSlider.value = mainTl.progress();
}

function changeSlideNumber(slideNumber){
	slideNumberContainer.innerHTML=slideNumber;
}

var currentTl = new TimelineMax({paused:true,repeat:-1});
currentTl.to(dclr, 0.5, {strokeDashoffset:"-=12", ease:Linear.easeNone});

// var n1Tl = new TimelineMax({paused:true,repeat:-1});
// n1Tl.to(n1, 0.5, {strokeDashoffset:"-=12", ease:Linear.easeNone});

// var r1Tl = new TimelineMax({paused:true,repeat:-1});
// r1Tl.to(r1, 0.5, {strokeDashoffset:"-=12", ease:Linear.easeNone});

// var p1Tl = new TimelineMax({paused:true,repeat:-1});
// p1Tl.to(p1, 0.5, {strokeDashoffset:"-=12", ease:Linear.easeNone});

//Electron Orbit Code
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

//Timelines//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TweenMax.to(schematic, .01, {x:146, y:-17, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone}, '-=0');

function pause(slideNumber, lineNumber){
	if(slideNumber != undefined){
		codeLineText.innerHTML=lineNumber;
	}
	if(lineNumber != undefined){
		slideNumberContainer.innerHTML=slideNumber;
	}
	if(btn1.innerHTML === "PLAY"){
		mainTl.play();
		btn1.innerHTML="PAUSE"
	}else{
		mainTl.pause();
		btn1.innerHTML="PLAY"
	}
}

function updateLineNumber(slideNumber, lineNumber){
	if(slideNumber != undefined){
		codeLineText.innerHTML=lineNumber;
	}
	if(lineNumber != undefined){
		slideNumberContainer.innerHTML=slideNumber;
	}
}

var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI});
var mainTli=0;
function loopAtomTrace(position){
	TweenMax.to(mainTl,2,{timeScale:5})

	mainTli++;
	if(mainTli<5) {
		console.log("fired" + mainTli)
		mainTl.play(position);
	}
}

TweenMax.to([slide1HeadingText_drag,svgAtom_drag,electron1_drag,electron2_drag,electron3_drag,electron4_drag,electron5_drag,electron6_drag,electron7_drag,electron8_drag], instant, {autoAlpha:1})
TweenMax.to([mainBackground], instant, {autoAlpha:0})

//Hide heading text.
mainTl.to(htmlBody, 1, {className:"haier"})
.to([slide1HeadingText_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]})

//Show - All matter is mode up of atoms
.from([text3069_drag], .5, {autoAlpha:0, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'-=0')

//Show - This is an atom.
.from([text3115_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=0')

//Draw atom line.
.from(path3537_drag, .5, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'-=.5')

//Hide - All matter is mode up of atoms
.to([text3069_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=0')

//Hide Atom
.to([text3115_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.5')

//Hide Atom line.
.to(path3537_drag, .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.5')

//Show nucleus.
.from([text2412_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=0')

//Draw nucleus line.
.from(path4459, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'-=.5')

//Hide Nucleus
.to([text2412_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=0')

//Hide Nucleus line
.to(path4459, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.5')

//Show nuecleus protons and neutons.
.to([nucleus_drag], 1, {x:127, y:-174, scaleX:0.3567945767525061, scaleY:0.350428666064864, autoAlpha:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=0')

//Show Inside the nucleus are...
.from([text2755_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=0')

//Draw proton line
.from(protonArrow_drag, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'-=.5')

//Show Neutrally charged...
.from([text3603_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')

//Draw neutron line
.from(neutronArrow_drag, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.from([text4691_drag], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([electronOrbitTl], 1, {timeScale:0, progress:.25, ease:Quad.easeOut})
.to([electronOrbitTl2], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl3], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl4], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl5], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl6], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl7], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl8], 1, {timeScale:0, progress:.25, ease:Quad.easeOut, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},"-=1")

//Atom connecting lines
.fromTo(path4790, .15, {drawSVG:"0%"}, {drawSVG:"13%",immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.to([electron5_drag], .15, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([electron5_drag], .15, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')

.fromTo(path4790, .15, {drawSVG:"12%"}, {drawSVG:"26%",immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.to([electron6_drag], .15, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([electron6_drag], .15, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')

.fromTo(path4790, .15, {drawSVG:"26%"}, {drawSVG:"39%",immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.to([electron7_drag], .15, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([electron7_drag], .15, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')

.fromTo(path4790, .15, {drawSVG:"39%"}, {drawSVG:"50%",immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.to([electron4_drag], .15, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([electron4_drag], .15, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')

.fromTo(path4790, .15, {drawSVG:"50%"}, {drawSVG:"64%",immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.to([electron1_drag], .15, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([electron1_drag], .15, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')

.fromTo(path4790, .15, {drawSVG:"64%"}, {drawSVG:"75%",immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.to([electron2_drag], .15, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([electron2_drag], .15, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')

.fromTo(path4790, .15, {drawSVG:"75%"}, {drawSVG:"87%",immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.to([electron3_drag], .15, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([electron3_drag], .15, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.fromTo(path4790, .15, {drawSVG:"87%"}, {drawSVG:"100%",immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.to([electron8_drag], .15, {stroke:"red", scaleX:2, scaleY:2, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeIn, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([electron8_drag], .15, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'+=0')

//Hide Nucleus and Text and Lines
.to([nucleus_drag], .5, {scaleX:0, scaleY:0, autoAlpha:0, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=0')
.to([text2755_drag,text3603_drag,text4691_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([protonArrow_drag,neutronArrow_drag], .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},"-=.5")


//Arrow showing attraction
.from([path2538,"#path2538-0","#path2538-4",path5082,path5080,path5084,path5084,path5088,path5086], 1, {drawSVG:"0%",immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.from([text3377], 1, {autoAlpha:0, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.to([text3377], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.from([text3390], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=0')
.to([electronOrbitTl], 1, {timeScale:1, ease:Quad.easeOut})
.to([electronOrbitTl2], 1, {timeScale:1, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl3], 1, {timeScale:1, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl4], 1, {timeScale:1, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl5], 1, {timeScale:1, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl6], 1, {timeScale:1, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl7], 1, {timeScale:1, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl8], 1, {timeScale:1, ease:Quad.easeOut, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},"-=1")

//Show Solar System
.to([path4790,path4790,"#path2538-0","#path2538-4",path5080,path5082,path5084,path5086,path5088,path2538], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'+=0')
.from([text11768_drag], 1, {autoAlpha:0, onComplete: pause, onCompleteParams:[1, new Error().lineNumber]},'+=1')
.to(htmlBody, 1, {className:"blackBg"},"-=0")
.from([solarSystem_drag], 2, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=1')
.to([text11768_drag], instant, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text3390], instant, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')

//Highlight Sun
.from(path3568, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from([text3573_drag], .5, {autoAlpha:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'+=0')

//Draw electron highlights.
.from(path3490, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(path3490a, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(path3490b, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(path3490c, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(path3490d, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(path3490e, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(path3490f, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(path3490g, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from([text3595_drag], .5, {autoAlpha:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'+=0')

//Hide Sun highlight
.to(path3568, speedPoint25, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text3573_drag], .25, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=0')

//Hide electron highlights and text.
.to(path3490, .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=.5")
.to(path3490a, .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=.25")
.to(path3490b, .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=.25")
.to(path3490c, .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=.25")
.to(path3490d, .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=.25")
.to(path3490e, .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=.25")
.to(path3490f, .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=.25")
.to(path3490g, .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=.25")
.to([text3595_drag], .25, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=.25')

//Draw orbit lines.
.from(picOrbit1, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(picOrbit2, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(picOrbit3, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from(picOrbit4, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]})

//Hide orbit lines.
.to([picOrbit1,picOrbit2,picOrbit3,picOrbit4], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=0')

//Put Solar sytem and atom side by side.
.to([solarSystem_drag], 1, {x:254, y:-37, scaleX:0.5000000000000001, scaleY:0.5000000000000001, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([svgAtom_drag], 1, {x:1160, y:-218, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=1')

//Show If you can understand this....
.from([text3602_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=.5')
.from(path3608, .75, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.from([text3627], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=0')
.from("#path3608-0", .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]})


// //Hide If you can understand this...
.to([text3602_drag,text3627,svgAtom_drag,solarSystem_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=0')
.to([path3608, "#path3608-0"], .25, {autoAlpha:0, drawSVG:"0%", immediateRender:false, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=.2")

////////////////////////////////Slide 2
//Copper Atom rotation Timeline
var copperAtomTl = new TimelineMax({timeScale:0, repeat:-1});
copperAtomTl.to([copperAtom_drag], 1, {rotation:360, transformOrigin: '50% 50%', ease:Linear.easeNone})
.to([copperAtomTl], 1, {timeScale:0, ease:Quad.easeOut})

//Body to blue.
mainTl.to(htmlBody, 1, {className:"haierBlue"})

//Show Text - Components of a copper atom.
.from([slide5Text1_drag], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'-=1')

//Show Nucleus
.from([copperAtom_drag], .01, {autoAlpha:1, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')
.from([copperAtomNucleus], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//Show Text - Nucleus
.from([slideFiveText2_drag], .5, {autoAlpha:0, onComplete: pause, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//HideText - Nucleus
.to([slideFiveText2_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//Show band 1.
.from([band1], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'-=0')

var band1Tl = new TimelineMax({timeScale:1, repeat:-1});
band1Tl.timeScale(.8)
band1Tl.to([band1], 1, {rotation:360, transformOrigin: '50% 50%', ease:Linear.easeNone})

//Show Text - Band 1.
mainTl.from([slideFiveText3_drag], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//Show Text - Can hold 2 elelctrons.
mainTl.from([slideFiveText4_drag], 1, {autoAlpha:0, onComplete: pause, onCompleteParams:[3, new Error().lineNumber]},'-=1')

//Hide last 2 texts.
.to([slideFiveText3_drag,slideFiveText4_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//Show band 2
.from([band2], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'-=0')
var band2Tl = new TimelineMax({timeScale:1, repeat:-1});
band2Tl.timeScale(.5)
band2Tl.to([band2], 1, {rotation:360, transformOrigin: '50% 50%', ease:Linear.easeNone})


//Show Text Band2.
mainTl.from([slide5Text5_drag], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//Show Can hold 8 electrons.
mainTl.from([slide5Text6_drag], .5, {autoAlpha:0, onComplete: pause, onCompleteParams:[3, new Error().lineNumber]},'-=1')

//Hide last 2 texts.
mainTl.to([slide5Text5_drag,slide5Text6_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//Show band 3
.from([band3], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'-=0')
var band3Tl = new TimelineMax({timeScale:1, repeat:-1});
band3Tl.timeScale(.25)
band3Tl.to([band3], 1, {rotation:360, transformOrigin: '50% 50%', ease:Linear.easeNone})

//Show Text Band 3.
mainTl.from([slide5Text7_drag], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//Show Text - Can hold 19 elelctorns
mainTl.from([slide5Text8_drag], .5, {autoAlpha:0, onComplete: pause, onCompleteParams:[3, new Error().lineNumber]},'-=1')

//Hide last 2 texts.
mainTl.to([slide5Text7_drag,slide5Text8_drag], .5, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//Show Band 4
.from([band4], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'-=.5')
var band4Tl = new TimelineMax({timeScale:1, repeat:-1});
band4Tl.timeScale(.15)
band4Tl.to([band4], 1, {rotation:360, transformOrigin: '50% 52%', ease:Linear.easeNone})

//Show Text - Band 4
mainTl.from([slide5Text9_drag], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[3, new Error().lineNumber]},'+=0')

//Show Text - Normally holds 1 but can hold more.
.from([slide5Text10_drag], 1, {autoAlpha:0, onComplete: pause, onCompleteParams:[3, new Error().lineNumber]},'-=0')

//Stop and change to schematic
mainTl.to([copperAtom2_drag,copperAtom3_drag,copperAtom4_drag,copperAtom5_drag,copperAtom_drag,slide5Text9_drag,slide5Text1_drag,slide5Text10_drag], 0, {autoAlpha:0, onComplete: pause, onCompleteParams:[3, new Error().lineNumber]},'+=0')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// schematic
.to([r1Morph,r2Morph,r3Morph], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([r2], .01, {morphSVG:r2Morph})
//Draw anodeSymbol
.from([diagram1_drag], 1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from(anodeSymbol, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.5')
.from(cathodeSymbol, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.from(n1, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.from(r1, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')

.from(n2, .2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')

.from(r2, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.from(n3, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')

.from(r3, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.from(n4, .25, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.from(n5, 2, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},'-=.0')
.from([dcCircuitsHeadingText], 1, {autoAlpha:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')




















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function zoomHandler2(event, target){
	scaleUp = target._gsTransform.scaleY;
	setUpChechArrays(target);
	switch(event>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .1;
			TweenMax.to(target, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .1;
    	TweenMax.to(target, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}

var checkArrayObject = "";
var checkArrayObjectId = "";
function setUpChechArrays(target){
	console.log("Target : " + target.id)
	checkArrayObjectId = target.id;
	checkArrayObject = target;
}

function tweenScale(){
	try{
		codeText.innerHTML = tweenParent.value + "." + tweenType.value + "([" + idText.innerHTML + "], " + tweenDuration.value + ", {x:" + xText.innerHTML + ", y:" + yText.innerHTML + ", scaleX:" + scaleXText.innerHTML + ", scaleY:" + scaleYText.innerHTML + ", transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: " + onCompleteSelect.value + ", onCompleteParams:[2, new Error().lineNumber]},'-=0')";
	}
	catch(err){
		codeText.innerHTML = "_drag object not selected.";
	}
}

function tweenautoAlpha(){
	try{
		codeText.innerHTML = tweenParent.value + "." + tweenType.value + "([" + idText.innerHTML + "], " + tweenDuration.value + ", {autoAlpha:" + tweenDuration.value + ", onComplete: " + onCompleteSelect.value + ", onCompleteParams:[2, new Error().lineNumber]},'" + delayChangeText.value + "')";
	}
	catch(err){
		codeText.innerHTML = "_drag object not selected.";
	}
}

function tweenText(){
	try{
		codeText.innerHTML = tweenParent.value + "." + tweenType.value + "(" + idText.innerHTML + ", " + tweenDuration.value + ", {x:" + xText.innerHTML + ", y:" + yText.innerHTML + ", transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: " + onCompleteSelect.value + ", onCompleteParams:[2, new Error().lineNumber]},'-=0')";
	}
	catch(err){
		codeText.innerHTML = "_drag object not selected.";
	}
}


function copyToClipboard() {
	TweenMax.to(editor, 2, {autoAlpha:0})
	editorHidden = true;
	var aux = document.createElement("input");
	 aux.setAttribute("value", document.getElementById("codeText").innerHTML);
	 document.body.appendChild(aux);
	 aux.select();
	 document.execCommand("copy");
	 document.body.removeChild(aux);
	 codeText.innerHTML = "Copied!";
}

function openPage(){
	window.open("https://www.ptable.com/")

}
	


// function setDeceleratingTimeout(callback, factor, times)
// {
//     var internalCallback = function(tick, counter) {
//     	console.log(tick)
//         return function() {
//             if (--tick >= 0) {
//             	console.log(tick)
//                 window.setTimeout(internalCallback, ++counter * factor);
//                 callback();
//             }
//         }
//     }(times, 0);

//     window.setTimeout(internalCallback, factor);
// };

// // console.log() requires firebug    
// setDeceleratingTimeout(function(){}, 10, 10);
// setDeceleratingTimeout(function(){  }, 100, 10);
