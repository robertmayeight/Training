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
		TweenMax.to(defrostControlWiper,1,{rotation:-60})
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
		TweenMax.to(doorSwitchBlade,1,{rotation:-26})
		doorSwitchRotated=true;
	}else{
		TweenMax.to(doorSwitchBlade,1,{rotation:0})
		doorSwitchRotated=false;
	}
}

//Defrost Thermostat 1 Switch Rotation
var defrostThermostat1Rotated=false;
defrostThermostat.setAttribute('onclick','changeDefrostThermostatSwitch();');
defrostThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeDefrostThermostatSwitch(){
	if(defrostThermostat1Rotated === false){
		TweenMax.to(defrostThermostat1Blade,1,{rotation:30});
		TweenMax.to(path324,1,{y:3});
		defrostThermostat1Rotated=true;
	}else{
		TweenMax.to(defrostThermostat1Blade,1,{rotation:0})
		TweenMax.to(path324,1,{y:0});
		defrostThermostat1Rotated=false;
	}
}

//Defrost Thermostat Switch Rotation
var ccSwitchRotated=false;
ccSwitch.setAttribute('onclick','changeccSwitch();');
ccSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeccSwitch(){
	if(ccSwitchRotated === false){
		TweenMax.to(tcBlade,1,{rotation:-28});
		ccSwitchRotated=true;
	}else{
		TweenMax.to(tcBlade,1,{rotation:0})
		ccSwitchRotated=false;
	}
}

//Defrost Thermostat 2 Switch Rotation
var defrostThermostat2Rotated=false;
defrostThermostat2.setAttribute('onclick','changeDefrostThermostat2Switch();');
defrostThermostat2.setAttribute('onmouseover','this.style.cursor = "pointer";');
function changeDefrostThermostat2Switch(){
	if(defrostThermostat2Rotated === false){
		TweenMax.to(defrostThermostat2Blade,1,{rotation:30});
		TweenMax.to(path324,1,{y:3});
		defrostThermostat2Rotated=true;
	}else{
		TweenMax.to(defrostThermostat2Blade,1,{rotation:0})
		TweenMax.to(path324,1,{y:0});
		defrostThermostat2Rotated=false;
	}
}