diagram = new XMLHttpRequest();
diagram.open("GET","miniManual.svg",false);
diagram.overrideMimeType("image/svg+xml");
diagram.send("");
document.getElementById("mainWindow").appendChild(diagram.responseXML.documentElement);

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
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','red');
		path.setAttribute('fill','none');
		path.setAttribute('id',numPaths[i].id + '_copy');
		path.setAttribute('onmouseover','this.style.pointer = "default";this.setAttribute("opacity", ".1"); ');
		path.setAttribute('onmouseout','this.setAttribute("opacity", "1");');
		path.style['stroke-width']=3;
		path.style['stroke-linecap']="round";
		numPaths[i].style['stroke-linecap']="round";
		path.setAttribute("d", numPaths[i].getAttribute("d"))
		schematic.appendChild(path);		
}

for(i=0; i<object1; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('stroke','blue');
		path.setAttribute('fill','none');
		path.setAttribute('id',numPaths[i].id + '_copy2');
		path.setAttribute('onmouseover','this.style.pointer = "default";this.setAttribute("opacity", ".1"); ');
		path.setAttribute('onmouseout','this.setAttribute("opacity", "1");');
		path.style['stroke-width']=1;
		path.style['stroke-linecap']="round";
		numPaths[i].style['stroke-linecap']="round";
		path.setAttribute("d", numPaths[i].getAttribute("d"))
		schematic.appendChild(path);		
}




var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});
schematic.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false)
schematic.onmouseover = function(){
	this.style.cursor="grab";
	// showWindow.removeEventListener ("DOMMouseScroll", zoomHandler, false)
};
scaleUp = 1;


// schematic.onmouseout = function(){showWindow.addEventListener ("DOMMouseScroll", zoomHandler, false);};

function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .05;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .05;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}








// TweenMax.set([path22_copy,path190_copy,path186_copy,path162_copy,path362_copy,path1103_copy,path86_copy,path84_copy,path1097_copy,path1100_copy,path208_copy,path1110_copy,path286_copy,path280_copy,path286_copy,path274_copy,path292_copy,path92_copy,path108_copy,path110_copy,path112_copy,path106_copy,path104_copy,path94_copy,path96_copy,path88_copy,path102_copy,path1092_copy,path100_copy,path114_copy,path1086_copy,path1084_copy,path98_copy,path140_copy,path138_copy,path3995_copy,path4001_copy,path3999_copy,path4011_copy,path3997_copy,path4005_copy,path4003_copy,path4009_copy,path4007_copy,path306_copy,path302_copy,path346_copy,path308_copy,path304_copy,path322_copy,path320_copy,path298_copy,path324_copy,"#path162-5-0_copy",path192_copy,path194_copy,path42_copy,path50_copy,path60_copy,path68_copy,path68_copy,path48_copy,path48_copy,path48_copy,path48_copy,path48_copy,path48_copy,path4027_copy,path44_copy,path46_copy],{autoAlpha:0})

schematic.onmouseup = function(){
	codeText.innerHTML = this.id;
	console.log("x:" + schematic._gsTransform.x + ", y:" + schematic._gsTransform.y + ", scaleX:" + schematic._gsTransform.scaleX + ", scaleY:" + schematic._gsTransform.scaleY)
};

TweenMax.set([path7559_copy,path2651_copy,path7559_copy,s3_copy,path2657_copy,r1_copy], {autoAlpha:0})

var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI, repeat:0});
mainTl
.to(schematic,1,{x:-36, y:-48, scaleX:2.000000000000001, scaleY:2.000000000000001, transformOrigin: "50% 50%",ease:Power0.easeNone})
.from(['#text4183'],1, {autoAlpha:0})


// .set([path7559_copy], {stroke:red})
// .staggerFromTo([path7559_copy], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .addPause()

TweenMax.to([path2651_copy2,path7559_copy2,s3_copy2,path2657_copy2,r1_copy2], 0.5, {strokeDasharray:"2,4", ease:Linear.easeNone});
TweenMax.to([path2651_copy2,path7559_copy2,s3_copy2,path2657_copy2,r1_copy2], 0.5, {strokeDashoffset:"-=12", repeat:-1, ease:Linear.easeNone,yoyo:false});
// TweenMax.to("#path2651_copy2", 0.2, {strokeDashoffset:"-=6", repeat:-1, ease:Linear.easeNone});

// var dcTl = new TimelineMax({paused:false, onUpdate:adjustUI, repeat:-1, yoyo:true});
// dcTl
// .to("#path2651_copy2", 0.2, {strokeDasharray:"2,4", ease:Linear.easeNone})
// .to("#path2651_copy2", 0.2, {strokeDashoffset:"-=6", ease:Linear.easeNone})