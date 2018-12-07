var slide2Tl = new TimelineMax({paused:true});
slide2Tl

.to([battery_drag],1, {autoAlpha:1},"+=4")
// .to([box_drag],1, {autoAlpha:1})
.from(path19362, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone},"+=9")

.from(arrow1, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1},"+=6")
.to([arrowHead1_drag],.5, {autoAlpha:1})

.to([s2Text2_drag],1, {autoAlpha:1},"-=1")
.to([s2Text1_drag],1, {autoAlpha:1},"+=1")

.to([arrow1],1, {autoAlpha:0},"+=15")
.to([arrowHead1_drag],1, {autoAlpha:0},"-=1")

.from(arrow2, 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone})
.to([arrowHead2_drag],1, {autoAlpha:1})
.to([s2Text3_drag],1, {autoAlpha:1},"+=3")

.to(arrow2, 1, {autoAlpha:0},"+=27")
.to(arrowHead2_drag, 1, {autoAlpha:0},"-=1")
.to([s2Text1_drag,s2Text2_drag],1, {autoAlpha:0},"-=1")
.to([battery_drag,s2Text3_drag,path19362],1, {autoAlpha:0},"+=4")

//show battery grooup
.to([batteries_drag],1, {autoAlpha:1},"+=5.5")

.to(['#pd1_drag'],1, {autoAlpha:1},"+=3")

.from([path230951,path23095], 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1})

.to([BatteryACharges_drag],1, {autoAlpha:1},"+=11")

.from([path23357], 1, {drawSVG:"0%", immediateRender:true, ease: Power0.easeNone, delay:.1},"+=24.5")

.to([BatteryACharges_drag],1, {autoAlpha:1})



