xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");
mainSvg.setAttribute("stroke", "red")

//Show Window Zoom
var scaleUp = 1;
showWindow.addEventListener ("DOMMouseScroll", zoomHandler, false);
function zoomHandler(event){
	console.log("zoomHandler:" + event)
	scaleUp = this._gsTransform.scaleY;
	event.preventDefault();
	switch(event.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .01;
			TweenMax.to(showWindow, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .01;
    	TweenMax.to(showWindow, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
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
	// numPaths[i].style.stroke=black;
	TweenMax.to([numPaths[i]], .001, {strokeWidth:2});
		numPaths[i].setAttribute('onclick','wireClicked(this);');
		numPaths[i].setAttribute('onmouseover','this.style.cursor = "default";TweenMax.to([this], .001, {strokeWidth:3.5})');
		numPaths[i].setAttribute('onmouseout','this.style.cursor = "default";TweenMax.to([this], .001, {strokeWidth:2})');
			
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






// var highLimitSwitchRotated=false;
// highLimitSwitch.setAttribute('onclick','changeHighLimitSwitch();');
// highLimitSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');

// function changeHighLimitSwitch(){
// 	if(highLimitSwitchRotated === false){
// 		TweenMax.to(path3549,1,{rotation:33})
// 		highLimitSwitchRotated=true;
// 	}else{
// 		TweenMax.to(path3549,1,{rotation:0})
// 		highLimitSwitchRotated=false;
// 	}
// }





