
xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");

var noPaths = document.getElementById("diagram1").getElementsByTagName("path")
var noPathsLength = noPaths.length;
for(i=0; i<noPathsLength; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','blue');
		path.setAttribute('fill','none');
		path.setAttribute('opacity',0);
		path.setAttribute('id',noPaths[i].id + 'copy');
		path.setAttribute('onclick','wireClicked(this);');
		path.setAttribute('onmouseover','this.style.cursor = "default";overWire(this); console.log(this.id)');
		path.setAttribute('onmouseout','outWire(this);');
		path.style['stroke-width']=1;
		path.style['stroke-linecap']="round";
		noPaths[i].style['stroke-linecap']="round";
		path.setAttribute("d", noPaths[i].getAttribute("d"))
		diagram1.appendChild(path);	
		path.style["stroke-width"]= 3;	
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


function wireClicked(wire){
	nameSplit = wire.id.split("copy")
	wire2 = document.getElementById(nameSplit[0]);
	TweenMax.to(wire2,.1,{stroke:highlightColor})
}

function overWire(wire){
	nameSplit = wire.id.split("copy")
	document.getElementById(nameSplit[0]).setAttribute("opacity", ".25"); 
}

function outWire(wire){
nameSplit = wire.id.split("copy")
	document.getElementById(nameSplit[0]).setAttribute("opacity", "1");
}


var highlightColor=myColorPicker.value;
function changeColors(myColor){
	console.log("Change Color: " + myColor)
	highlightColor=myColor;
	switch(myColor) {
    case red:
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