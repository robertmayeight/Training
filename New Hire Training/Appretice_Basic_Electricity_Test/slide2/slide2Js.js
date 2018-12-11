slide2 = new XMLHttpRequest();
slide2.open("GET","slide2Svg.svg",false);
slide2.overrideMimeType("image/svg+xml");
slide2.send("");
var slide2= document.getElementById("main").appendChild(slide2.responseXML.documentElement);

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
	slide2Tl.play();
};

slideAudio.onpause = function() {
	slide2Tl.pause();
};

slideAudio.onseeked = function() {
	slide2Tl.time(slideAudio.currentTime);
}

slideAudio.ontimeupdate = function() {
	slide2Tl.time(slideAudio.currentTime);
};

function playAudio(){
	slideAudio.play();
}
//End Audio


//TimeLines////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

TweenMax.to([electron1_drag,electron2_drag,electron3_drag,electron4_drag,electron5_drag,electron6_drag,electron7_drag,electron8_drag], 1, {autoAlpha:1})

//Main Timeline//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var slide2Tl = new TimelineMax({paused:false});
slide2Tl
.to([music,lightning_drag], 1, {opacity:1, onStart:playAudio()})
.to(lightning_drag, 1, {autoAlpha:1})
.to(lightning_drag, 1, {autoAlpha:0},"+=16.5")



.from([svgAtom_drag,text3115_drag], 1, {autoAlpha:0})

.to([svgAtom_drag,text3115_drag], 1, {autoAlpha:0},"+=5")

//copper wire division
.to(piece1_drag, 1, {autoAlpha:1})
.to(piece3, 1, {autoAlpha:0},"+=2")
.to(piece2, 1, {x:"+=50"})

.to(piece4, 1, {autoAlpha:0},"+=.5")
.to(piece5, 1, {x:"+=25"})

.to(piece6, 1, {autoAlpha:0},"+=.5")
.to(piece7, 1, {x:"+=12"})

.to(piece1_drag, 1, {autoAlpha:0},"+=2")



.to([svgAtom_drag], 2, {autoAlpha:1},"+=1")


.to([electronOrbitTl], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},'+=5')
.to([electronOrbitTl2], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl3], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl4], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl5], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl6], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl7], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([electronOrbitTl8], 1, {timeScale:0, progress:.25, ease:Quad.easeOut},"-=1")
.to([text3115_drag], 1, {autoAlpha:0})


//Call out nucleus
.from([text2412_drag], 1, {autoAlpha:0},"+=1")
.from(path4459, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},'-=1')


// hide nucleus call out
.to([text2412_drag], 1, {autoAlpha:0},"+=2")
.to(path4459, 1, {autoAlpha:0, ease: Power0.easeNone},'-=1')

//Show nuecleus protons and neutons.
.to([nucleus_drag], 1, {scaleX:0.3567945767525061, scaleY:0.350428666064864, autoAlpha:1, transformOrigin: '50% 50%', ease: Power0.easeNone})

//Show Inside the nucleus are...
.from([text2755_drag], .5, {autoAlpha:0},'+=1')
.from(protonArrow_drag, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},'-=1')

// //Show Neutrally charged...
.from([text3603_drag], .5, {autoAlpha:0},'+=2')
.from(neutronArrow_drag, .75, {drawSVG:"0%", autoAlpha:0, immediateRender:true, ease: Power0.easeNone},'-=1')

// Hide protons and neutrons
.to([text2755_drag,text3603_drag], .5, {autoAlpha:0},'+=3')
.to([protonArrow_drag,neutronArrow_drag], .25, {drawSVG:"0%", autoAlpha:0, immediateRender:false, ease: Power0.easeNone},"-=.5")

// //Atom connecting lines
.fromTo(path4790, .1, {drawSVG:"0%"}, {drawSVG:"13%",immediateRender:true, ease: Power0.easeNone},"+=2")
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
.to([electron8_drag], .1, {stroke:"brown", scaleX:1, scaleY:1, autoAlpha:1, transformOrigin: '50% 50%', ease: Bounce. easeOut},'+=0')

// //Hide Nucleus and Text and Lines
.to([path4790], .5, {autoAlpha:0, transformOrigin: '50% 50%', ease: Power0.easeNone})
.to([nucleus_drag], 1, {scaleX:.01, scaleY:.01, autoAlpha:0, transformOrigin: '50% 50%', ease: Power0.easeNone})


// //Arrow showing attraction
.from([path2538,"#path2538-0","#path2538-4",path5082,path5080,path5084,path5084,path5088,path5086], .75, {drawSVG:"0%",immediateRender:true, ease: Power0.easeNone},'-=.0')
.to([path2538,"#path2538-0","#path2538-4",path5082,path5080,path5084,path5084,path5088,path5086], .5, {autoAlpha:0},'+=3')

.from([solarSystem_drag], 2, {autoAlpha:0},'-=1')


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
.to([solarSystem_drag,svgAtom_drag], 1, {autoAlpha:0},"+=1.5")
.to([solarSystem_drag], 1, {x:254, y:-37, scaleX:0.5000000000000001, scaleY:0.5000000000000001, transformOrigin: '50% 50%', ease: Power0.easeNone},'-=0')
.to([svgAtom_drag], 1, {x:1160, y:-218, transformOrigin: '50% 50%', ease: Power0.easeNone},'-=1')

.to([copperAtom_drag], 1, {autoAlpha:1})
.to(band1_drag, 1, {autoAlpha:1},"+=1")
.to(band2_drag, 1, {autoAlpha:1})
.to(band3_drag, 1, {autoAlpha:1})
.to(band4_drag, 1, {autoAlpha:1})

.to([band1_drag,band2_drag,band3_drag,band4_drag], 1, {autoAlpha:0},"+=1")

.to(conductionBand_drag, 1, {autoAlpha:1})

.to(conductionBand_drag, 1, {autoAlpha:0},"+=3")

.to(copperAtom_drag, 2, {x:"+=175"})
.to(copperAtom2_drag, 1, {autoAlpha:1})

.to (freeElectron, 2, {x:-233, y:50})
.from([morePositive_drag], 1, {autoAlpha:0},"+=3")
.from([moreNegative_drag], 1, {autoAlpha:0},"+=2.5")
// .from([s1Clicknext_drag], 1, {autoAlpha:0})

