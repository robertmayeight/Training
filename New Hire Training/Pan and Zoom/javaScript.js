xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var svg = document.getElementById("showWindow").appendChild(xhr.responseXML.documentElement);

xhr2 = new XMLHttpRequest();
xhr2.open("GET","controls.svg",false);
xhr2.overrideMimeType("image/svg+xml");
xhr2.send("");
var controls = document.getElementById("controls").appendChild(xhr2.responseXML.documentElement);

//-------------------------------------------------------------------------------------------------------
var black = "#17202a";
var white = "#fdfefe";
var red = "#e74c3c";
var yellow = "#f1c40f";
var brown = "#7b241c";
var orange = "#f39c12";
var blue = "#0080ff";
var noPaths = document.getElementById("diagram1").getElementsByTagName("path");
var noPathsLength = noPaths.length;

twelveInchOffSelected();
thirtyInchOffSelected();
TweenMax.to([layer2],.01,{autoAlpha:0});

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
	
}

//12" Broil Button
twelveInchBroil.setAttribute('onclick','twelveInchBroilSelected();');
twelveInchBroil.setAttribute('onmouseover','this.style.cursor = "pointer";');
function twelveInchBroilSelected(){
	twelveInchOffSelected();
	twelveInchOff.style.fill = white;
	twelveInchBroil.style.fill = black;
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4155],1,{stroke:red})	
}

//12" Proof Button
twelveInchProof.setAttribute('onclick','twelveInchProofSelected();');
twelveInchProof.setAttribute('onmouseover','this.style.cursor = "pointer";');
function twelveInchProofSelected(){
	twelveInchOffSelected();
	twelveInchOff.style.fill = white;
	twelveInchProof.style.fill = black;
	TweenMax.to([path12630,path5312,path5306,path5304,path4115],1,{stroke:red})	
}

/////////////////////////////////////////////////////////// 30" Oven Controls
//30" Off Button
thirtyInchOff.setAttribute('onclick','thirtyInchOffSelected();');
thirtyInchOff.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchOffSelected(){
	TweenMax.to([cleanStep1,cleanStep2],.01,{autoAlpha:0});
	TweenMax.to([layer1],.01,{autoAlpha:1});
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
}

//30" Bake Button
thirtyInchBake.setAttribute('onclick','thirtyInchBakeSelected();');
thirtyInchBake.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchBakeSelected(){
	thirtyInchOffSelected();
	thirtyInchOff.style.fill = white;
	thirtyInchBake.style.fill = black;
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4195,path4265_sw,path12702,path4128,path4126,path12862,path12864,path4308,path12868,path12866,path4271_sw,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,path85668,path5556_sw,path85445,path85736,path85738,path53360,path5563_sw,path53362,path85808,path53366],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path4265_sw,path4271_sw,path5468_sw,path5556_sw,path5627_sw,path5625_sw,path5623_sw,path5563_sw,path5038_sw,path4323_sw,path87052_sw,path5619_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBakeElement,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,thirtyInchBakeElementSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner],1,{stroke:yellow});

	TweenMax.to([path5418,path12866,path53364,path53374],1,{stroke:brown, strokeWidth:1.5});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12906,path12874,path4191,path85732,path53404,path85734,path5627_sw,path53402,path53406,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path4323_sw,path12888,path87248,path78,path12890,path12708,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392],1,{stroke:blue, strokeWidth:1.5});
}

//30" Convection Button
thirtyInchConvection.setAttribute('onclick','thirtyInchConvectionSelected();');
thirtyInchConvection.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchConvectionSelected(){
	thirtyInchOffSelected();
	thirtyInchOff.style.fill = white;
	thirtyInchConvection.style.fill = black;
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4195,path4265_sw,path12702,path4128,path4126,path4308,path12868,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,path85668,path5556_sw,path85445,path85736,path85738,path85808,path53366,path12880,path4269_sw,path12700,path12870,path53378,path5561_sw,path85443,path53368,path5565_sw],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path4265_sw,path5468_sw,path5556_sw,path5627_sw,path5625_sw,path5623_sw,path4269_sw,path4273_sw,path5561_sw,path5565_sw,path5038_sw,path87052_sw,path4323_sw,path4335_sw,path5631_sw,path5619_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBakeElement,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,thirtyInchBakeElementSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner,path4333,path4321,path5629,path5617],1,{stroke:yellow});

	TweenMax.to([path5418,path12866,path53364,path53374],1,{stroke:brown, strokeWidth:1.5});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12906,path12874,path4191,path85732,path53404,path85734,path5627_sw,path53402,path53406,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5089,path5087,path5085,path12708,path12890,path4323_sw,path87248,path12888,path12898,path4335_sw,path12896,path78,path53394,path5631_sw,path53396,path85829,path85827,path85825,path85451,path53388,path5619_sw,path1322,path87327,path87329],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392,path4635,path1336],1,{stroke:blue, strokeWidth:1.5});
}

//30" Broil Button
thirtyInchBroil.setAttribute('onclick','thirtyInchBroilSelected();');
thirtyInchBroil.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchBroilSelected(){
	thirtyInchOffSelected();
	thirtyInchOff.style.fill = white;
	thirtyInchBroil.style.fill = black;

	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4128,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,path85736,path85738,path53366,path12878,path4267_sw,path12876,path5418,path12866,path53376,path5558_sw,path85851,path53374,path53364],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path5468_sw,path5627_sw,path5625_sw,path5623_sw,path5038_sw,path4323_sw,path87052_sw,path5619_sw,path4267_sw,path4293_sw,path5558_sw,path5581_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner],1,{stroke:yellow});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12874,path4191,path85732,path85734,path5627_sw,path53402,path53406,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path4323_sw,path12888,path87248,path78,path12890,path12708,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829,path12868,path4310,path4293_sw,path12872,path85806,path5581_sw,path85811],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392],1,{stroke:blue, strokeWidth:1.5});
}

//30" Clean Button
thirtyInchClean.setAttribute('onclick','thirtyInchCleanSelected();');
thirtyInchClean.setAttribute('onmouseover','this.style.cursor = "pointer";');
function thirtyInchCleanSelected(){
	thirtyInchOffSelected();
	TweenMax.to([layer2],.01,{autoAlpha:0});
	thirtyInchOff.style.fill = white;
	thirtyInchClean.style.fill = black;
	TweenMax.to([cleanStep1,cleanStep2],.01,{autoAlpha:1});
}

cleanStep1.setAttribute('onclick','cleanStep1Selected();');
cleanStep1.setAttribute('onmouseover','this.style.cursor = "pointer";');

function cleanStep1Selected(){
	thirtyInchCleanSelected();
	TweenMax.to([layer2],.01,{autoAlpha:1});
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4128,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,path85736,path85738,path12878,path4267_sw,path12876,path5418,path12866,path53376,path5558_sw,path85851,path53374,path53364],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path5468_sw,path5627_sw,path5625_sw,path5623_sw,path5038_sw,path4323_sw,path87052_sw,path5619_sw,path4267_sw,path4293_sw,path5558_sw,path5581_sw,path4907_sw,path49434_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner,path87736,path4321,path5053,path5617],1,{stroke:yellow});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12874,path4191,path85732,path85734,path5627_sw,path53402,path53406,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path4323_sw,path12888,path87248,path78,path12890,path12708,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829,path12868,path4310,path4293_sw,path12872,path85806,path5581_sw,path85811,path4171,path4907_sw,path4931,path53366,path87291,path87309,path87305,path87044,path87295,path49434_sw,path85636,path4927,path4173,path4941,path5075],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392,path87285,path4921],1,{stroke:blue, strokeWidth:1.5});
}

cleanStep2.setAttribute('onclick','cleanStep2Selected();');
cleanStep2.setAttribute('onmouseover','this.style.cursor = "pointer";');

function cleanStep2Selected(){
	TweenMax.to([layer2],.01,{autoAlpha:0});
	TweenMax.to([path5075],1,{rotation:60, transformOrigin: '0% 100%'})
	TweenMax.to([layer3],.01,{autoAlpha:1});
	TweenMax.to([path12630,path5312,path5306,path5304,path4115,path4145_sw,path4155,path70,path4179,path4128,path12866,path53430,path85656,path5603,path85437,path85670,path1294,path5468_sw,path1312,path85644,path85680,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,path85736,path85738,path12878,path4267_sw,path12876,path5418,path12866,path53376,path5558_sw,path85851,path53374,path53364],1,{stroke:red, strokeWidth:1.5});

	TweenMax.to([path4145_sw,path4329_sw,path4327_sw,path4331_sw,path5468_sw,path5627_sw,path5625_sw,path5623_sw,path5038_sw,path4323_sw,path87052_sw,path5619_sw,path4267_sw,path4293_sw,path5558_sw,path5581_sw,path4907_sw,path49434_sw],1,{rotation:0})

	TweenMax.to([thirtyInchOnLight,thirtyInchHeatLight,thirtyInchBroil2Element,thirtyInchBroil1Element,thirtyInchOnLightSixBurner,thirtyInchHeatLightSixBurner,thirtyInchBroil2SixBurner,thirtyInchBroil1SixBurner,path87736,path4321,path5053,path5617],1,{stroke:yellow});

	TweenMax.to([path4314,path4316,path4357,path12902,path4143,path12752,path4329_sw,path4327_sw,path12808,path5091,path5093,path12632,path4331_sw,path12904,path4193,path4289,path12874,path4191,path85732,path85734,path5627_sw,path53402,path53406,path53358,path85813,path5625_sw,path85815,path53400,path5466,path85660,path5623_sw,path49354,path85831,path85833,path53432,path53372,path53370,path5085,path5087,path5089,path4323_sw,path12888,path87248,path78,path12890,path12708,path5619_sw,path87329,path87327,path1322,path53388,path85451,path85825,path85827,path85829,path12868,path4310,path4293_sw,path12872,path85806,path5581_sw,path85811,path4171,path4907_sw,path4931,path53366,path87291,path87309,path87305,path87044,path87295,path49434_sw,path85636,path4927,path4173,path4941,path5075,path87297,path53420,path53416ss],1,{stroke:orange, strokeWidth:1.5});

	TweenMax.to([path12882,path4864,path4862,path4860,path4858,path4856,path4854,path12894,path53380,path87278,path87276,path87274,path87272,path87270,path87268,path53392,path87285,path4921],1,{stroke:blue, strokeWidth:1.5});
}
