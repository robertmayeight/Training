xhr = new XMLHttpRequest();
xhr.open("GET","miniManual.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);

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

TweenMax.set([path9380_copy, "#path5309-4-2_copy",path5199_copy], {autoAlpha:0})
var mainTl = new TimelineMax({paused:true, onUpdate:adjustUI, repeat:0});
mainTl
.to(schematic,1,{x:-36, y:-48, scaleX:2.000000000000001, scaleY:2.000000000000001, transformOrigin: "50% 50%",ease:Power0.easeNone})
.from(['#text4183'],1, {autoAlpha:0})


.set([path9364_copy], {stroke:red})
.staggerFromTo([path9364_copy], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path9368_copy], {stroke:red})
.to([path9368,path9368_copy], .5, {rotation:34, transformOrigin: "0% 100%",ease:Power0.easeNone})

.set([path9364_copy], {stroke:red})
.staggerFromTo([path9368_copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path10954_copy], {stroke:red})
.staggerFromTo([path10954_copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set([path9372_copy], {stroke:red})
.staggerFromTo([path9372_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path9378_copy], {stroke:red})
.staggerFromTo([path9378_copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set([path9382_copy], {stroke:red})
.staggerFromTo([path9382_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path9384_copy], {stroke:red})
.staggerFromTo([path9384_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path10958_copy], {stroke:red})
.staggerFromTo([path10958_copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set([path5253_copy], {stroke:red})
.staggerFromTo([path5253_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()


.to([path5247,path5247_copy], .5, {y:5, ease:Power0.easeNone})
.set([path5247_copy], {stroke:red})
.staggerFromTo([path5247_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path9408_copy], {stroke:red})
.staggerFromTo([path9408_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path9448_copy], {stroke:red})
.staggerFromTo([path9448_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path5251_copy], {stroke:red})
.staggerFromTo([path5251_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()


//Neutral to Motor Circuit
.from(['#text2'],1, {autoAlpha:0})

.set([path5333_copy], {stroke:black})
.staggerFromTo([path5333_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path5331_copy], {stroke:black})
.staggerFromTo([path5331_copy], .6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set([path5329_copy], {stroke:black})
.staggerFromTo([path5329_copy], 1.6, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.addPause()

.set([path93789_copy], {stroke:black})
.staggerFromTo([path93789_copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set([path5327_copy], {stroke:black})
.staggerFromTo([path5327_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

.set([path10945_copy], {stroke:orange})
.set([path5241_copy], {stroke:black})
.set([path5239_copy], {stroke:orange})
.staggerFromTo([path5241_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
.staggerFromTo([path10945_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},"-=.5")
.staggerFromTo([path5239_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},"-=.5")
.addPause()

//Move centrifigal switch
.to([path5251,path5251_copy,path5339,path5339_copy],1, {rotation:20})
.to([path5199],1, {x:-6},"-=1")
.set([path5239_copy, ], {stroke:black})
.to([path5247,path5247_copy], .5, {y:0, ease:Power0.easeNone})
.set([path5247_copy], {stroke:black})



// .set(text0, {text:"Power Cord", className:"h3", x:530, y:-193}).to([text0],1, {autoAlpha:1})
// .set([receptacleBorder_copy], {stroke:red})
// .staggerFromTo([receptacleBorder_copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .addPause()
// .to(['#text0'],1, {autoAlpha:0})
// .to([receptacleBorder_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

// .set(text1, {text:"Long prong is neutral.", className:"h3 blackBg", x:622, y:-186}).to([text1],1, {autoAlpha:1})
// .set([path4425_copy], {stroke:red})
// .staggerFromTo([path4425_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .addPause()
// .to(['#text1'],1, {autoAlpha:0})
// .to([path4425_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

// .set(text2, {text:"Short prong is L1.", className:"h3 blackBg", x:348, y:-188}).to([text2],1, {autoAlpha:1})
// .set([path36_copy], {stroke:red})
// .staggerFromTo([path36_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .addPause()
// .to(['#text2'],1, {autoAlpha:0})
// .to([path36_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

// .set(text3, {text:"GND", className:"h3 blackBg", x:617, y:-119}).to([text3],1, {autoAlpha:1})
// .set([path32_copy], {stroke:red})
// .staggerFromTo([path32_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .addPause()
// .set(text7, {text:"GND does not operate loads.", className:"h3 blackBg", x:156, y:-174}).to([text7],1, {autoAlpha:1})
// .addPause()
// .to(['#text3',text7],1, {autoAlpha:0})
// .to([path32_copy], .5, {drawSVG: '0%', ease: Power0.easeNone},"-=1")

// .set(text4, {text:"L1", className:"h3 blackBg", x:485, y:-142}).to([text4],1, {autoAlpha:1})
// .set([path2783_copy], {stroke:red})
// .staggerFromTo([path2783_copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path3420_copy], {stroke:red})
// .staggerFromTo([path3420_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text5, {text:"Female Connector", className:"h3 blackBg", x:209, y:173}).to([text5],1, {autoAlpha:1})
// .addPause()

// .to(['#text5',text4],1, {autoAlpha:0})
// .to(schematic,1,{x:222, y:-315, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone})
// .set([path2775_copy], {stroke:red})
// .staggerFromTo([path2775_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text6, {text:"Male Connector", className:"h3 blackBg", x:211, y:-9}).to([text6],1, {autoAlpha:1})
// .set(text8, {text:"Component and connector<br>locator found on mini manual.<br>", className:"h3 blackBg", x:473, y:-181}).to([text8],1, {autoAlpha:1})
// .from(['#diagram'],1, {autoAlpha:0},"-=1")
// .addPause()
// .to(['#text8'],1, {autoAlpha:0})
// .staggerFromTo([diagram_callOut1], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text9, {text:"Connector location with pin out.<br>", className:"h3 blackBg", x:466, y:70}).to([text9],1, {autoAlpha:1})
// .addPause()

// .to([text6,'#text8',text9,diagram],1, {autoAlpha:0})
// .set([path3424_copy], {stroke:red})
// .staggerFromTo([path3424_copy], 1.2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .staggerFromTo([path2691_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .staggerFromTo([tcBlade_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

// .set(text10, {text:"<center>Temperature Control<br>SPST Temperature Controlled Switch</center>", className:"h3 blackBg", x:57, y:86}).to([text10],1, {autoAlpha:1})
// .addPause()
// .to(['#text10'],1, {autoAlpha:0})
// .set(text11, {text:"Single Pole", className:"h3 blackBg", x:77, y:86})
// .add(function(){path8.setAttribute("d", "M578.8240051269531 449.1628646850586 L616.9003295898438 516.8453674316406");path8.style.strokeWidth = 3; path8.style.stroke = black;})
// .from(path8, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .to([text11],1, {autoAlpha:1},"-=1")
// .addPause()

// .set(text12, {text:"Single Throw", className:"h3 blackBg", x:316, y:106})
// .add(function(){path7.setAttribute("d", "M689.8240051269531 467.1628646850586 L640.9003295898438 513.8453674316406");path7.style.strokeWidth = 3; path7.style.stroke = black;})
// .from(path7, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .to([text12],1, {autoAlpha:1},"-=1")
// .addPause()

// .set(text13, {text:"Pole below dot indicates switch<br>closes on temperature rise.<br>", className:"h3 blackBg", x:306, y:187}).to([text13],1, {autoAlpha:1})
// .addPause()

// .to([text11,text12,text13,path8,path7],1, {autoAlpha:0})
// .set(["#path178-2_copy"], {stroke:red}).staggerFromTo(["#path178-2_copy"], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path_164_copy], {stroke:red}).staggerFromTo([path_164_copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text15, {text:"Defrost Timer", className:"h3 blackBg", x:292, y:1}).to([text15],1, {autoAlpha:1})
// .addPause()
// .to(['#text15',path_164_copy],1, {autoAlpha:0})

// .set([path296_copy], {stroke:orange}).staggerFromTo([path296_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text16, {text:"Timer Motor", className:"h3 blackBg", x:306, y:203}).to([text16],1, {autoAlpha:1})
// .addPause()

// .set(text17, {text:"Represents infinite resistance.", className:"h3 blackBg", x:418, y:100})
// .add(function(){path9.setAttribute("d", "M792.8240051269531 456.1628646850586 L740.9003295898438 493.8453674316406");path9.style.strokeWidth = 3; path9.style.stroke = black;})
// .from(path9, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .to([text17],1, {autoAlpha:1},"-=1")
// .addPause()

// .to(['#text16',text17,path9],1, {autoAlpha:0})
// .set([path168_copy], {stroke:blue}).staggerFromTo([path168_copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path1414_copy], {stroke:blue}).staggerFromTo([path1414_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path294_copy], {stroke:blue}).staggerFromTo([path294_copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path3946_copy], {stroke:blue}).staggerFromTo([path3946_copy], .25, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .to(schematic,1,{x:168, y:-442, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone})
// .set([path1101_copy], {stroke:blue}).staggerFromTo([path1101_copy], .3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path1099_copy], {stroke:blue}).staggerFromTo([path1099_copy], .4, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

// .set([path1116_copy], {stroke:blue}).staggerFromTo([path1116_copy], 2.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text18, {text:"Neutral", className:"h3 blackBg", x:565, y:-272}).to([text18],1, {autoAlpha:1})
// .addPause()

// .to(['#text18'],1, {autoAlpha:0})
// .to(schematic,1,{x:222, y:-315, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone, onComplete: updateLineNumber, onCompleteParams:[new Error().lineNumber]},"+=0")

// .set([path1077_copy], {stroke:red}).staggerFromTo([path1077_copy], .7, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone})
// .set(text19, {text:"Internal Timer Connection", className:"h3 blackBg", x:22, y:113}).to([text19],1, {autoAlpha:1})
// .addPause()

// .to(['#text19'],1, {autoAlpha:0})
// .set([defrostControlWiper_copy], {stroke:red}).staggerFromTo([defrostControlWiper_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text20, {text:"<center>Timer Switch<br>SPDT<c>", className:"h3 blackBg", x:233, y:-23}).to([text20],1, {autoAlpha:1})

// .to([defrostControlWiper,defrostControlWiper_copy],1, {rotation:-30})
// .to([defrostControlWiper,defrostControlWiper_copy],1, {rotation:0},"+=1")
// .to(['#text20'],1, {autoAlpha:0})

// .to(['#text19'],1, {autoAlpha:0})
// .set(["#path162-5_copy"], {stroke:red}).staggerFromTo(["#path162-5_copy"], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(["#path1583-6_copy"], {stroke:red}).staggerFromTo(["#path1583-6_copy"], .7, {drawSVG:'100% 100%'}, {drawSVG: '100% 00%', ease: Power0.easeNone})
// .set(["#path1587-7_copy"], {stroke:orange}).staggerFromTo(["#path1587-7_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text21, {text:"Evaporator Fan Motor", className:"h3 blackBg", x:434, y:-98}).to([text21],1, {autoAlpha:1})
// .addPause()

// .set(text22, {text:"Infinite Resistance", className:"h3 blackBg", x:619, y:16})
// .add(function(){path10.setAttribute("d", "M1090.8240051269531 353.1628646850586 L1090.9003295898438 311.8453674316406 943.5032653808594 311.6350555419922");path10.style.strokeWidth = 3; path10.style.stroke = black;})
// .from(path10, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .to([text22],1, {autoAlpha:1},"-=1")
// .addPause()
// .to([text22,path10,text21],1, {autoAlpha:0})

// .set([path1587_copy], {stroke:blue}).staggerFromTo([path1587_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text23, {text:"Neutral", className:"h3 blackBg", x:881, y:4}).to([text23],1, {autoAlpha:1})
// .addPause()

// .to(['#text23'],1, {autoAlpha:0})
// .set([path3954_copy], {stroke:red}).staggerFromTo([path3954_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path3950_copy], {stroke:red}).staggerFromTo([path3950_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path1366_copy], {stroke:red}).staggerFromTo([path1366_copy],1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(["#path1370-4_copy"], {stroke:orange}).staggerFromTo(["#path1370-4_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text24, {text:"Condenser Fan Motor", className:"h3 blackBg", x:685, y:-185}).to([text24],1, {autoAlpha:1})
// .addPause()
// .set(text25, {text:"53 Ω", className:"h3 blackBg", x:646, y:-85})
// .add(function(){path11.setAttribute("d", "M1047.8240051269531 256.1628646850586 L1047.9003295898438 220.84536743164062 1155.5032653808594 219.6350555419922");path11.style.strokeWidth = 3; path11.style.stroke = black;})
// .from(path11, .5, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})
// .to([text25],1, {autoAlpha:1},"-=1")
// .addPause()
// .to([text25,text24,path11],1, {autoAlpha:0})
// .set([path1370_copy], {stroke:blue}).staggerFromTo([path1370_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text26, {text:"Neutral", className:"h3 blackBg", x:880, y:-142}).to([text26],1, {autoAlpha:1})
// .addPause()

// .to(['#text26'],1, {autoAlpha:0})
// .to(schematic,1,{x:177, y:-436, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone},"+-=1")

// .set([path2801_copy], {stroke:red}).staggerFromTo([path2801_copy], 1.1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path90_copy], {stroke:red}).staggerFromTo([path90_copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text27, {text:"Combo Device", className:"h3 blackBg", x:518, y:-225}).to([text27],1, {autoAlpha:1})
// .addPause()
// .to([path90_copy,text27],1, {autoAlpha:0})

// .set([path2792_copy], {stroke:red}).staggerFromTo([path2792_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text28, {text:"Heater", className:"h3 blackBg", x:583, y:-210}).to([text28],1, {autoAlpha:1})
// .addPause()

// .set(text29, {text:"Heats overload if<br>compressor stalls.<br>", className:"h3 blackBg", x:490, y:-126}).to([text29],1, {autoAlpha:1})
// .addPause()

// .to([text28,text29],1, {autoAlpha:0})
// .set([path2803_copy], {stroke:red}).staggerFromTo([path2803_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path116_copy], {stroke:red}).staggerFromTo([path116_copy], .5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text30, {text:"Overload", className:"h3 blackBg", x:606, y:-133}).to([text30],1, {autoAlpha:1})
// .addPause()

// .set(text31, {text:"Protects compressor on stall.<br>", className:"h3 blackBg", x:509, y:-87}).to([text31],1, {autoAlpha:1})
// .addPause()

// .to([text30,text31],1, {autoAlpha:0})
// .set([path142_copy], {stroke:red}).staggerFromTo([path142_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path2479_copy,path2477_copy], {stroke:red}).staggerFromTo([path2479_copy,path2477_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)


// .set([path1094_copy], {stroke:red}).staggerFromTo([path1094_copy], 1.5, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text32, {text:"Compressor", className:"h3 blackBg", x:723, y:-206}).to([text32],1, {autoAlpha:1})
// .addPause()

// .to([path1094_copy,text32],1, {autoAlpha:0})

// .set([path1117_copy], {stroke:blue}).staggerFromTo([path1117_copy], 1.7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path1177_copy], {stroke:blue}).staggerFromTo([path1177_copy], .1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path1179_copy], {stroke:blue}).staggerFromTo([path1179_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path1956_copy], {stroke:orange,strokeWidth:1}).staggerFromTo([path1956_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})

// .set(text33, {text:"Run Winding", className:"h3 blackBg", x:555, y:-120}).to([text33],1, {autoAlpha:1})
// .addPause()

// .to(['#text33'],1, {autoAlpha:0})
// .set([path1606_copy], {stroke:blue}).staggerFromTo([path1606_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text34, {text:"<center>PTC Resistor<br>Positive Temperature Coefficient.</center>", className:"h3 blackBg", x:435, y:-4}).to([text34],1, {autoAlpha:1})
// .addPause()

// .set(text35, {text:"Low resistance initially. As temperature<br>increases, resistance goes up.<br>", className:"h3 blackBg", x:410, y:74}).to([text35],1, {autoAlpha:1})
// .addPause()

// .set(text36, {text:"Initial low resistance bypasses capacitor.", className:"h3 blackBg", x:79, y:-61}).to([text36],1, {autoAlpha:1})
// .addPause()

// .to([text34,text35,text36],1, {autoAlpha:0})

// .set([path3959_copy], {stroke:blue}).staggerFromTo([path3959_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(["#path1132-2_copy"], {stroke:yellow, strokeWidth:1.1}).staggerFromTo(["#path1132-2_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text38, {text:"Run Winding", className:"h3 blackBg", x:657, y:-65}).to([text38],1, {autoAlpha:1})
// .addPause()
// .to(['#text38'],1, {autoAlpha:0})


// .set(text37, {text:"After PTC heats up, current<br>flows through the capacitor.<br>", className:"h3 blackBg", x:385, y:-150}).to([text37],1, {autoAlpha:1})
// .to(['#path1606_copy'],1, {stroke:black})
// .set([path3963_copy,path3961_copy], {stroke:blue}).staggerFromTo([path3963_copy,path3961_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path3965_copy], {stroke:blue}).staggerFromTo([path3965_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .addPause()
// .to(['#text37'],1, {autoAlpha:0})

// .to(schematic,2,{x:169, y:-135, scaleX:1.8415725617280227, scaleY:1.8415725617280227, transformOrigin: "50% 50%",ease:Power0.easeNone})
// .to([defrostControlWiper,defrostControlWiper_copy],1, {rotation:-30})
// .to(['#path162-5_copy',path3954_copy,'#path1583-6_copy','#path1587-7_copy',path1587_copy],1, {autoAlpha:0})
// .set([path2750_copy], {stroke:red}).staggerFromTo([path2750_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(["#heater-0_copy"], {stroke:orange}).staggerFromTo(["#heater-0_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text39, {text:"Defrost Heater", className:"h3 blackBg", x:451, y:-191}).to([text39],1, {autoAlpha:1})
// .addPause()
// .to(['#text39'],1, {autoAlpha:0})

// .set([path2773_copy], {stroke:blue}).staggerFromTo([path2773_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.2)
// .set([path334_copy], {stroke:blue}).staggerFromTo([path334_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text40, {text:"Defrost Thermostat", className:"h3 blackBg", x:638, y:-191}).to([text40],1, {autoAlpha:1})
// .addPause()

// .set(text41, {text:"Opens on temperature rise.", className:"h3 blackBg", x:615, y:-104}).to([text41],1, {autoAlpha:1})
// .addPause()

// .to([text40,text41],1, {autoAlpha:0})
// .set([path348_copy], {stroke:blue}).staggerFromTo([path348_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text41, {text:"Neutral", className:"h3 blackBg", x:812, y:-176}).to([text41],1, {autoAlpha:1})
// .addPause()

// .to([text41],1, {autoAlpha:0})
// .set([path182_copy], {stroke:red}).staggerFromTo([path182_copy], 1, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set([path4025_copy], {stroke:red}).staggerFromTo([path4025_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path200_copy], {stroke:red}).staggerFromTo([path200_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text42, {text:"Door Switch<br>", className:"h3 blackBg", x:257, y:23}).to([text42],1, {autoAlpha:1})
// .addPause()

// .to(['#text42'],1, {autoAlpha:0})
// .to([path200,path200_copy],1, {rotation:-25})
// .set([path40_copy], {stroke:red}).staggerFromTo([path40_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([pathfzLight_copy], {stroke:orange}).staggerFromTo([pathfzLight_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text43, {text:"FF Light", className:"h3 blackBg", x:575, y:25}).to([text43],1, {autoAlpha:1})
// .addPause()

// .to(['#text43'],1, {autoAlpha:0})
// .set(["#path40-7_copy"], {stroke:blue}).staggerFromTo(["#path40-7_copy"], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path1416_copy], {stroke:blue}).staggerFromTo([path1416_copy], .7, {drawSVG:'100% 100%'}, {drawSVG: '100% 0%', ease: Power0.easeNone},.7)
// .set(text44, {text:"Neutral", className:"h3 blackBg", x:815, y:-44}).to([text44],1, {autoAlpha:1})
// .addPause()

// .to(['#text44'],1, {autoAlpha:0})
// .set([path4023_copy], {stroke:red}).staggerFromTo([path4023_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path76_copy], {stroke:red}).staggerFromTo([path76_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path74_copy], {stroke:red}).staggerFromTo([path74_copy], 2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text45, {text:"Icemaker", className:"h3 blackBg", x:347, y:116}).to([text45],1, {autoAlpha:1})
// .addPause()

// .set([path58_copy], {stroke:blue}).staggerFromTo([path58_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path1412_copy], {stroke:blue}).staggerFromTo([path1412_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set([path1418_copy], {stroke:blue}).staggerFromTo([path1418_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text46, {text:"Neutral", className:"h3 blackBg", x:813, y:107}).to([text46],1, {autoAlpha:1})
// .addPause()

// .to([text45,text46],1, {autoAlpha:0})
// .set([path350_copy,path66_copy,path6641_copy], {stroke:red}).staggerFromTo([path350_copy,path66_copy,path6641_copy], .2, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.2)
// .set([path3913_copy], {stroke:orange}).staggerFromTo([path3913_copy], .7, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone},.7)
// .set(text47, {text:"<center>Icemaker<br>Water Valve</center>", className:"h3 blackBg", x:806, y:158}).to([text47],1, {autoAlpha:1})
// .addPause()

// .set([path6617_copy], {stroke:blue}).staggerFromTo([path6617_copy], 3, {drawSVG:'0% 0%'}, {drawSVG: '0% 100%', ease: Power0.easeNone})
// .set(text48, {text:"To Neutral", className:"h3 blackBg", x:870, y:-301}).to([text48],1, {autoAlpha:1})
// .addPause()

// .to([text47,text48],1, {autoAlpha:0})
// .to(schematic,2,{x:133, y:16, scaleX:1.031572561728022, scaleY:1.031572561728022, transformOrigin: "50% 50%",ease:Power0.easeNone})

// .add(function(){resetDrawing()})
// .set(text49, {text:"Thank you for your attention.", className:"h1 blackBg", x:240, y:-158}).to([text49],1, {autoAlpha:1})



// function resetDrawing(){
// 	var object1 = document.getElementById("schematic").getElementsByTagName("path").length
// 	var numPaths = document.getElementById("schematic").getElementsByTagName("path")
// 	for(i=0; i<object1; i++){
// 		pathSplit=numPaths[i].id.split("_");
// 		if(pathSplit[1] === "copy"){
// 			TweenMax.set([numPaths[i]], {drawSVG:'0% 0%'})
// 		}
// 	}
// }















