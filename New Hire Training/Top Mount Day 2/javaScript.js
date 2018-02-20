xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
mainSvg.setAttribute("stroke", "red")
var bezierWeight = 0.675;

var rects = document.getElementsByTagName("rect")

for(i=0; i<rects.length; i++){
	rectIdSplit = rects[i].id.split("_")
	if(rectIdSplit[1] === "hide"){
		rects[i].style.display="none";
	}
}

try{
	document.getElementById("layer1").style.display="inline";
	document.getElementById("layer2").style.display="inline";
	document.getElementById("layer3").style.display="inline";
	document.getElementById("layer4").style.display="inline";
	document.getElementById("layer5").style.display="inline";
	document.getElementById("layer6").style.display="inline";
	document.getElementById("layer7").style.display="inline";
	document.getElementById("layer8").style.display="inline";
	document.getElementById("layer9").style.display="inline";
	document.getElementById("layer10").style.display="inline";
	document.getElementById("layer11").style.display="inline";
	document.getElementById("layer12").style.display="inline";
	document.getElementById("layer13").style.display="inline";
	document.getElementById("layer14").style.display="inline";
	document.getElementById("layer15").style.display="inline";
}catch(err){};

// var strip1Elements = document.getElementById("strip1").childNodes;
var object1 = document.getElementById("schematic").getElementsByTagName("path").length
var numPaths = document.getElementById("schematic").getElementsByTagName("path")
for(i=0; i<object1; i++){
		numPaths[i].setAttribute('onclick','console.log(this.id)');
		numPaths[i].setAttribute('onmouseover','this.style.cursor = "default";this.setAttribute("opacity", ".1"); ');
		numPaths[i].setAttribute('onmouseout','this.setAttribute("opacity", "1");');
			
}


//Create Text Fields
for(i=0; i<100; i++){
	var para = document.createElement("span");
    para.id="text"+ (i);
    para.className = "textDrag";
    para.oncontextmenu = function(e) {e.stopPropagation(); e.preventDefault(); this.setAttribute("contenteditable", "false");};
    para.onmousedown = function(){showWindowDrag[0].disable(); };
    para.onmouseup = function(){showWindowDrag[0].enable(); this.className=changeClass.value; selectedText = this.id;};
    para.ondblclick = function(event){this.setAttribute("contenteditable", "true");};
    document.getElementById("showWindow").appendChild(para)
    Draggable.create(para, {zIndexBoost:false, type:"x,y", edgeResistance:0.65});
    rob = document.getElementById(para.id)
    rob.innerHTML=para.id;
    TweenLite.set(rob, { x: "+=10", overwrite: false });
    TweenLite.set(rob,{autoAlpha:0})
}

//Meter Code
var positionAndScale = "";

var multmeterDrag = Draggable.create(multimeterGroup, {zIndexBoost:false});
multimeterGroup.addEventListener("DOMMouseScroll", function(e){zoomMeter(e)}, false)
multimeterGroup.onmouseover = function(){
	this.style.cursor="grab";
	showWindow.removeEventListener ("DOMMouseScroll", zoomHandler, false)
	scaleUp = this._gsTransform.scaleX;
};
multimeterGroup.onmousedown = function(){showWindowDrag[0].disable();};
multimeterGroup.onmouseup = function(){
	showWindowDrag[0].enable();
	codeText.innerHTML = this.id;
};
multimeterGroup.onmouseout = function(){showWindow.addEventListener ("DOMMouseScroll", zoomHandler, false);};

function zoomMeter(e){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .01;
			TweenMax.to(multimeterGroup, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .01;
    	TweenMax.to(multimeterGroup, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}

var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});
schematic.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false)
schematic.onmouseover = function(){
	this.style.cursor="grab";
	showWindow.removeEventListener ("DOMMouseScroll", zoomHandler, false)
	scaleUp = this._gsTransform.scaleX;
};
schematic.onmousedown = function(){showWindowDrag[0].disable();};
schematic.onmouseup = function(){
	showWindowDrag[0].enable();
	codeText.innerHTML = this.id;
};
schematic.onmouseout = function(){showWindow.addEventListener ("DOMMouseScroll", zoomHandler, false);};

function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0) {
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


var blueDotDrag = Draggable.create([blueDot]);
var blueDotXPos = blueDot.getBBox().x + blueDot.getBBox().width/2;
var blueDotYPos = blueDot.getBBox().y + blueDot.getBBox().height/2;
blueDot.onmousedown = function(){showWindowDrag[0].disable(); multmeterDrag[0].disable();this.style.cursor="default"};
blueDot.onmouseup = function(){showWindowDrag[0].enable(); multmeterDrag[0].enable(); console.log(blueDotXPos + blueDot._gsTransform.x); console.log(blueDotYPos + blueDot._gsTransform.y)};

var off1=0;
var vDc=18;
var vAc=35;
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


function changeMeterFunction(setting){
	TweenMax.to([meterPolarity], .001, {opacity:0}) 
	TweenMax.to([meterHoldIndicator], .001, {autoAlpha:0}) 
	TweenMax.to([meterAutoIndicator], .001, {autoAlpha:0})
	TweenMax.to([meterDCIndicator], .001, {autoAlpha:0})
	TweenMax.to([meterACIndicator], .001, {autoAlpha:0})
	TweenMax.to([displayDiodeSymbol], .001, {autoAlpha:0})
	meterVoltagePrefix.textContent = "";
	meterCapPrefix.textContent = "";
	ohmsPrefix.textContent = "";
	meterCapPrefix.textContent="";
	TweenMax.to([meterText], .001, {autoAlpha:0})
	TweenMax.to([offMeter,off2Meter,vdcMeter,vacMeter,ohmsMeter,dp1,dp2,diodeArrow,capMeter,degreesFMeter,degreesCMeter,hertzMeter,percentMeter,microAmpsMeter,milliAmpsMeter,ampsMeter,off2Meter], instant, {fill:"black"});
	TweenMax.to([dp1,dp2,diodeArrow,toneMeter], instant, {stroke:"black"});
		
		switch(setting) {
		case "off1":
		TweenMax.to([offMeter], instant, {fill:"red"})
		TweenMax.to([offMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
		TweenMax.to([offMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
		TweenMax.to([offMeter], instant, {fill:"black"})
		break;
		case "off2":
		TweenMax.to([offTwoMeter], instant, {fill:"red"})
		TweenMax.to([offTwoMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
		TweenMax.to([offTwoMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
		TweenMax.to([offTwoMeter], instant, {fill:"black"})
		break;
	    case "vDc":
	    TweenMax.to([vdcMeter], instant, {fill:"red"})
	    TweenMax.to([vdcMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([vdcMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    TweenMax.to([display], .001, {autoAlpha:1})
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    TweenMax.to([meterAutoIndicator], .001, {autoAlpha:1}) 
		TweenMax.to([meterDCIndicator], .001, {autoAlpha:1})
		TweenMax.to([meterPolarity], .001, {autoAlpha:0}) 
		meterVoltagePrefix.textContent = "V";
	    
        break;
        case "vAc":
        TweenMax.to([display], .001, {autoAlpha:1})
        TweenMax.to([meterPolarity], .001, {autoAlpha:0}) 
        TweenMax.to([meterText], .001, {autoAlpha:1})
		TweenMax.to([meterACIndicator], .001, {autoAlpha:1})
		TweenMax.to([meterAutoIndicator], .001, {autoAlpha:1}) 
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterVoltagePrefix.textContent = "V";
	    meterText.textContent = "000.0";
	    TweenMax.to([vacMeter], instant, {fill:"red"})
	    TweenMax.to([vacMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([vacMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;
        case "ohms":
        TweenMax.to([display], .001, {autoAlpha:1})
		TweenMax.to([meterAutoIndicator], .001, {autoAlpha:1}) 
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "O.L";
	    ohmsPrefix.textContent = "MΩ";
	    TweenMax.to([ohmsMeter], instant, {fill:"red"})
	    TweenMax.to([ohmsMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([ohmsMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;
        case "diode":
        TweenMax.to([displayDiodeSymbol], .001, {autoAlpha:1}) 
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "O.L";
	    ohmsPrefix.textContent = "";
	    TweenMax.to([toneMeter], instant, {stroke:"red"});
	    TweenMax.to([ohmsPrefix,meterAutoIndicator], instant, {autoAlpha:0})
	    TweenMax.to([dp1,dp2,diodeArrow], instant, {stroke:"red"})
	    TweenMax.to([diodeArrow], instant, {fill:"red"})
	    TweenMax.to([diodeMeter,toneMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([diodeMeter,toneMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    TweenMax.to([diodeMeter], instant, {stroke:"black"})
        break;
        case "cap":
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "0.000";
	    meterCapPrefix.textContent="nF";
	    TweenMax.to([capMeter], instant, {fill:"red"})
	    TweenMax.to([capMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([capMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;
        case "degreesF":
        console.log("degreesF Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterCapPrefix.textContent="";
	    TweenMax.to([degreesFMeter], instant, {fill:"red"})
	    TweenMax.to([degreesFMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([degreesFMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;

        case "degreesC":
	    console.log("degreesC Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterCapPrefix.textContent="";
	    TweenMax.to([degreesCMeter], instant, {fill:"red"})
	    TweenMax.to([degreesCMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([degreesCMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
        break;
        case "hz":
	    console.log("hertz Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterCapPrefix.textContent="";
	    TweenMax.to([hertzMeter,percentMeter], instant, {fill:"red"})
	    TweenMax.to([hertzMeter,percentMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([hertzMeter,percentMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    break;
	    case "microAmps":
	    console.log("microAmps Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterVoltagePrefix.textContent="µA";
	    TweenMax.to([meterVoltagePrefix], instant, {autoAlpha:1})
	    TweenMax.to([microAmpsMeter], instant, {fill:"red"})
	    TweenMax.to([microAmpsMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([microAmpsMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    break;
	    case "milliAmps":
	    console.log("microAmps Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterVoltagePrefix.textContent="mA";
	    TweenMax.to([meterVoltagePrefix], instant, {autoAlpha:1})
	    TweenMax.to([milliAmpsMeter], instant, {fill:"red"})
	    TweenMax.to([milliAmpsMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([milliAmpsMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    break;
	    case "amps":
	    console.log("Amps Fired")
	    TweenMax.to([meterText], .001, {autoAlpha:1})
	    meterText.textContent = "OL";
	    meterVoltagePrefix.textContent=" A";
	    TweenMax.to([meterVoltagePrefix], instant, {autoAlpha:1})
	    TweenMax.to([ampsMeter], instant, {fill:"red"})
	    TweenMax.to([ampsMeter], .25, {scaleX:1.5, scaleY:1.5, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7)})
	    TweenMax.to([ampsMeter], .25, {scaleX:1, scaleY:1, transformOrigin: '50% 50%', ease: Back. easeOut.config( 1.7),delay:.5})
	    break;
	} 
}	

function changeMeterReading(reading){
	meterText.textContent = reading;
}

function zoomReadingLeft(){
		TweenMax.to([display], .5, {x:-30, scaleX:1.5, scaleY:1.5, transformOrigin: '250px 50%'})
		TweenMax.to([display], .5, {x:0, scaleX:1, scaleY:1, transformOrigin: '250px 50%',delay:1.5})
}
function zoomReadingRight(){
		TweenMax.to([display], .5, {x:30, scaleX:1.5, scaleY:1.5, transformOrigin: '250px 50%'})
		TweenMax.to([display], .5, {x:0, scaleX:1, scaleY:1, transformOrigin: '250px 50%',delay:1.5})
}


TweenMax.set([slide2],{autoAlpha:0})
var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI, repeat:0});
mainTl
.to(slide1,1,{autoAlpha:0})
.to(slide2,1,{autoAlpha:1},"-=1")
.addPause()

















// .to(text0, 1, {autoAlpha:0, y:"-=120"})

// .set(text1, {text:"Black Lead", className:"h2", x:50, y:-7})
// .add(function(){path2.setAttribute("d", "M591.8240051269531 350.1628646850586 L700.9003295898438 350.8453674316406 864.5032653808594 471.6350555419922");path2.style.strokeWidth = 3; path2.style.stroke = black;})
// .to([text1],1, {autoAlpha:1})
// .from(path2, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})

// .set(text2, {text:"Black lead always<br>goes here.<br>", className:"h2", x:54, y:80}).to([text2],1, {autoAlpha:1})
// .addPause()
// .to(text2, 1, {autoAlpha:0})

// .set(text3, {text:"Red Lead", className:"h2", x:58, y:64})
// .add(function(){path3.setAttribute("d", "M587.8240051269531 421.1628646850586 L733.9003295898438 419.8453674316406 803.5032653808594 472.6350555419922");path3.style.strokeWidth = 3; path3.style.stroke = black;})
// .to([text3],1, {autoAlpha:1})
// .from(path3, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone,delay:.001},"-=.5")

// .set(text4, {text:"For current readings over 1 amp (max 10 amps).", className:"h2", x:169, y:182}).to([text4],1, {autoAlpha:1})
// .addPause()

// .set(text68, {text:"Break circuit and place leads in series.", className:"h2", x:232, y:226}).to([text68],1, {autoAlpha:1})
// .addPause()

// .to([text3,text4, path3, text89, text68,ampProbe],1, {autoAlpha:0})
// .set(text89, {text:"Note: Use Amp Probe<br>to measure current<br>instead of multimeter.", className:"h2", x:662, y:-191}).to([text89],1, {autoAlpha:1})
// .from(ampProbe,1,{autoAlpha:0},"-=1")
// .addPause()

// .to([text89,ampProbe],1, {autoAlpha:0})

// .add(function(){path4.setAttribute("d", "M1098.8240051269531 439.1628646850586 L1098.9003295898438 473.8453674316406 933.5032653808594 473.6350555419922");path4.style.strokeWidth = 3; path4.style.stroke = black;})
// .set(text5, {text:"Red Lead", className:"h2", x:665, y:60}).to([text5],1, {autoAlpha:1})

// .from(path4, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.001},"-=.5")

// .set(text6, {text:"For all other measurements.", className:"h2", x:296, y:221}).to([text6],1, {autoAlpha:1})
// .addPause()
// .to([text1,text5, text6, path2, path4],1, {autoAlpha:0})

// //Move meter for Selections
// .to(multimeterGroup,1,{x:769, y:212, scaleX:1.5900000000000005, scaleY:1.5900000000000005, transformOrigin: "50% 50%",ease:Power0.easeNone})

// .to([knobBorder,meterKnob], .1, {stroke:red})
// .to(meterKnob, 1.5, {rotation:360, transformOrigin: "100% 50%"})
// .set(meterKnob, {rotation:0})
// .to([knobBorder,meterKnob], .1, {stroke:black})

// .set(text7, {text:"Use selector knob to select<br>measurement type.", className:"h2", x:215, y:-126}).to([text7],1, {autoAlpha:1})
// .addPause()
// .add(function(){changeMeterFunction("off1")})
// .to(meterKnob, .5, {rotation:off1})

// .to(text7, 1, {autoAlpha:0})

// .set(text8, {text:"Use Vdc setting for DC voltage readings.", className:"h2", x:42, y:-159}).to([text8],1, {autoAlpha:1})
// .add(function(){changeMeterFunction("vDc")})
// .to(meterKnob, .5, {rotation:vDc},"-=.5")
// .addPause()

// .to([text8],1, {autoAlpha:0})

// .set(text9, {text:"Meter lead placement matters when<br>measuring DC voltages.", className:"h2", x:70, y:-196}).to([text9],1, {autoAlpha:1})
// .addPause()
// .to(multimeterGroup,1,{x:711, y:159, scaleX:0.9721656300207695, scaleY:0.9721656300207695, transformOrigin: "50% 50%"})

// .to([strip2],1, {autoAlpha:1})
// .to([redLead, blackLead], 1, {autoAlpha:1},"-=1")
// .addPause()

// .set(text10, {text:"Red Lead on +DC", className:"h3", x:14, y:-18}).to([text10],1, {autoAlpha:1})
// .to(redLead, 1, {morphSVG:"M144.211,283.432 C 50,600 -700,300 -641.7887344360352, 220.4323272705078", ease: Power0.easeNone},"-=1")
// .addPause()

// .set(text11, {text:"Black Lead on DC GND", className:"h3", x:366, y:-18}).to([text11],1, {autoAlpha:1})
// .to(blackLead, 1, {morphSVG:"M 93.480472,282.09292 C 50,600 -200,300 -209.78873443603516, 220.4323272705078", ease: Power0.easeNone},"-=1")
// .add(function(){changeMeterReading("13.00")})
// .addPause()

// .to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
// .to(displayBorder, .5, {stroke:red},"-=.5")
// .addPause()
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
// .to(displayBorder, .5, {stroke:black},"-=.5")

// .to([text9],1, {autoAlpha:0})
// .set(text13, {text:"If leads are reversed, reading will be -13VDC.", className:"h2", x:38, y:-202}).to([text13],1, {autoAlpha:1})

// .to(redLead, 1, {morphSVG:"M144.211,283.432 C 50,600 -700,300 -209.78873443603516, 220.4323272705078", ease: Power0.easeNone})
// .add(function(){changeMeterReading("13.00")})
// .to(blackLead, 1, {morphSVG:"M 93.480472,282.09292 C 50,600 -200,300 -641.7887344360352, 220.4323272705078", ease: Power0.easeNone},"-=1")
// .to(meterPolarity, .01, {autoAlpha:1})
// .to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
// .to(displayBorder, .5, {stroke:red},"-=.5")
// .addPause()
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
// .to(displayBorder, .5, {stroke:black},"-=.5")

// .to([text10, text11, text13,strip2,redLead,blackLead,meterPolarity],1, {autoAlpha:0})
// .to(multimeterGroup,1,{x:529, y:203, scaleX:1.5900000000000005, scaleY:1.5900000000000005, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")
// .to(redLead, 1, {morphSVG:redLead, ease: Power0.easeNone},"-=1")
// .to(blackLead, 1, {morphSVG:blackLead, ease: Power0.easeNone},"-=1")
// .add(function(){changeMeterReading("0.000")})

// //Meter AC Section
// .set(text12, {text:"Use Vac for AC voltage readings.", className:"h2", x:42, y:-159}).to([text12],1, {autoAlpha:1})
// .add(function(){changeMeterFunction("vAc")})
// .to(meterKnob, .5, {rotation:vAc},"-=.5")
// .addPause()

// .set(text14, {text:"AC polarity is changing 60 times per<br>second so meter lead color doesn't<br>matter.", className:"h2", x:42, y:-74}).to([text14],1, {autoAlpha:1})
// .addPause()
// .to([text12, text14],1, {autoAlpha:0})

// //Meter Ohms Section
// .set(text15, {text:"Use Ω for resistance readings.", className:"h2", x:42, y:-159}).to([text15],1, {autoAlpha:1})
// .add(function(){changeMeterFunction("ohms")})
// .to(meterKnob, .5, {rotation:ohms},"-=.5")
// .addPause()

// .set(text16, {text:"Use this setting to check resistance<br>or continuity.", className:"h2", x:43, y:-101}).to([text16],1, {autoAlpha:1})
// .addPause()

// .set(text17, {text:"Resistance and continuity are not<br>the same. Continuity means the path is<br>not broken, however it may still have <br>resistance.<br>", className:"h2", x:42, y:32}).to([text17],1, {autoAlpha:1})
// .addPause()
// .to([text15,text16,text17],1, {autoAlpha:0})

// //Meter Diode Section
// .set(text18, {text:"<img src='diodePic.svg'>&nbsp;&nbsp;represents diode check. &nbsp;", className:"h2", x:45, y:-199}).to([text18],1, {autoAlpha:1})
// .add(function(){changeMeterFunction("diode")})

// .to(meterKnob, .5, {rotation:diode},"-=.5")
// .addPause()

// .to([redLead, blackLead], .001, {autoAlpha:1},"-=0")
// .to(multimeterGroup,1,{x:505, y:150, scaleX:0.9721656300207695, scaleY:0.9721656300207695, transformOrigin: "50% 50%"})
// .set(text19, {text:"Checked reverse biased - Red lead<br>on negative, black lead on positive.<br>", className:"h2", x:163, y:-86}).to([text19],1, {autoAlpha:1})

// .addPause()
// .to(blackLead, 1 ,{morphSVG:"M 93.480472,282.09292 C -50,600 -800,400 -705.7887344360352, 1.4323272705078125"})
// .to(redLead, 1 ,{morphSVG:"M 144.211,283.432 C 0,600 -600,400 -669.7887344360352, 1.4323272705078125"})
// .to([display], .5, {scaleX:2, scaleY:2, transformOrigin: '50% 50%'})
// .to(displayBorder, .5, {stroke:red},"-=.5")
// .addPause()
// .to([display], .5, {scaleX:1, scaleY:1, transformOrigin: '50% 50%',delay:0})
// .to(displayBorder, .5, {stroke:black},"-=.5")
// .to(['#text19'],1, {autoAlpha:0})

