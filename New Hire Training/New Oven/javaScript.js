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
		path.setAttribute('onmouseover','this.style.cursor = "default"; overWire(this);');
		path.setAttribute('onmouseout','outWire(this);');
		path.style['stroke-width']=1;
		path.style['stroke-linecap']="round";
		noPaths[i].style['stroke-linecap']="round";
		path.setAttribute("d", noPaths[i].getAttribute("d"))
		diagram1.appendChild(path);	
		path.style["stroke-width"]= 3;	
}

var schematicDrag = Draggable.create(showWindow, {zIndexBoost:false});
// showWindow.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false)


var scaleUp = 1;
function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .25;
			TweenMax.to(showWindow, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .25;
    	TweenMax.to(showWindow, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
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
	// document.getElementById(nameSplit[0]).setAttribute("opacity", ".25"); 
	wire.setAttribute("opacity", ".5"); 
}

function outWire(wire){
nameSplit = wire.id.split("copy")
	// document.getElementById(nameSplit[0]).setAttribute("opacity", "1");
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

function clickZoomUP(){
	scaleUp = scaleUp + .05;
	TweenMax.to(showWindow, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
}

function clickZoomDown(){
	scaleUp = scaleUp - .05;
	TweenMax.to(showWindow, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
}

function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .25;
			TweenMax.to(showWindow, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .25;
    	TweenMax.to(showWindow, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}


// showWindow.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false)
if (showWindow.addEventListener) {
	// IE9, Chrome, Safari, Opera
	showWindow.addEventListener("mousewheel", function(e){zoomSchematic(e)}, false);
	// Firefox
	showWindow.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);
}




























// var tBtoCRotated=false;
// tBtoC.setAttribute('onclick','changetBtoC();');
// tBtoC.setAttribute('onmouseover','this.style.cursor = "pointer";');
// function changetBtoC(){
// 	if(tBtoCRotated === false){
// 		TweenMax.to(path9368,1,{rotation:30, transformOrigin: "0% 100%"});
// 		TweenMax.to(path9368copy,1,{rotation:30, transformOrigin: "0% 100%"});
// 		tBtoCRotated=true;
// 	}else{
// 		TweenMax.to(path9368,1,{rotation:0})
// 		TweenMax.to(path9368copy,1,{rotation:0})
// 		tBtoCRotated=false;
// 	}
// }

