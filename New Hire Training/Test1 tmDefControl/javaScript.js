xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");
mainSvg.setAttribute("stroke", "red")
var bezierWeight = 0.675;

var rects = document.getElementsByTagName("rect")

// for(i=0; i<rects.length; i++){
// 	rectIdSplit = rects[i].id.split("_")
// 	if(rectIdSplit[1] === "hide"){
// 		rects[i].style.display="none";
// 	}
// }

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
	numPaths[i].style.stroke=black;
		numPaths[i].setAttribute('onclick','wireClicked(this);');
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





var mainTl = new TimelineMax({paused:true});
mainTl





function checkAnswer(answer){
	console.log(answer)
	switch(answer) {
		case n:
		var radios = document.getElementsByName('genderS');
		for (var i = 0, length = radios.length; i < length; i++){
			if (radios[i].checked){
				alert(radios[i].value);
				break;
			}
		}
		
		break;
    }
}


var clickedArray=[];
var correctAnswerArray=[];

function wireClicked(e){
	console.log(e)
	TweenMax.to(e,.1,{stroke:highlightColor})
}

var highlightColor="red";
function changeColors(myColor){
	console.log("Change Color: " + myColor)
	highlightColor=myColor;
	switch(myColor) {
    case red:
    console.log("red fired")
        TweenMax.to(rbID,1,{width:100})
        break;
}
}

var timerSwitchRotated=false;
timerSwitch.setAttribute('onclick','changeTimerSwitch();');
timerSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeTimerSwitch(){
	if(timerSwitchRotated === false){
		TweenMax.to(defrostControlWiper,1,{rotation:-33})
		timerSwitchRotated=true;
	}else{
		TweenMax.to(defrostControlWiper,1,{rotation:0})
		timerSwitchRotated=false;
	}
}

//Door Switch Rotation
var doorSwitchRotated=false;
doorSwitch.setAttribute('onclick','changeDoorSwitch();');
doorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeDoorSwitch(){
	if(doorSwitchRotated === false){
		TweenMax.to(path200,1,{rotation:-26})
		doorSwitchRotated=true;
	}else{
		TweenMax.to(path200,1,{rotation:0})
		doorSwitchRotated=false;
	}
}

//Defrost Thermostat Switch Rotation
var defrostThermostatRotated=false;
defrostThermostat.setAttribute('onclick','changeDefrostThermostatSwitch();');
defrostThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeDefrostThermostatSwitch(){
	if(defrostThermostatRotated === false){
		TweenMax.to(path334,1,{rotation:30});
		TweenMax.to(path324,1,{y:3});
		defrostThermostatRotated=true;
	}else{
		TweenMax.to(path334,1,{rotation:0})
		TweenMax.to(path324,1,{y:0});
		defrostThermostatRotated=false;
	}
}

//Defrost Thermostat Switch Rotation
var ccSwitchRotated=false;
ccSwitch.setAttribute('onclick','changeccSwitch();');
ccSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeccSwitch(){
	if(ccSwitchRotated === false){
		TweenMax.to(tcBlade,1,{rotation:-30});
		TweenMax.to(g3942,1,{y:-4.5});
		ccSwitchRotated=true;
	}else{
		TweenMax.to(tcBlade,1,{rotation:0})
		TweenMax.to(g3942,1,{y:0});
		ccSwitchRotated=false;
	}
}