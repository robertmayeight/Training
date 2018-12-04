editor.style.display="inline";

xhr = new XMLHttpRequest();
xhr.open("GET","basicElectricity.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
document.getElementById("schematic").appendChild(xhr.responseXML.documentElement);

var ns = 'http://www.w3.org/2000/svg';
var svg = document.querySelector('svg');

document.getElementById("idText").onmouseover = function(){editorDrag[0].disable();this.style.cursor="text";};
document.getElementById("idText").onmouseout = function(){editorDrag[0].enable();};




myDraggable=Draggable.create("#schematic", {zIndexBoost:false, type:"x,y", edgeResistance:0.65});

editorDrag = Draggable.create("#editor", {zIndexBoost:false, type:"x,y", edgeResistance:0.65, onDrag:function() {
	console.log("mainTl.to(schematic, 2, {x:" + schematic._gsTransform.x + ", y:" + schematic._gsTransform.y + ", scaleX:" + schematic._gsTransform.scaleX + ", scaleY:" + schematic._gsTransform.scaleY + ", transformOrigin: '50% 50%', ease: Power0.easeNone}, '-=0');")
}});

var gArray = document.getElementsByTagName("g");
var tArray = document.getElementsByTagName("tspan");
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
		// Draggable.create(objectArray[i], {zIndexBoost:false});
		objectArray[i].onmousedown = function(){myDraggable[0].disable(); setUpChechArrays(this);};
		objectArray[i].onmouseup = function(){
			myDraggable[0].enable(); 
			idText.innerHTML=this.id;
			objectTypeText.innerHTML=this.tagName;
			objectContentText.innerHTML="--";
			idText.innerHTML=this.id;
			xText.innerHTML=this._gsTransform.x;
			yText.innerHTML=this._gsTransform.y;
			scaleXText.innerHTML=this._gsTransform.scaleX;
			scaleYText.innerHTML=this._gsTransform.scaleY;
			opacityText.innerHTML=this.style.opacity;
		};
		objectArray[i].addEventListener("DOMMouseScroll", function(e){zoomHandler2(e.detail, this)}, false)
		objectArray[i].onmouseover = function(){this.style.cursor="pointer"; schematic.removeEventListener ("DOMMouseScroll", zoomHandler, false); scaleUp = this._gsTransform.scaleX;};
		objectArray[i].onmouseout = function(){schematic.addEventListener ("DOMMouseScroll", zoomHandler, false);};
		break;
	}
}

// This code has to be seperate because it drags the parent and not the object!!!
for (i=0; i<tArray.length; i++) {
	Draggable.create(tArray[i].parentNode, {zIndexBoost:true});
	tArray[i].onmousedown = function(){myDraggable[0].disable(); setUpChechArrays(this);};
	tArray[i].onmouseup = function(){
		myDraggable[0].enable();
		objectTypeText.innerHTML=this.tagName;
		objectContentText.innerHTML=this.textContent;
		idText.innerHTML=this.parentNode.id;
		xText.innerHTML=this.parentNode._gsTransform.x;
		yText.innerHTML=this.parentNode._gsTransform.y;
		scaleXText.innerHTML=this.parentNode._gsTransform.scaleX;
		scaleYText.innerHTML=this.parentNode._gsTransform.scaleY;
		opacityText.innerHTML=this.parentNode.style.opacity;
	};
	// tArray[i].onmouseup = function(){myDraggable[0].enable();};
	tArray[i].onmouseover = function(){this.style.cursor="pointer";};
}
window.onkeydown = function(e) {
console.log(e.keyCode)
	switch(e.keyCode) {
    case 34:
        e.preventDefault();
        mainTl.play();
        break;
    case 33:
        e.preventDefault();
		mainTl.reverse();
        break;
        case 69:
        e.preventDefault();
		// if(e.ctrlKey){
			if(editor.style.display === "none"){
				editor.style.display="inline";
			}else{
				editor.style.display="none";
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
	// console.log(e.keyCode)
	// if (e.keyCode == 34) {
	// 	e.preventDefault();
	// 	pause();
	// }else if(e.keyCode == 33){
	// 	e.preventDefault();
	// 	pause();
	// 	mainTl.reverse();
	// }else if(e.keyCode == 69){
	// 	e.preventDefault();
	// 	if(e.ctrlKey){
	// 		if(editor.style.display === "none"){
	// 			editor.style.display="inline";
	// 			verticalCenterLine.style.display="inline";
	// 			horizontalCenterLine.style.display="inline";
	// 		}else{
	// 			editor.style.display="none";
	// 			verticalCenterLine.style.display="none";
	// 			horizontalCenterLine.style.display="none";
	// 		}

	// }
	// }
}
var scaleUp = 1;
// schematic.addEventListener('wheel', function(event) {
// 	event.preventDefault();
// 	switch(event.deltaY>0) {
// 		case true:
// 		if(scaleUp > .5 ){
// 			scaleUp = scaleUp - .1;
// 			TweenMax.to(schematic, 1, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
// 		}
// 		break;
// 		case false:
// 		scaleUp = scaleUp + .1;
//     	TweenMax.to(schematic, 1, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
//         break;
//     }
// });

// schematic.addEventListener('wheel', zoomHandler(event));

schematic.addEventListener ("DOMMouseScroll", zoomHandler, false);
function zoomHandler(event){
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
	console.log("Pause Fired" + lineNumber)
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

TweenMax.to([slide1HeadingText], instant, {x:355, y:-2, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
TweenMax.to([svgAtom_drag], instant, {x:1481, y:-140, scaleX:1.7000000000000006, scaleY:1.7000000000000006, transformOrigin: '50% 50%', ease:Power1. easeInOut, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')

mainTl.to([svgAtom_drag], 1, {x:1762, y:-135, scaleX:1.7000000000000006, scaleY:1.7000000000000006, transformOrigin: '50% 50%',   ease: Power1. easeInOut, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
.to([text10337], instant, {x:13, y:212, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([slide1HeadingText], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text10337], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')

.to([text10384_drag], instant, {x:11, y:298, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text10384_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text10337], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text10384_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=1')
.to([image10563_drag], instant, {x:286, y:-245, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([image10541_drag], instant, {x:-11, y:-15, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([image10574_drag], instant, {x:544, y:-2, scaleX:0.8, scaleY:0.8, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([image10541_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([image10563_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([image10574_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([image10541_drag,image10563_drag,image10574_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([svgAtom_drag], 1, {x:1481, y:-140, scaleX:1.7000000000000006, scaleY:1.7000000000000006, transformOrigin: '50% 50%', ease:Power1. easeInOut, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text10579_drag], instant, {x:181, y:-24, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text10579_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text10583_drag], instant, {x:202, y:-64, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([nucleus_drag], instant, {x:124, y:-153, scaleX:0.03853182191384155, scaleY:0.03784243781787849, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text10579_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text10583_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text2412_drag], instant, {x:-153, y:143, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text2412_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([path11764_drag], instant, {x:182, y:-67, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from(path11764_drag, 1.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete:pause, onCompleteParams:[2, new Error().lineNumber]})
.to([path11764_drag,text2412_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text2755], instant, {x:50, y:297, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([nucleus_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=1')
.to([nucleus_drag], 2, {x:124, y:-153, scaleX:0.43853182191384155, scaleY:0.43853182191384155, rotation:90, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text2755,path2763_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text3603_drag], instant, {x:38, y:216, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([arrow2_drag], instant, {x:-61, y:17, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text3603_drag,arrow2_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text3603_drag,arrow2_drag,text2755,path2763_drag,nucleus_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')

.to([text11768_drag], instant, {x:26, y:30, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text11768_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')

.to([electron1_drag,electron2_drag,electron3_drag,electron4_drag,electron5_drag,electron6_drag,electron7_drag,electron8_drag], 1, {stroke:"red", onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([image2666_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text10583_drag,text11768_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=1')
.to([image2666_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([text4173_drag], instant, {x:132, y:3, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([text4173_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')

.to([electron1_drag,electron2_drag,electron3_drag,electron5_drag,electron6_drag,electron7_drag,"#orbitPath1","#orbitPath5","#orbitPath2","#orbitPath6","#orbitPath3","#orbitPath7",text4173_drag], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([svgAtom_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.from([adam1,adam2,adam3,adam4,adam5,adam6,adam7,adam8], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([copperWire], 1, {opacity:1, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')


// --------------------------------------------------------------------------------------------





// .from(["#orbitPath1","#orbitPath2","#orbitPath3","#orbitPath4","#orbitPath5","#orbitPath6","#orbitPath7","#orbitPath8"], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')





// .from(slide4Text2, 1, {opacity:0, onComplete:pause, onCompleteParams:[1, new Error().lineNumber]},"-=.01")

// .to(text4098, .01, {x:351, y:27, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(text4098, 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]})

// .to(mainAtom1_drag, .01, {x:446, y:-5, scaleX:0.9101838102273628, scaleY:-0.9101838102273628, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(mainAtom2_drag, .01, {x:544, y:-56, scaleX:0.9101838102273628, scaleY:-0.9101838102273628, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(mainAtom3_drag, .01, {x:746, y:-173, scaleX:0.9101828195478093, scaleY:-0.9101828195478093, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(text3296, .01, {x:292, y:101, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .01, {x:-67, y:20, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from([mainAtom1_drag,mainAtom2_drag,mainAtom3_drag,moveElectron_drag], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(text4120, .01, {x:-24, y:-71, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(text4120, .01, {x:-72, y:-367, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(text3296, 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=1')
// .to(text3296, 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(text4120, 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(text4120, 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(path3256, 1.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(text4172, 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(path3258, 1.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(text4180, 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(path3260, 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=1')
// .from(text4184, 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},"-=1")
// .from(path3262, 1.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(text4232, 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .from(text4236, 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]},'-=1')

















// .from(slide2HeadingText, 1, {opacity:0, onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .from([p1,n1,r1,anodeSymbol,cathodeSymbol,batteryPlus,batteryMinus], 1, {opacity:0, onComplete:pause, onCompleteParams:[1, new Error().lineNumber]},"-=1")
// .to([p1,n1,r1,batteryPlus,batteryMinus,anodeSymbol,cathodeSymbol,slide2HeadingText], 1, {opacity:0, onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .from(slide2Text1, 1, {opacity:0, onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .from(slide2Text2, 1, {opacity:0,onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"+=1")
// .from(dclr, 1.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .from(slide2Arrow1, 1, {opacity:0, onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .from(slide2Text3, 1, {opacity:0, onComplete:updateLineNumber, onCompleteParams:[1, new Error().lineNumber]},"-=1")
// .to(dclr, .01, {strokeDasharray:"4,8",onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})

// .call(function(){currentTl.pause()})
// .call(function(){currentTl.play()})
// .call(function(){pause(1, new Error().lineNumber)})

// .to([slide2Text1,slide2Text2, slide2Text3, slide2Arrow1, dclr], 1, {opacity:0})

// .from(slide2Text1_txt, 1, {opacity:0, onComplete:updateLineNumber, onCompleteParams:[1, new Error().lineNumber]})
// .to([p1,n1,r1,batteryPlus,batteryMinus,anodeSymbol,cathodeSymbol], 1, {opacity:1, onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=1")

// .from(dclr, 1.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .to(n1, .1, {strokeDasharray:"3,3",onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .call(function(){n1Tl.pause()})
// .call(function(){n1Tl.play()})

// .to(r1, .1, {strokeDasharray:"3,3",onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .call(function(){r1Tl.pause()})
// .call(function(){r1Tl.play()})

// .to(p1, .1, {strokeDasharray:"3,3",onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .call(function(){p1Tl.pause()})
// .call(function(){p1Tl.play()})




// .from([text4448,path4450], 1, {opacity:0, onComplete: pause, onCompleteParams:[2, new Error().lineNumber]})
// .to([text4448,path4450], 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .from(path32606, 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .to(moveElectron_drag, 2, {x:-170, y:188, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},"-=1")


// .from(path32600, 1, {opacity:0, immediateRender:true, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=1.75')
// .from(text4444, 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=1')
// .to(moveElectron_drag, 2, {x:-299, y:258, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=2')
// .from(mainAtom4_drag, 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=1')
// .to(moveElectron_drag, 1.2, {x:-212, y:367, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone})
// .from(mainAtom5_drag, 1, {opacity:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .to(moveElectron_drag, 1, {x:-116, y:398, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .to(moveElectron_drag, 2, {x:67, y:398, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'myLoop')
// .to(moveElectron_drag, 2, {x:67, y:260, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:76, y:255, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:60, y:246, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:76, y:237, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:60, y:227, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:76, y:218, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:60, y:210, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:75, y:201, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:60, y:192, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:75, y:183, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:60, y:173, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, .5, {x:69, y:167, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, 3, {x:69, y:-52, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, 3, {x:-368, y:-52, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, 2, {x:-368, y:101, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone},'-=0')
// .to(moveElectron_drag, 3, {x:-368, y:397, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'-=0')
// .to(moveElectron_drag, 3, {x:-115, y:397, scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete:loopAtomTrace, onCompleteParams:['myLoop']},'-=0')

// //Voltage
// .to([p1,n1,r1,batteryPlus,batteryMinus,anodeSymbol,cathodeSymbol,slide2HeadingText], 1, {opacity:0, onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})
// .from(dclr, 1.5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, onComplete:updateLineNumber, onCompleteParams:[2, new Error().lineNumber]})


//Tools//////////////////////////////////////////////////////////////////////////////

function zoomHandler2(event, target){
	console.log("Object: " + scaleUp)
	// console.log("Target: " + g3057_drag._gsTransform.sclaeX )
	// checkArrays()
	// console.log(target._gsTransform.scaleX)
	// scaleUp = target._gsTransform.scaleX;
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
	// try{
		codeText.innerHTML = tweenParent.value + "." + tweenType.value + "([" + idText.innerHTML + "], " + tweenDuration.value + ", {x:" + xText.innerHTML + ", y:" + yText.innerHTML + ", scaleX:" + scaleXText.innerHTML + ", scaleY:" + scaleYText.innerHTML + ", transformOrigin: '50% 50%', ease: Power0.easeNone, onComplete: " + onCompleteSelect.value + ", onCompleteParams:[2, new Error().lineNumber]},'-=0')";
	// }
	// catch(err){
	// 	codeText.innerHTML = "_drag object not selected.";
	// }
}

function tweenOpacity(){
	try{
		codeText.innerHTML = tweenParent.value + "." + tweenType.value + "([" + idText.innerHTML + "], " + tweenDuration.value + ", {opacity:" + opacityChangeText.value + ", onComplete: " + onCompleteSelect.value + ", onCompleteParams:[2, new Error().lineNumber]},'" + delayChangeText.value + "')";
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
 var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("codeText").innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  codeText.innerHTML = "Copied!";
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

myDraggable[0].disable(); 
for (i=0; i<objectArray.length; i++) {
	objectArray[i].style.display="inline";
	groupNameSplit = objectArray[i].id.split("_");
	switch(groupNameSplit[1]) {
		case "drag":
		// Draggable.create(objectArray[i], {zIndexBoost:false});
		objectArray[i].onmousedown = function(){myDraggable[0].disable(); setUpChechArrays(this);};
		objectArray[i].onmouseup = function(){
			
			idText.innerHTML=this.id;
			objectTypeText.innerHTML=this.tagName;
			objectContentText.innerHTML="--";
			idText.innerHTML=this.id;
			xText.innerHTML=this._gsTransform.x;
			yText.innerHTML=this._gsTransform.y;
			scaleXText.innerHTML=this._gsTransform.scaleX;
			scaleYText.innerHTML=this._gsTransform.scaleY;
			opacityText.innerHTML=this.style.opacity;
		};
		objectArray[i].addEventListener("DOMMouseScroll", function(e){zoomHandler2(e.detail, this)}, false)
		objectArray[i].onmouseover = function(){this.style.cursor="pointer"; schematic.removeEventListener ("DOMMouseScroll", zoomHandler, false); scaleUp = this._gsTransform.scaleX;};
		objectArray[i].onmouseout = function(){schematic.addEventListener ("DOMMouseScroll", zoomHandler, false);};
		break;
	}
}