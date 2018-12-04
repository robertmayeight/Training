xhr2 = new XMLHttpRequest();
xhr2.open("GET","controls.svg",false);
xhr2.overrideMimeType("image/svg+xml");
xhr2.send("");
var controls = document.getElementById("controls").appendChild(xhr2.responseXML.documentElement);

xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var svg = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);



// xhr3 = new XMLHttpRequest();
// xhr3.open("GET","lockAssemblyImage.svg",false);
// xhr3.overrideMimeType("image/svg+xml");
// xhr3.send("");
// var controls = document.getElementById("controls").appendChild(xhr3.responseXML.documentElement);

//-------------------------------------------------------------------------------------------------------
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

function wireClicked(wire){
	nameSplit = wire.id.split("copy");
	wire2 = document.getElementById(nameSplit[0]);
	TweenMax.to(wire2,.1,{stroke:red});
	console.log(wire2.id)
}

function overWire(wire){
	nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", ".5"); 
	pannable.disable();
}


function outWire(wire){
nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", "0");
	pannable.enable()
}

var black = "#17202a";
var white = "#fdfefe";
var red = "#e74c3c";
var yellow = "#f1c40f";
var brown = "#7b241c";
var orange = "#f39c12";
var blue = "#0080ff";
var viewBox = svg.viewBox.baseVal;
var doorLockingTl = new TimelineMax({paused:true});
	doorLockingTl
	.to([viewBox],2,{x: 162.92909240722656, y: 285.5882568359375, width: 359.3236389160156, height: 233.62274169921875})
	.from(layer1Callout4, 1, {autoAlpha:0})
	.to([path5075],1,{rotation:60})
	.to([path4927,path4173,path4941],1,{stroke:black, strokeWidth:1},"-=1")
	.to([path87736],1,{stroke:black, strokeWidth:1},"-=1")
	.to([k1],1,{stroke:yellow, strokeWidth:1.5})
	.to([path12918,path4933],1,{stroke:orange, strokeWidth:1.5},"-=1")
	.to(layer1Callout4, 1, {autoAlpha:0},"+=2.5")
	.from(layer1Callout7, 1, {autoAlpha:0})
	.to([path5077_sw],1,{rotation:0})
	.to([path5077_sw,path4923,path4175,path4929],1,{stroke:orange, strokeWidth:1.5})
	.to([path87738],1,{stroke:yellow, strokeWidth:1.5},"-=1")
	.to(layer1Callout7, 1, {autoAlpha:0},"+=1")

	var k1EnergizedTl = new TimelineMax({paused:true});
	k1EnergizedTl
	.to([viewBox],2,{x: 210.81134033203125, y: 203.56776428222656, width: 207.94192504882812, height: 135.19834899902344})
	.from(layer1Callout3, 1, {autoAlpha:0})
	.to([path4345_sw],1,{rotation:0},"+=1")
	.to([path4345_sw,path12908,path12910],1,{stroke:orange, strokeWidth:1.5},"-=1")
	.to(layer1Callout3, 1, {autoAlpha:0})
	.to([viewBox],2,{x: 327.1922607421875, y: 319.9107666015625, width: 249.53030395507812, height: 162.23802185058594},"=+1")
	.from(layer1Callout2, 1, {autoAlpha:0},"+=1")
	.to([path5102],1,{rotation:60, transformOrigin: "0% 100%"})
	.to([path4169,path4181,path12884,path8713,path5105,path4637,path12648,path12666,path12672,path12674,path5115_sw,path5168,path12650,path4915_sw,path5170,path56,path86978_sw,path5172,path4211_sw],1,{stroke:black, strokeWidth:1},"-=1")
	.to([path5083,path4159,path5102,path87250,path87248,path12888],1,{stroke:orange, strokeWidth:1.5})
	.to([path4321],1,{stroke:yellow, strokeWidth:1.5},"-=1")
	.to([path8713,path4637,path5105],1,{stroke:black, strokeWidth:1},"-=1")
	.to(layer1Callout2, 1, {autoAlpha:0},"+=2.5")
	.from(layer1Callout1, 1, {autoAlpha:0},"+=1")
	.to([path86964_sw],1,{rotation:40, transformOrigin: "0% 100%"})
	.to([path5166,path8681,path12844,path12814,path87010_sw,path4655,path4655,path232_sw],1,{stroke:black, strokeWidth:1},"-=1")
	.to(layer1Callout1, 1, {autoAlpha:0},"+=2.5")

	var cleanTimerTl = new TimelineMax({paused:true});
	cleanTimerTl
	.to([viewBox],2,{x: 168.06166076660156, y: 262.8480224609375, width: 270.7574768066406, height: 176.0393676757812})
	.from(layer1Callout8, 1, {autoAlpha:0})
	.to([path4810],1,{rotation:60, transformOrigin: "0% 100%"})
	.to([path4812,k1],1,{stroke:black, strokeWidth:1},"-=1")
	.to(layer1Callout8, 1, {autoAlpha:0},"=+2.5")
	.to([viewBox],2,{x: 348.8856506347656, y: 340.9091796875, width: 188.96376037597656, height: 122.85924530029297})
	.from(layer1Callout9, 1, {autoAlpha:0})
	.to([path5102],1,{rotation:0, transformOrigin: "0% 100%"})
	.to([path4321,path12888,path87248,path87250],1,{stroke:black, strokeWidth:1},"-=1")
	.to([path4169,path4181,path12884,path8713,path5105,path4637,path12648,path12666,path12672,path12674,path5115_sw,path5168,path12650,path4915_sw,path5170,path56,path86978_sw,path5172,path4211_sw,path5102],1,{stroke:orange, strokeWidth:1.5})
	.to(layer1Callout9, 1, {autoAlpha:0},"=+2.5")
	.from(layer1Callout10, 1, {autoAlpha:0})
	.to([path86964_sw],1,{rotation:0, transformOrigin: "0% 100%"})
	.to([path5166,path8681,path12844,path12814,path87010_sw,path4655,path4655,path232_sw],1,{stroke:orange, strokeWidth:1.5})
	.to(layer1Callout10, 1, {autoAlpha:0},"=+1.5")
	.to([viewBox],2,{x: 160.86236572265625, y: 178.5181427001953, width: 272.1078186035156, height: 176.9173126220703})
	.from(layer1Callout11, 1, {autoAlpha:0})
	.to([path4345_sw],1,{rotation:-30, transformOrigin: "0% 100%"})
	.to([path4345_sw],1,{stroke:black, strokeWidth:1})
	.to(layer1Callout11, 1, {autoAlpha:0},"+=1")


	var doorUnlockTl = new TimelineMax({paused:true});
	doorUnlockTl
	.to([viewBox],2,{x: 154.24647521972656, y: 274.21136474609375, width: 391.83526611328125, height: 254.7609405517578})
	.from(layer1Callout12, 1, {autoAlpha:0})
	.to([path5038_sw],1,{rotation:0, transformOrigin: "0% 100%"})
	.to([path4925,path5893_sw],1,{stroke:orange, strokeWidth:1.5})
	.to(layer1Callout12, 1, {autoAlpha:0},"+=1.5")
	.from(layer1Callout13, 1, {autoAlpha:0})
	.to([path5893_sw],1,{rotation:0, transformOrigin: "0% 100%"})
	.to([path5893_sw,path5013,path4927,path87736],1,{stroke:orange, strokeWidth:1.5},"-=1")
	.to([path87736],1,{stroke:yellow, strokeWidth:1.5},"-=1")
	.to(layer1Callout13, 1, {autoAlpha:0},"+=1.5")
	.from(layer1Callout14, 1, {autoAlpha:0})
	.to(layer1Callout14, 1, {autoAlpha:0},"+=1.5")
	// .to([viewBox],2,{x: 182.32618713378906, y: 304.8261413574219, width: 326.5293884277344, height: 212.30078125})
	.from(layer1Callout15, 1, {autoAlpha:0})
	.to([path5077_sw],1,{rotation:30, transformOrigin: "0% 100%"})
	.to([path4175,path4929,path87738,path4923,path5054,path5038_sw,path4925,path5893_sw,path5013,path4927,path87736],1,{stroke:black, strokeWidth:1},"-=1")
	.to(layer1Callout15, 1, {autoAlpha:0},"+=1")
	.from(layer1Callout16, 1, {autoAlpha:0})
	.from(layer1Callout17, 1, {autoAlpha:0},"+=1")
	.to([layer1Callout16,layer1Callout17], 1, {autoAlpha:0},"+=1.5")
	.from([layer1Callout18], 1, {autoAlpha:0})
	.to([path5075],1,{rotation:0, transformOrigin: "0% 100%"})
	.to([layer1Callout18], 1, {autoAlpha:0},"+=1")

twelveInchOffSelected();
thirtyInchOffSelected();

//12" Off Button
twelveInchOff.setAttribute('onclick','twelveInchOffSelected();');
twelveInchOff.setAttribute('onmouseover','this.style.cursor = "pointer";');
function twelveInchOffSelected(){
	for(i=0; i<noPathsLength; i++){
		TweenMax.to(noPaths[i],1,{stroke:black, strokeWidth:1});
		pathType=noPaths[i].id;
		pathTypeSwitch=pathType.split("_")
		if(pathTypeSwitch[1] == "sw"){
			TweenMax.to(noPaths[i],1,{rotation:-30})
		}
	}
	twelveInchOff.style.fill = black;
	twelveInchBake.style.fill = white;
	twelveInchBroil.style.fill = white;
	twelveInchProof.style.fill = white;

}

//12" Bake Button
twelveInchBake.setAttribute('onclick','twelveInchBakeSelected();');
twelveInchBake.setAttribute('onmouseover','this.style.cursor = "pointer";');
function twelveInchBakeSelected(){
	twelveInchOffSelected();
	twelveInchOff.style.fill = white;
	twelveInchBake.style.fill = black;
	TweenMax.to([path12630,path4387,path5458,path12842,path4394,path4401_sw,path4433_sw,path12816,path4177,path4419,path4390,path12840,path12816,path4177,path4419,path53430,path6410,path12820,path4429_sw,path12822,path12826,path85630,path85654,path1566,path6185,path5482_sw,path49362,path85642,path6188,path87246_sw,path6183,path49366,path87242_sw,path49368,path49372,path49386,path3795],1,{stroke:red, strokeWidth:1.5})
	TweenMax.to([path4457,path6425,path4457,path6433,path4548,path4435,path6304,path1494,path6212,path87232,path6267],1,{stroke:yellow, strokeWidth:1.5})
	TweenMax.to([path12850,path4488,path4486,path4570_sw,path12852,path4582_sw,path12750,path4572_sw,path12854,path4596,path232_sw,path12818,path4655,path8681,path5166,path12844,path86964_sw,path4183,path5081,path5083,path5085,path5087,path5089,path5091,path5093,path12632,path4490,path12830,path49396,path6289,path49376,path49378,path3733,path85658,path87152_sw,path6408,path49400,path87154_sw,path1328,path49364,path87188_sw,path1492_sw,path49398,path49390,path87333,path87084_sw,path85648,path85821,path85823,path85825,path85827,path85829,path85831,path85833,path53432,path3781],1,{stroke:orange, strokeWidth:1.5})
	TweenMax.to([path12824,path4494,path49370,path6297],1,{stroke:brown, strokeWidth:1.5})
	TweenMax.to([path4401_sw,path4433_sw,path4570_sw,path4582_sw,path4572_sw,path232_sw,path86964_sw,path4429_sw,path5482_sw,path87246_sw,path87242_sw,path87152_sw,path87154_sw,path87188_sw,path1492_sw,path87084_sw],1,{rotation:0})
}

//12" Broil Button
twelveInchBroil.setAttribute('onclick','twelveInchBroilSelected();');
twelveInchBroil.setAttribute('onmouseover','this.style.cursor = "pointer";');
function twelveInchBroilSelected(){
	twelveInchOffSelected();
	twelveInchOff.style.fill = white;
	twelveInchBroil.style.fill = black;
	TweenMax.to([path12630,path4387,path5458,path12842,path4394,path4401_sw,path4433_sw,path12816,path4177,path4419,path4390,path12840,path12816,path4177,path4419,path53430,path6410,path12820,path4429_sw,path12822,path12826,path85630,path85654,path1566,path6185,path5482_sw,path49362,path85642,path6188,path6183,path49372,path49388,path49380,path87244_sw,path49370,path6297,path49382],1,{stroke:red, strokeWidth:1.5})
	TweenMax.to([path4457,path6425,path4457,path6433,path4548,path4435,path6304,path1494,path87232,path6267],1,{stroke:yellow, strokeWidth:1.5})
	TweenMax.to([path12850,path4488,path4486,path4570_sw,path12852,path4582_sw,path12750,path4572_sw,path12854,path4596,path232_sw,path12818,path4655,path8681,path5166,path12844,path86964_sw,path4183,path5081,path5083,path5085,path5087,path5089,path5091,path5093,path12632,path4490,path12830,path6289,path49376,path49378,path3733,path85658,path87152_sw,path6408,path49400,path87154_sw,path1328,path49364,path87188_sw,path1492_sw,path49398,path49390,path87333,path87084_sw,path85648,path85821,path85823,path85825,path85827,path85829,path85831,path85833,path53432,path3781,path87220_sw,path6291,path6293,path49372],1,{stroke:orange, strokeWidth:1.5})
	TweenMax.to([path12824,path4494],1,{stroke:brown, strokeWidth:1.5})
	TweenMax.to([path4401_sw,path4433_sw,path4570_sw,path4582_sw,path4572_sw,path232_sw,path86964_sw,path4429_sw,path5482_sw,path87152_sw,path87154_sw,path87188_sw,path1492_sw,path87084_sw,path87244_sw,path87220_sw],1,{rotation:0})
}

//12" Proof Button
twelveInchProof.setAttribute('onclick','twelveInchProofSelected();');
twelveInchProof.setAttribute('onmouseover','this.style.cursor = "pointer";');
function twelveInchProofSelected(){
	twelveInchOffSelected();
	twelveInchOff.style.fill = white;
	twelveInchProof.style.fill = black;
	TweenMax.to([path12630,path4387,path5458,path12842,path4394,path4401_sw,path4433_sw,path12816,path4177,path4419,path4390,path12840,path12816,path4177,path4419,path53430,path6410,path12820,path4429_sw,path12822,path12826,path85630,path85654,path1566,path6185,path5482_sw,path49362,path85642,path6188,path6183,path49372,path49388],1,{stroke:red, strokeWidth:1.5})
	TweenMax.to([path4457,path6425,path4457,path6433,path4548,path4435,path6304,path1494,path87232,path6267],1,{stroke:yellow, strokeWidth:1.5})
	TweenMax.to([path12850,path4488,path4486,path4570_sw,path12852,path4582_sw,path12750,path4572_sw,path12854,path4596,path232_sw,path12818,path4655,path8681,path5166,path12844,path86964_sw,path4183,path5081,path5083,path5085,path5087,path5089,path5091,path5093,path12632,path4490,path12830,path6289,path49376,path49378,path3733,path85658,path87152_sw,path6408,path49400,path87154_sw,path1328,path49364,path87188_sw,path1492_sw,path49398,path49390,path87333,path87084_sw,path85648,path85821,path85823,path85825,path85827,path85829,path85831,path85833,path53432,path3781,path87220_sw,path6291,path6293,path49372],1,{stroke:orange, strokeWidth:1.5})
	TweenMax.to([path12824,path4494],1,{stroke:brown, strokeWidth:1.5})
	TweenMax.to([path4401_sw,path4433_sw,path4570_sw,path4582_sw,path4572_sw,path232_sw,path86964_sw,path4429_sw,path5482_sw,path87152_sw,path87154_sw,path87188_sw,path1492_sw,path87084_sw,path87220_sw],1,{rotation:0})
}

/////////////////////////////////////////////////////////// 30" Oven Controls
//30" Off Button
thirtyInchOff.setAttribute('onclick','thirtyInchOffSelected();');
thirtyInchOff.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchOffSelected(){
	doorLockingTl.play(0).pause();
	k1EnergizedTl.play(0).pause();
	TweenMax.to([cleanStep1,cleanStep2,cleanStep3,cleanStep4],.01,{autoAlpha:0});
	TweenMax.to([path5075],1,{rotation:0, transformOrigin: '0% 100%'})
	for(i=0; i<noPathsLength; i++){
		noPaths[i].style['stroke-linecap']="round";
		noPaths[i].style['stroke']="black";
		pathType=noPaths[i].id;
		pathTypeSwitch=pathType.split("_")
		if(pathTypeSwitch[1] == "sw"){
			TweenMax.to(noPaths[i],1,{rotation:-30})
		}
	}
	thirtyInchOff.style.fill = black;
	thirtyInchBake.style.fill = white;
	thirtyInchConvection.style.fill = white;
	thirtyInchBroil.style.fill = white;
	thirtyInchClean.style.fill = white;
	TweenMax.to(path86964_sw,1,{rotation:0})
}

//30" Bake Button
thirtyInchBake.setAttribute('onclick','thirtyInchBakeSelected();');
thirtyInchBake.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchBakeSelected(){
	thirtyInchOffSelected();
	thirtyInchOff.style.fill = white;
	thirtyInchBake.style.fill = black;
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4195,path4265_sw,path12702,path4128,path4126,path12862,path12864,path4308,path12868,path12866,path4271_sw,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,path85668,path5556_sw,path85445,path85736,path85738,path53360,path5563_sw,path53362,path85808,path53366],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path86964_sw,path5166,path8681,path12844,path12814,path4655,path4655,path232_sw,path87010_sw],1,{stroke:black, strokeWidth:1});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path4265_sw,path4271_sw,path5468_sw,path5556_sw,path5627_sw,path5625_sw,path5623_sw,path5563_sw,path5038_sw,path4323_sw,path87052_sw,path5619_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBakeElement,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchBakeElementSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner],1,{stroke:yellow});

	TweenMax.to([path5418,path12866,path53364,path53374],1,{stroke:brown, strokeWidth:1.5});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12906,path12874,path4191,path85732,path53404,path85734,path5627_sw,path53402,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path4323_sw,path12888,path87248,path78,path12890,path12708,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392],1,{stroke:blue, strokeWidth:1.5});

	TweenMax.to([path86964_sw],1,{rotation:30})
}

//30" Convection Button
thirtyInchConvection.setAttribute('onclick','thirtyInchConvectionSelected();');
thirtyInchConvection.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchConvectionSelected(){
	thirtyInchOffSelected();
	thirtyInchOff.style.fill = white;
	thirtyInchConvection.style.fill = black;
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4195,path4265_sw,path12702,path4128,path4126,path4308,path12868,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,path85668,path5556_sw,path85445,path85736,path85738,path85808,path53366,path12880,path4269_sw,path12700,path12870,path53378,path5561_sw,path85443,path53368,path5565_sw,path4273_sw],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path4265_sw,path5468_sw,path5556_sw,path5627_sw,path5625_sw,path5623_sw,path4269_sw,path4273_sw,path5561_sw,path5565_sw,path5038_sw,path87052_sw,path4323_sw,path4335_sw,path5631_sw,path5619_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBakeElement,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchBakeElementSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner,path4333,path4321,path5629,path5617],1,{stroke:yellow});

	TweenMax.to([path5418,path12866,path53364,path53374],1,{stroke:brown, strokeWidth:1.5});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12906,path12874,path4191,path85732,path53404,path85734,path5627_sw,path53402,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5089,path5087,path5085,path12708,path12890,path4323_sw,path87248,path12888,path12898,path4335_sw,path12896,path78,path53394,path5631_sw,path53396,path85829,path85827,path85825,path85451,path53388,path5619_sw,path1322,path87327,path87329],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392,path4635,path1336],1,{stroke:blue, strokeWidth:1.5});
}

//30" Broil Button
thirtyInchBroil.setAttribute('onclick','thirtyInchBroilSelected();');
thirtyInchBroil.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchBroilSelected(){
	thirtyInchOffSelected();
	thirtyInchOff.style.fill = white;
	thirtyInchBroil.style.fill = black;

	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4128,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,path85736,path85738,path53366,path12878,path4267_sw,path12876,path5418,path12866,path53376,path5558_sw,path85851,path53374,path53364],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path5468_sw,path5627_sw,path5625_sw,path5623_sw,path5038_sw,path4323_sw,path87052_sw,path5619_sw,path4267_sw,path4293_sw,path5558_sw,path5581_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner],1,{stroke:yellow});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12874,path4191,path85732,path85734,path5627_sw,path53402,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path12888,path87248,path78,path12890,path12708,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829,path12868,path4310,path4293_sw,path12872,path85806,path5581_sw,path85811],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392],1,{stroke:blue, strokeWidth:1.5});
}

//30" Clean Button
thirtyInchClean.setAttribute('onclick','thirtyInchCleanSelected();');
thirtyInchClean.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchCleanSelected(){
	thirtyInchOffSelected();
	TweenMax.to([path4810],1,{rotation:0, transformOrigin: "0% 100%"})
	thirtyInchOff.style.fill = white;
	thirtyInchClean.style.fill = black;
	TweenMax.to([cleanStep1,cleanStep2,cleanStep3,cleanStep4],.01,{autoAlpha:1});
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4128,path12866,path12878,path4267_sw,path12876,path5418,path12866],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path5468_sw,path5625_sw,path5623_sw,path87052_sw,path5619_sw,path4267_sw,path4293_sw,path5558_sw,path5581_sw,path4907_sw,path49434_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBroil2Element,thirtyInchBroil1Element,path87736],1,{stroke:yellow});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12874,path4191,path5085,path5087,path5089,path12868,path4310,path4293_sw,path12872,path4171,path4907_sw,path4931,path4927,path4173,path4941,path5075,path5083,path4159,path5081,path4183,path12844,path12814,path87010_sw,path4655,path4655,path232_sw,path86964_sw,path254,path5102,path4169,path4181,path12884,path5166,path8681,path8713,path5105,path4637,path4935,path12648,path12666,path5168,path12650,path4915_sw,path5170,path56,path86978_sw,path5172,path4211_sw,path12672,path12674,path5115_sw],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4921,path4858,path4943,path4806,path4810,path4812],1,{stroke:blue, strokeWidth:1.5});
	TweenMax.to([path5038_sw],1,{rotation:30})
	
}

cleanStep1.setAttribute('onclick','cleanStep1Selected();');
cleanStep1.setAttribute('onmouseover','this.style.cursor = "pointer";');

function cleanStep1Selected(){
	thirtyInchCleanSelected();
	TweenMax.to([path4810],1,{rotation:0, transformOrigin: "0% 100%"})
	doorLockingTl.play(0)
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4128,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,path85736,path85738,path12878,path4267_sw,path12876,path5418,path12866,path53376,path5558_sw,path85851,path53374,path53364],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path5468_sw,path5627_sw,path5625_sw,path5623_sw,path87052_sw,path5619_sw,path4267_sw,path4293_sw,path5558_sw,path5581_sw,path4907_sw,path49434_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner,path87736,path5053,path5617],1,{stroke:yellow});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12874,path4191,path85732,path85734,path5627_sw,path53402,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path12708,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829,path12868,path4310,path4293_sw,path12872,path85806,path5581_sw,path85811,path4171,path4907_sw,path4931,path53366,path87291,path87309,path87305,path87044,path87295,path49434_sw,path85636,path4927,path4173,path4941,path5075],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392,path87285,path4921],1,{stroke:blue, strokeWidth:1.5});

	
}

cleanStep2.setAttribute('onclick','cleanStep2Selected();');
cleanStep2.setAttribute('onmouseover','this.style.cursor = "pointer";');

function cleanStep2Selected(){
	thirtyInchCleanSelected();
	TweenMax.to([path4810],1,{rotation:0, transformOrigin: "0% 100%"})
	k1EnergizedTl.play(0)
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4128,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,path85736,path85738,path12878,path4267_sw,path12876,path5418,path12866,path53376,path5558_sw,path85851,path53374,path53364],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path5468_sw,path5627_sw,path5625_sw,path5623_sw,path87052_sw,path5619_sw,path4267_sw,path4293_sw,path5558_sw,path5581_sw,path4907_sw,path49434_sw,path5077_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner,path5053,path5617,k1,path87738],1,{stroke:yellow});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12874,path4191,path85732,path85734,path5627_sw,path53402,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path12708,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829,path12868,path4310,path4293_sw,path12872,path85806,path5581_sw,path85811,path4171,path4907_sw,path4931,path53366,path87291,path87309,path87305,path87044,path87295,path49434_sw,path85636,path5075,path6388,path4933,path12918,path5077_sw,path4923,path4175,path4929,path4169,path4181,path12884,path8713,path5105,path4637],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392,path87285],1,{stroke:blue, strokeWidth:1.5});

	TweenMax.to([path87736,path4927,path4173,path4941],1,{stroke:black, strokeWidth:1});

	TweenMax.to([path5075],1,{rotation:55})
}

cleanStep3.setAttribute('onclick','cleanStep3Selected();');
cleanStep3.setAttribute('onmouseover','this.style.cursor = "pointer";');

function cleanStep3Selected(){
	thirtyInchCleanSelected();
	cleanTimerTl.play(0)
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4128,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,path85736,path85738,path12878,path4267_sw,path12876,path5418,path12866,path53376,path5558_sw,path85851,path53374,path53364],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path5468_sw,path5627_sw,path5625_sw,path5623_sw,path87052_sw,path5619_sw,path4267_sw,path4293_sw,path5558_sw,path5581_sw,path4907_sw,path49434_sw,path5077_sw,path4345_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner,path5053,path5617,k1,path87738,path4321],1,{stroke:yellow});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12874,path4191,path85732,path85734,path5627_sw,path53402,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829,path12868,path4310,path4293_sw,path12872,path85806,path5581_sw,path85811,path4171,path4907_sw,path4931,path53366,path87291,path87309,path87305,path87044,path87295,path49434_sw,path85636,path5075,path6388,path4933,path12918,path5077_sw,path4923,path4175,path4929,path12908,path4345_sw,path12910,path12888,path87248,path87250,path4321,path12888,path87248,path87250],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392,path87285],1,{stroke:blue, strokeWidth:1.5});

	TweenMax.to([path87736,path4927,path4173,path4941,path4169,path4181,path12884,path8713,path5105,path4637,path5166,path8681,path12844,path12814,path87010_sw,path4655,path4655,path232_sw,path12648,path12666,path12672,path12674,path5115_sw,path5168,path12650,path4915_sw,path5170,path56,path86978_sw,path5172,path4211_sw],1,{stroke:black, strokeWidth:1});

	TweenMax.to([path5075],1,{rotation:55})
	TweenMax.to([path5102],1,{rotation:60, transformOrigin: "0% 100%"})
	TweenMax.to([path86964_sw],1,{rotation:30, transformOrigin: "0% 100%"})
}

cleanStep4.setAttribute('onclick','cleanStep4Selected();');
cleanStep4.setAttribute('onmouseover','this.style.cursor = "pointer";');

function cleanStep4Selected(){
	thirtyInchCleanSelected();
	doorUnlockTl.play(0)
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4128,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,path85736,path85738,path12878,path4267_sw,path12876,path5418,path12866,path53376,path5558_sw,path85851,path53374,path53364],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path5468_sw,path5627_sw,path5625_sw,path5623_sw,path87052_sw,path5619_sw,path4267_sw,path4293_sw,path5558_sw,path5581_sw,path4907_sw,path49434_sw,path5077_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner,path5053,path5617,k1,path87738],1,{stroke:yellow});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12874,path4191,path85732,path85734,path5627_sw,path53402,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path12708,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829,path12868,path4310,path4293_sw,path12872,path85806,path5581_sw,path85811,path4171,path4907_sw,path53366,path87291,path87309,path87305,path87044,path87295,path49434_sw,path85636,path5075,path6388,path4933,path12918,path5077_sw,path4923,path4175,path4929,path4169,path4181,path12884,path8713,path5105,path4637,path5054,path5038_sw],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392,path87285],1,{stroke:blue, strokeWidth:1.5});

	TweenMax.to([path87736,path4927,path4173,path4941,path4931,path5075,path4933,path12918,k1,path4812,path4806,path4810,path4856,path4854,path12894],1,{stroke:black, strokeWidth:1});

	TweenMax.to([path5075],1,{rotation:55})
	TweenMax.to([path4907_sw],1,{rotation:30})
}
