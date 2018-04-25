xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");
// zoomSlider.value=0;

var noPaths = document.getElementById("diagram1").getElementsByTagName("path");
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
	path.setAttribute("d", noPaths[i].getAttribute("d"));
	diagram1.appendChild(path);
	path.style["stroke-width"]= 3;
	path.setAttribute('touchmove','wireClicked(this);');	
}

var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});
schematic.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);

var scaleUp = 1;
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

zoomSlider.addEventListener("input", update);
function update(){
	TweenMax.set(schematic, {scaleX:zoomSlider.value, scaleY:zoomSlider.value, transformOrigin: "50% 50%", ease: Power0.easeNone});
}

function wireClicked(wire){
	nameSplit = wire.id.split("copy");
	wire2 = document.getElementById(nameSplit[0]);
	TweenMax.to(wire2,.1,{stroke:highlightColor});
}

function overWire(wire){
	nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", ".5"); 
}

function outWire(wire){
nameSplit = wire.id.split("copy");
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

progressSlider.value = "0";
progressSlider.addEventListener("input", update);
function update(){
  mainTl.progress(progressSlider.value).pause();
  // currentTl.pause();
  btn1.innerHTML="PLAY"
}
function adjustUI() {
	if(mainTl.isActive() == false){
		btn1.innerHTML="PLAY"
	}
  progressSlider.value = mainTl.progress();
}



function pause(){
	if(btn1.innerHTML === "PLAY"){
		mainTl.play();
		btn1.innerHTML="PAUSE"
	}else{
		mainTl.pause();
		btn1.innerHTML="PLAY"
	}
}

var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI, repeat:0});
mainTl
.to(image3594,1,{x:217, y:-509, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone},"+=0")
// .set(text0, {text:"Power Cord", className:"h3", x:530, y:-193}).to([text0],1, {autoAlpha:1})

// -----------------------------------------------------------------------------------------------------------------------------
// var ccSwitchRotated=false;
// ccSwitch.setAttribute('onclick','changeccSwitch();');
// ccSwitch.setAttribute('onmouseover','this.style.cursor = "pointer";');
// function changeccSwitch(){
// 	if(ccSwitchRotated === false){
// 		TweenMax.to(tcBlade,1,{rotation:-30});
// 		TweenMax.to(tcBladecopy,1,{rotation:-30});
// 		TweenMax.to(g3942,1,{y:"-=6"});
// 		ccSwitchRotated=true;
// 	}else{
// 		TweenMax.to(tcBlade,1,{rotation:0});
// 		TweenMax.to(tcBladecopy,1,{rotation:0});
// 		TweenMax.to(g3942,1,{y:"+=7"});
// 		ccSwitchRotated=false;
// 	}
// }

