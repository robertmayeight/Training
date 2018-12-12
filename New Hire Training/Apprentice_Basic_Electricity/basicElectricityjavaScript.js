
var htmlBody = document.getElementsByTagName("BODY")[0];
var haierBlue = "#2b3b6c"
var slides=[];
var slide0Tl = new TimelineMax({paused:true});
timelinesArray.push(slide0Tl);

slide0 = new XMLHttpRequest();
slide0.open("GET","slide0/slide0Svg.svg",false);
slide0.overrideMimeType("image/svg+xml");
slide0.send("");
var slide0= document.getElementById("hiddenWindow").appendChild(slide0.responseXML.documentElement);
slide0.setAttribute("id","slide0")
slides.push(slide0);
TweenMax.to([slide0], .001, {className:"mainWindow"});
var currentSlide = [slide0];
var slide0Tl = new TimelineMax({paused:false, repeat:-1});

slide1 = new XMLHttpRequest();
slide1.open("GET","slide1/slide1Svg.svg",false);
slide1.overrideMimeType("image/svg+xml");
slide1.send("");
var slide1= document.getElementById("hiddenWindow").appendChild(slide1.responseXML.documentElement);
slide1.setAttribute("id","slide1")
slides.push(slide1);
var slide1Tl = new TimelineMax({paused:true});
timelinesArray.push(slide1Tl);

slide2 = new XMLHttpRequest();
slide2.open("GET","slide2/slide2Svg.svg",false);
slide2.overrideMimeType("image/svg+xml");
slide2.send("");
var slide2= document.getElementById("hiddenWindow").appendChild(slide2.responseXML.documentElement);
slide2.setAttribute("id","slide2")
slides.push(slide2);
var slide2Tl = new TimelineMax({paused:true});
timelinesArray.push(slide2Tl);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var svgWindow = document.getElementById("main");
var svg = d3.select(slide1);
function redraw(){
	var width = svgWindow.clientWidth;
	var height = svgWindow.clientHeight;
	svg
	.attr("width", width)
	 .attr("height", height);
}
redraw();
window.addEventListener("resize", redraw);


function forwardClicked(){
	console.log(currentSlide[0])
	currentSlideSplit = currentSlide[0].id.split("slide")
	nextSlideNumber = Number(currentSlideSplit[1]+1);
	var nextSlide = document.getElementById("slide" + nextSlideNumber)
	currentSlide.pop();
	currentSlide.push(nextSlide)
	console.log(currentSlide[0])
	changeSlides(nextSlide)
}

function reverseClicked(){
	console.log(currentSlide.id);
}

//Change Menu Item

var currentTimeline;

function changeSlides(slide){
	currentSlide=slide;
	if(slide.id == "slide0"){
		TweenMax.to(thisTrack, 1, {autoAlpha:0})
		// document.getElementById("colorPickerDiv").className="menuItemsHidden";
	}else{
		TweenMax.to(thisTrack, 1, {autoAlpha:1})
	}
	closeMenu();
	for(i=0; i<slides.length; i++){
		TweenMax.to(slides[i], .001, {autoAlpha:0})
		TweenMax.to([slides[i]], .001, {className:"hidden"});
	}
	var showThisSlide = document.getElementById(slide.id)
	TweenMax.to([showThisSlide], .01, {className:"mainWindow"});
	TweenMax.to(showThisSlide, 1, {autoAlpha:1, delay:.5})
	currentTimeline=slide.id;
	slideSplit=slide.id.split("slide")
	var n = slideSplit[1]
	thisTrack.src='slide' + n + '/slide' + n + '.ogg';
	thisTrack.load();
	thisTrack.play(0);
	timelinesArray[n].restart();
}
function closeMenu(){
	document.getElementById("menuItems").className="menuItemsHidden";
}



//Audio
var thisTrack = document.getElementById('music');
thisTrack.onplay = function() {
	var nameSplit = currentTimeline.split("slide")
	var slideNumber = nameSplit[1];
	timelinesArray[slideNumber].play();
};

thisTrack.onpause = function() {
	var nameSplit = currentTimeline.split("slide")
	var slideNumber = nameSplit[1];
	var tempTimeline = document.getElementById(slide2Tl)
	console.log(currentTimeline)
	timelinesArray[slideNumber].pause();
	
};

thisTrack.onseeked = function() {
	var nameSplit = currentTimeline.split("slide")
	var slideNumber = nameSplit[1];
	timelinesArray[slideNumber].time(thisTrack.currentTime);
}

thisTrack.ontimeupdate = function() {
	var nameSplit = currentTimeline.split("slide")
	var slideNumber = nameSplit[1];
	timelinesArray[slideNumber].time(thisTrack.currentTime);
};
//End Audio

var gArray = document.getElementsByTagName("g");
var tArray = document.getElementsByTagName("text");
var imageArray = document.getElementsByTagName("image");
var pathArray = document.getElementsByTagName("path");
var rectArray = document.getElementsByTagName("rect");
var objectArray=[];

for (i=0; i<gArray.length; i++) {
	objectArray.push(gArray[i]);
}
for (i=0; i<tArray.length; i++) {
	objectArray.push(tArray[i]);
}
for (i=0; i<imageArray.length; i++) {
	objectArray.push(imageArray[i]);
}
for (i=0; i<pathArray.length; i++) {
	objectArray.push(pathArray[i]);
}
for (i=0; i<rectArray.length; i++) {
	objectArray.push(rectArray[i]);
}


for (i=0; i<objectArray.length; i++) {
	objectArray[i].style.display="inline";
	groupNameSplit = objectArray[i].id.split("_");
	switch(groupNameSplit[1]) {
		case "drag":
		TweenMax.to(objectArray[i], .01, {autoAlpha:0})
	}
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

