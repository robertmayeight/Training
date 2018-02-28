xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");
mainSvg.setAttribute("stroke", "red")
var bezierWeight = 0.675;

var object1 = document.getElementById("schematic").getElementsByTagName("path").length
var numPaths = document.getElementById("schematic").getElementsByTagName("path")


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
	TweenMax.to([numPaths[i]], .001, {strokeWidth:1});
		numPaths[i].setAttribute('onclick','wireClicked(this);');
		numPaths[i].setAttribute('onmouseover','this.style.cursor = "default";TweenMax.to([this], .001, {strokeWidth:2})');
		numPaths[i].setAttribute('onmouseout','this.style.cursor = "default";TweenMax.to([this], .001, {strokeWidth:.75})');
			
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
			scaleUp = scaleUp - .1;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .1;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}






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






var highLimitSwitchRotated=false;
highLimitSwitch.setAttribute('onclick','changeHighLimitSwitch();');
highLimitSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeHighLimitSwitch(){
	console.log("fired")
	if(highLimitSwitchRotated === false){
		TweenMax.to(path3549,1,{rotation:33})
		highLimitSwitchRotated=true;
	}else{
		TweenMax.to(path3549,1,{rotation:0})
		highLimitSwitchRotated=false;
	}
}

var highLimit2SwitchRotated=false;
highLimitSwitch2.setAttribute('onclick','changeHighLimitSwitch2();');
highLimitSwitch2.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeHighLimitSwitch2(){
	console.log("high limit 2 fired")
	if(highLimit2SwitchRotated === false){
		TweenMax.to(path3768,1,{rotation:33})
		highLimit2SwitchRotated=true;
	}else{
		TweenMax.to(path3768,1,{rotation:0})
		highLimit2SwitchRotated=false;
	}
}














var ffDoorSwitchRotated=false;
ffDoorSwitch.setAttribute('onclick','changeffDoorSwitch();');
ffDoorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeffDoorSwitch(){
	if(ffDoorSwitchRotated === false){
		TweenMax.to(path3551,1,{rotation:-33})
		ffDoorSwitchRotated=true;
	}else{
		TweenMax.to(path3551,1,{rotation:0})
		ffDoorSwitchRotated=false;
	}
}

var fzDoorSwitchRotated=false;
fzDoorSwitch.setAttribute('onclick','changeFzDoorSwitch();');
fzDoorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

function changeFzDoorSwitch(){
	if(fzDoorSwitchRotated === false){
		TweenMax.to(path3348,1,{rotation:55, transformOrigin: '0% 100%'})
		fzDoorSwitchRotated=true;
	}else{
		TweenMax.to(path3348,1,{rotation:0})
		fzDoorSwitchRotated=false;
	}
}

// //Door Switch Rotation
// var doorSwitchRotated=false;
// doorSwitch.setAttribute('onclick','changeDoorSwitch();');
// doorSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

// function changeDoorSwitch(){
// 	if(doorSwitchRotated === false){
// 		TweenMax.to(path200,1,{rotation:-26})
// 		doorSwitchRotated=true;
// 	}else{
// 		TweenMax.to(path200,1,{rotation:0})
// 		doorSwitchRotated=false;
// 	}
// }

// //Defrost Thermostat Switch Rotation
// var defrostThermostatRotated=false;
// defrostThermostat.setAttribute('onclick','changeDefrostThermostatSwitch();');
// defrostThermostat.setAttribute('onmouseover','this.style.cursor = "pointer";');
// function changeDefrostThermostatSwitch(){
// 	if(defrostThermostatRotated === false){
// 		TweenMax.to(path334,1,{rotation:30});
// 		TweenMax.to(path324,1,{y:3});
// 		defrostThermostatRotated=true;
// 	}else{
// 		TweenMax.to(path334,1,{rotation:0})
// 		TweenMax.to(path324,1,{y:0});
// 		defrostThermostatRotated=false;
// 	}
// }

// //Defrost Thermostat Switch Rotation
// var ccSwitchRotated=false;
// ccSwitch.setAttribute('onclick','changeccSwitch();');
// ccSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
// function changeccSwitch(){
// 	if(ccSwitchRotated === false){
// 		TweenMax.to(tcBlade,1,{rotation:-30});
// 		TweenMax.to(g3942,1,{y:-4.5});
// 		ccSwitchRotated=true;
// 	}else{
// 		TweenMax.to(tcBlade,1,{rotation:0})
// 		TweenMax.to(g3942,1,{y:0});
// 		ccSwitchRotated=false;
// 	}
// }