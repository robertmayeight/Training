xhr = new XMLHttpRequest();
xhr.open("GET","inkScape.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
var bezierWeight = 0.675;

// var groups = document.getElementsByTagName("g")
// console.log(groups)
// for(i=0; i<groups.length; i++){
// 	try{
// 		Draggable.create(groups[i], {onPress: function(event){event.stopPropagation();}});
// 	}catch(err){}
// }


for(i=0; i<5000; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('stroke','red');
path.setAttribute('fill','none');
path.setAttribute('id','path'+i);
path.setAttribute('onclick','console.log(this.id); callOutPath = this.id; traceLines(this)');
path.setAttribute('onmouseover','this.style.cursor = "default"; this.setAttribute("opacity", ".1"); ');
path.setAttribute('onmouseout','this.setAttribute("opacity", "1");');
path.style['stroke-width']=3;
path.style["z-index"] = 100000
g2088.appendChild(path);
}

var originalStrokeColor="blue";
var ssDiagramPaths = document.getElementById("ssDiagram").getElementsByTagName("path")
var ssDiagramPathLength = document.getElementById("ssDiagram").getElementsByTagName("path").length;
for(i=0; i<ssDiagramPathLength; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','white');
		path.setAttribute('fill','none');
		path.setAttribute('id',ssDiagramPaths[i].id + 'copy');
		path.setAttribute('onmouseover','this.style.cursor = "default"; originalStrokeColor = this.getAttribute("stroke"); this.setAttribute("stroke", "red");');
		path.setAttribute('onmouseout','this.setAttribute("stroke", originalStrokeColor);');
		path.setAttribute('onclick','familyTreeArray.push(this.id); familyTreeArray.push(this.parentNode.id); familyTreeArray.push(this.parentNode.parentNode.id); familyTreeArray.push(this.parentNode.parentNode.parentNode.id); familyTreeArray.push(this.parentNode.parentNode.parentNode.parentNode.id); drawSVGArray.push("" + this.id); codeText.innerHTML=drawSVGArray; selectTargetFunction(e);');
		
		path.style['stroke-width']=1;
		path.style['stroke-linecap']="round";
		ssDiagramPaths[i].style['stroke-linecap']="round";
		path.setAttribute("d", ssDiagramPaths[i].getAttribute("d"))
		ssDiagram.appendChild(path);
}

var off1=0;
var Vdc=18;
var Vac=35;
var ohms=55;
var diode=67;
var cap=90;
var degreesF=115;
var degreesC=138;
var hz=162;
var microAmps=185;
var milliAmps=200;
var amps=215;
var off2=235;

TweenMax.set(text0, {text:"Basic Refrigeration", className:"h1 whiteText", x:328, y:-288});
TweenMax.set([path3412copy,pistoncopy,hotGascopy,coolGascopy, traceLoop1, traceLoop1copy, evapAirPath, evapAirPathcopy,evapBigArrow,evapBigArrow2, redArrow1,redArrow2,redArrow3,redArrow4,condAirArrow1,hotGasArrow1], {autoAlpha:0})
TweenMax.set([machineCompartment, ffCompartment], {autoAlpha:0, stroke:white})
// TweenMax.set("#cylinderGas", {fill:blue})

// TweenMax.set([multimeter], {x:-213, y:-535, scaleX:1.9030399999999998, scaleY:1.9030399999999998});

// Draggable.create(ssDiagram, {zIndexBoost:false});
// ssDiagram.addEventListener("DOMMouseScroll", function(e){zoomHandler2(e.detail, this)}, false)
// ssDiagram.onmouseover = function(){
// 	this.style.cursor="grab";
// 	showWindow.removeEventListener ("DOMMouseScroll", zoomHandler, false)
// 	scaleUp = this._gsTransform.scaleX;
// };
// ssDiagram.onmousedown = function(){myDraggable[0].disable();};
// ssDiagram.onmouseup = function(){
// 	myDraggable[0].enable();
// 	codeText.innerHTML = this.id;
// };
// ssDiagram.onmouseout = function(){showWindow.addEventListener ("DOMMouseScroll", zoomHandler, false);};

var introTl = new TimelineMax({repeat:-1, delay:0});
introTl
// .to([piston,pistoncopy], .5, {x:20, ease: Power0.easeNone})
// .to([piston,pistoncopy], .5, {x:0, ease: Power0.easeNone})
// .to([cam,camcopy], .5, {rotation:360, transformOrigin: '50% 50%', ease: Power0.easeNone},"-=0")


var pistonTl = new TimelineMax({repeat:-1, delay:0});
pistonTl
.to([piston,pistoncopy], 4, {y:31.8, ease: Power0.easeNone})
.to([piston,pistoncopy], 4, {y:0, ease: Power0.easeNone})
.to([lowValve, lowValvecopy], 1, {rotation:-55, transformOrigin: '100% 0%'},"-=8")
.to([lowValve, lowValvecopy], 1, {rotation:0, transformOrigin: '100% 0%'},"-=4")
.to([highValve, highValvecopy], 1, {rotation:0, transformOrigin: '100% 0%'},"-=8")
.to([highValve, highValvecopy], .25, {rotation:90, transformOrigin: '100% 0%'},"-=.25")


var pistonGasTl = new TimelineMax({repeat:-1, delay:0});
pistonGasTl
.to("#cylinderGas", 4, {attr:{height:45}, ease:Linear.easeNone})
.to("#cylinderGas", 4, {fill:blue, ease:Linear.easeNone},"-=4")
.to("#cylinderGas", 4, {attr:{height:15}, ease:Linear.easeNone})
.to("#cylinderGas", 4, {fill:red, ease:Linear.easeNone},"-=4")
.set([pistonGasTl,pistonTl], {timeScale:20})





 var obj5 = {value:0};
     // element5 = document.getElementById("#text1");
var number =1000;
TweenMax.to(obj5, 60, {
  value:60, 
  ease:Linear.easeNone, 
  onUpdate:function() {
     // text1.innerHTML = obj5.value.toFixed(1);
  }
});


// TweenMax.to(text1, 1, {autoAlpha:0})

var molecule1Tl = new TimelineMax({repeat:-1})
molecule1Tl.timeScale(1)
molecule1Tl
.to(molecule1,.2,{x:"-=5",ease:Elastic.easeOut})
.to(molecule1,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})
.to(molecule2,.2,{x:"-=5",ease:Elastic.easeOut},"-=.2")
.to(molecule2,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})
.to(molecule3,.2,{x:"-=5",ease:Elastic.easeOut},"-=.2")
.to(molecule3,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})
.to(molecule4,.2,{x:"-=5",ease:Elastic.easeOut},"-=.2")
.to(molecule4,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})
.to(molecule5,.2,{x:"-=5",ease:Elastic.easeOut},"-=.2")
.to(molecule5,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})

var molecule2Tl = new TimelineMax({repeat:-1})
molecule2Tl.timeScale(1)
molecule2Tl
.to(drop2M1,.2,{x:"-=5",ease:Elastic.easeOut})
.to(drop2M1,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})
.to(drop2M2,.2,{x:"-=5",ease:Elastic.easeOut},"-=.2")
.to(drop2M2,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})
.to(drop2M3,.2,{x:"-=5",ease:Elastic.easeOut},"-=.2")
.to(drop2M3,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})
.to(drop2M4,.2,{x:"-=5",ease:Elastic.easeOut},"-=.2")
.to(drop2M4,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})
.to(drop2M5,.2,{x:"-=5",ease:Elastic.easeOut},"-=.2")
.to(drop2M5,.2,{x:"+=5",y:"-=5",ease:Elastic.easeOut})

var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI, repeat:0});
mainTl
.to(['#ssDiagram'],1, {autoAlpha:0})

.set(text1, {text:"Refrigeration is the process of moving heat from an area <br>where it's not wanted to an area where it doesn't matter.", className:"h2 whiteText", x:74, y:-203})
.from(['#text1'],1, {autoAlpha:0})
.addPause()
.to(['#text1'],1, {autoAlpha:0})

.set(text2, {text:"Heat is a form of energy like electrical and mechanical<br>energies are forms of energy.", className:"h2 whiteText", x:95, y:-217})
.from(['#text2'],1, {autoAlpha:0})
.addPause()

.set(text10, {text:"Energy is defined as the capacity of a physical system<br>to perform work.", className:"h2 whiteText", x:97, y:-106})
.from(['#text10'],1, {autoAlpha:0})
.addPause()

.set(text11, {text:"The work that energy performs is increasing the temper-<br>ature of a substance or changing it's state.<br>", className:"h2 whiteText", x:96, y:5})
.from(['#text11'],1, {autoAlpha:0})
.addPause()
.to(['#text10',text2,text11],1, {autoAlpha:0})

.set(text3, {text:"Heat and temperature are related and often confused, but<br>they are not the same.", className:"h2 whiteText", x:69, y:-203})
.from(['#text3'],1, {autoAlpha:0})
.addPause()

.set(text4, {text:"Heat energy is the total vibrational energy of the molecules<br>in a substance.", className:"h2 whiteText", x:69, y:-97})
.to(['#text4'],1, {autoAlpha:1})
.addPause()

.set(text12, {text:"Temperature is the intensity level of the vibrating molecules.", className:"h2 whiteText", x:69, y:15})
.from(['#text12'],1, {autoAlpha:0})
.addPause()

.to([text12,text4,text3],1, {autoAlpha:0})

.set(text5, {text:"A droplet of water at 72° contains<br>a certain amount of heat.", className:"h2 whiteText", x:46, y:-91})
.from(['#text5'],1, {autoAlpha:0,})
.from(['#droplett1'],1, {autoAlpha:0},"-=1")
.addPause()

.set(text9, {text:"The amount of heat is determined<br>by the number of vibrating molecules<br>and the intensity of their vibration.", className:"h2 whiteText", x:46, y:18})
.from(['#text9',droplett1Group],1, {autoAlpha:0})
.from(['#rainDropsImage'],1, {autoAlpha:0},"-=1")
.addPause()
.to(['#text9,#text5'],1, {autoAlpha:0})

.set(text6, {text:"2 identical water droplets at 72°<br>will contain twice as much heat as<br>a single droplet.<br>", className:"h2 whiteText", x:33, y:-55})
.from(['#text6'],1, {autoAlpha:0})
.from(['#droplett2'],1, {autoAlpha:0},"-=1")
.addPause()

.set(text13, {text:"The amount of heat is doubled but<br>the temperature remains the same.", className:"h2 whiteText", x:31, y:104})
.from(['#text13'],1, {autoAlpha:0})
.addPause()
.to(['#text6','#text13'],1, {autoAlpha:0})

.set(text8, {text:"Temperature is increased by adding<br>more heat.", className:"h2 whiteText", x:46, y:-91})
.from(['#text8',bunsenBurner],1, {autoAlpha:0})

.to([molecule1Tl, molecule2Tl], 3.5, {timeScale:10})

.set(text14, {text:"More heat makes the molecules vibrate<br>faster.<br>", className:"h2 whiteText", x:50, y:10})
.from(['#text14'],1, {autoAlpha:0})




.to(ssDiagram,1,{x:354, y:62, scaleX:0.6860187280640029, scaleY:0.6860187280640029, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")
.set(text2, {text:"Sealed System Components", className:"h2 whiteText", x:37, y:-170})
.from(['#text2'],1, {autoAlpha:0})

.set(text3, {text:"Compressor", className:"h2 whiteText", x:624, y:2})
.from(['#text3'],1, {autoAlpha:0, onComplete:updateLineNumber},'-=0')
.to(['#compressorCover',compressorCovercopy],1, {autoAlpha:0, onComplete: pause, immediateRender: false, onCompleteParams:[2, new Error().lineNumber]},'-=0')
.to([path3412copy, pistoncopy,hotGascopy, coolGascopy], 1, {autoAlpha:1},"-=1")

.set(text4, {text:"Condenser", className:"h2 whiteText", x:271, y:29},"-=1")
.from(['#text4'],1, {autoAlpha:0})
.to(hotGas, 1, {stroke:red, onComplete:pause})

.set(text5, {text:"Filter/Drier", className:"h2 whiteText", x:312, y:171})
.from(['#text5'],1, {autoAlpha:0})
.to(filterDrier, 1, {fill:orange, onComplete:pause})

.set(text6, {text:"Capillary Tube", className:"h2 whiteText", x:618, y:215})
.from(['#text6'],1, {autoAlpha:0})
.to(capTubecopy, 1, {stroke:yellow, onComplete:pause})

.set(text7, {text:"Evaporator", className:"h2 whiteText", x:735, y:72})
.from(['#text7'],1, {autoAlpha:0})
.to(coolGas, 1, {stroke:blue, onComplete:pause})

//Explain compressor operation:
.to([,text2,text3,text4,text5,text6,text7],1, {autoAlpha:0})


.to(ffCompartment, 1, {autoAlpha:1})
.to([evapBigArrow,evapBigArrow2],1, {autoAlpha:.3})


var bezierData1 = MorphSVGPlugin.pathDataToBezier("#evapAirPath", {offsetX:0, offsetY:0});
TweenLite.set([evapBigArrow, evapBigArrow2], {xPercent:-108, yPercent:-100, transformOrigin: "50% 50%"});
var tl1 = new TimelineMax({repeat:-1})
tl1
.to(evapBigArrow, 4, {bezier: {values:bezierData1, type:"cubic",  autoRotate:true}, ease:Linear.easeNone})
var tl1A = new TimelineMax({repeat:-1, delay:2})
tl1A
.to(evapBigArrow2, 4, {bezier: {values:bezierData1, type:"cubic",  autoRotate:true}, ease:Linear.easeNone})


var bezierData2 = MorphSVGPlugin.pathDataToBezier("#traceLoop1", {offsetX:0, offsetY:0});
TweenLite.set([redArrow1], {xPercent:-60, yPercent:-60, transformOrigin: "50% 50%"});
var tl2 = new TimelineMax({repeat:-1})
tl2
.to(redArrow1, 8, {bezier: {values:bezierData2, type:"cubic",  autoRotate:true}, ease:Linear.easeNone})

TweenLite.set([redArrow2], {xPercent:-60, yPercent:-60, transformOrigin: "50% 50%"});
var tl3 = new TimelineMax({repeat:-1,delay:2})
tl3
.to(redArrow2, 8, {bezier: {values:bezierData2, type:"cubic",  autoRotate:true}, ease:Linear.easeNone})

TweenLite.set([redArrow3], {xPercent:-60, yPercent:-60, transformOrigin: "50% 50%"});
var tl4 = new TimelineMax({repeat:-1,delay:4})
tl4
.to(redArrow3, 8, {bezier: {values:bezierData2, type:"cubic",  autoRotate:true}, ease:Linear.easeNone})

TweenLite.set([redArrow4], {xPercent:-60, yPercent:-60, transformOrigin: "50% 50%"});
var tl5 = new TimelineMax({repeat:-1,delay:6})
tl5
.to(redArrow4, 8, {bezier: {values:bezierData2, type:"cubic",  autoRotate:true}, ease:Linear.easeNone})

// var redArrowTl1 = new TimelineMax({repeat:-1})
// redArrowTl1
// .to(evapBigArrow, 4,{x:905, autoAlpha:0, transformOrigin: "50% 50%",ease:Power0.easeNone})
// .to(evapBigArrow, .001,{x:105, autoAlpha:0, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]})



// var bezierData2 = MorphSVGPlugin.pathDataToBezier("#traceLoop1", {align:redArrow1});
// var tl2 = new TimelineMax({repeat:-1, delay:1})
// .to(redArrow1, 8, {bezier: {values:bezierData2, type:"cubic",  autoRotate:true}, ease:Linear.easeNone})














// .from(redArrow1, 1, {autoAlpha:0},"-=1")
// .to(redArrowCool2, 2, {bezier: {values:bezierData, type:"cubic",  autoRotate:true}, ease:Linear.easeNone},"-=1.5")
// .to(redArrowCool3, 2, {bezier: {values:bezierData, type:"cubic",  autoRotate:true}, ease:Linear.easeNone},"-=1.5")
// .to(redArrowCool4, 2, {bezier: {values:bezierData, type:"cubic",  autoRotate:true}, ease:Linear.easeNone},"-=1.5")
// .to(redArrowCool, .5,{x:105, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]})

// .to(redArrowGroup2,1,{x:105, autoAlpha:0, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"-=.75")
// .to(redArrowGroup2,1,{x:0, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")


// .to(redArrowGroup2,1,{x:105, autoAlpha:0, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")

// .to(ssDiagram,2.5,{x:267, y:326, scaleX:1.4282019517226028, scaleY:1.4282019517226028, transformOrigin: "50% 50%",ease:Power0.easeNone})
// .to([pistonGasTl,pistonTl], 3.5, {timeScale:.25},"-=3")
// .add(function(){pistonGasTl.pause(); pistonTl.pause();})











function pauseCompressor(){
	
}






// .to(ssDiagram,1,{x:41, y:343, scaleX:2.1531001602098336, scaleY:2.1531001602098336, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")

// .set(text2, {text:"Press Play to Start", className:"h3 whiteText", x:369, y:-8})
// .from(ssDiagram,1,{autoAlpha:0})
// .set([path2641copy,path2649copy,path7589copy,s2copy,path2645copy,s1copy,path7233copy,path2651copy,s3copy,path7250copy,path2653copy,s4copy,path7559copy,heatercopy,path7089copy,s6copy], {stroke:red})
// .staggerFromTo([path2641copy,path2649copy,path7589copy,s2copy,path2645copy,s1copy,path7233copy,path2651copy,s3copy,path7250copy,path2653copy,s4copy,path7559copy,heatercopy,path7089copy,s6copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)

// .set(text2, {text:"L1 potential on left side of switches.", className:"h3 blackBg", x:378, y:33})
// .from(['#text2'],1, {autoAlpha:0})
// .to(['#text2'],1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=2')

// .set([path2643copy,path2673copy,coil1copy,path2647copy], {stroke:blue})
// .staggerFromTo([path2643copy,path2673copy,coil1copy,path2647copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path7246copy,path7259copy,path2671copy,r2copy,path7178copy,r1copy,path2657copy,path7265copy,path2669copy,path3396copy,r3copy,path7593copy,path2663copy,path7591copy,r4copy,path2661copy,path7272copy,path7124copy], {stroke:blue})
// .staggerFromTo([path7246copy,path7259copy,path2671copy,r2copy,path7178copy,r1copy,path2657copy,path7265copy,path2669copy,path3396copy,r3copy,path7593copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path2663copy], {stroke:blue})
// .staggerFromTo([path2663copy], .7, {drawSVG:'100% 100%'}, {drawSVG: '0% 100%'},.7)
// .staggerFromTo([path7591copy,r4copy,path2661copy,path7272copy,path7124copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)

// .set(text2, {text:"Neutral potential on right side of switches.", className:"h3 blackBg", x:378, y:33})
// .to(['#text2'],1, {autoAlpha:1})
// .to(['#text2'],1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=2')

// .to(ssDiagram,1,{x:308, y:73, scaleX:3.4332394501419956, scaleY:3.4332394501419956, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")

// .from(['#multimeterGroup'],1, {autoAlpha:0})
// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,500 399.21126556396484, 225.4323272705078"})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,500 439.21126556396484, 225.4323272705078"})
// .add(function (){changeMeterReading("120.0")})
// .to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

// .set(text2, {text:"120 volts dropped across all switches.", className:"h3 blackBg", x:373, y:-157})
// .to(['#text2'],1, {autoAlpha:1})


// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,500 397.21126556396484, 284.4323272705078"})
// .add(function (){changeMeterReading("000.0")})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,500 438.21126556396484, 284.4323272705078"})
// .add(function (){changeMeterReading("120.0")})
// .to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,500 397.21126556396484, 362.4323272705078"})
// .add(function (){changeMeterReading("000.0")})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,500 438.21126556396484, 360.4323272705078"})
// .add(function (){changeMeterReading("120.0")})
// .to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,500 399.21126556396484, 445.4323272705078"})
// .add(function (){changeMeterReading("000.0")})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,500 440.21126556396484, 445.4323272705078"})
// .add(function (){changeMeterReading("120.0")})
// .to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,0 670.2112655639648, 535.4323272705078"})
// .add(function (){changeMeterReading("000.0")})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,0 712.2112655639648, 535.4323272705078"})
// .add(function (){changeMeterReading("120.0")})
// .to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})
// .to(['#text2'],1, {autoAlpha:0, onComplete: updateLineNumber, onCompleteParams:[2, new Error().lineNumber]},'+=2')
// .to(['#s6copy',s6],1, {rotation:30, transformOrigin: '0% 100%'},'-=0')
// .to([path7089copy],.001, {stroke:blue},'-=0')
// .to([heatercopy],.001, {stroke:orange},'-=0')

// .set(text2, {text:"Switch closes - voltage drop moves.", className:"h3 blackBg", x:342, y:271})
// .to(['#text2'],1, {autoAlpha:1})

// .add(function (){changeMeterReading("000.0")})
// .to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})

// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C 50,600 800,0 431.21126556396484, 536.4323272705078"})
// .add(function (){changeMeterReading("000.0")})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 50,600 800,0 548.2112655639648, 536.4323272705078"})
// .add(function (){changeMeterReading("120.0")})
// .to([display], .5, {scaleX:1.8, scaleY:1.8, transformOrigin: '50% 50%'})
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:1.5})
// .to([ssDiagram,multimeterGroup,text2],1,{autoAlpha:0})
// .set(text2, {text:"Press Play to Start", className:"h1 blackBg", x:330, y:-44})
// .to(['#text2'],1, {autoAlpha:1})
// .to([text2],1,{autoAlpha:0}, "=+2")




