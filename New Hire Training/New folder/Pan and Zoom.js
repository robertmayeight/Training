var $view  = document.querySelector("#view");
var $image = document.querySelector("#image");
var $reset = document.querySelector("#reset");

var firstRun = true;

var viewWidth  = window.innerWidth;
var viewHeight = window.innerHeight;

var imageWidth  = $image.width;
var imageHeight = $image.height;

var zoom = {  
  accel: 0.1, 
  chaseScale: 1,
  chaseX: 0,
  chaseY: 0,  
  min: 0.0001,
  max: 10,
  scale: 1,
  scaleFactor: 1.1
};

var pointer = {
  x: viewWidth  / 2,
  y: viewHeight / 2
};

TweenLite.set($image, { force3D: true, transformOrigin: "left top" });

var tracker = VelocityTracker.track($image, "x,y");
var transform = $image._gsTransform;

var throwTween = TweenLite.to({}, 0, {});
var resetTween = TweenLite.to({}, 0, {});

var draggable = new Draggable($image, {
  trigger: $view,
  onDrag: onDrag,
  onPress: onPress,
  onRelease: onRelease
});

init();

function init() {
  
  resetView();  
  
  $reset.addEventListener("click", resetView);
  $view.addEventListener("mousewheel", mouseWheel);
  $view.addEventListener("DOMMouseScroll", mouseWheel);  
  window.addEventListener("resize", resize);
  TweenLite.ticker.addEventListener("tick", updateZoom);
  TweenLite.set($view, { autoAlpha: 1 });
  
  firstRun = false;
}

function mouseWheel(event) {
  
  event.preventDefault();
  
  throwTween.kill();
  
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  
  var wheel = event.detail || event.deltaY || 0;
  
  if (wheel > 0) {
    zoom.chaseScale /= zoom.scaleFactor;
  } else {
    zoom.chaseScale *= zoom.scaleFactor;
  }
   
  zoom.chaseScale = clamp(zoom.chaseScale, zoom.min, zoom.max);
}

function updateZoom() {
  
  if (resetTween.isActive()) {
    return;
  }
  
  var oldZoom = zoom.scale;
  
  zoom.scale += (zoom.chaseScale - zoom.scale) * zoom.accel;
  
  var zoomDelta = zoom.scale - oldZoom;
  
  var scale = transform.scaleX;  
  var x = transform.x;
  var y = transform.y;
  
  var localX = (pointer.x - x) / scale;
  var localY = (pointer.y - y) / scale;
  
  x += -(localX * zoomDelta);
  y += -(localY * zoomDelta);
  
  x = clamp(x, -(imageWidth  * zoom.scale), viewWidth);
  y = clamp(y, -(imageHeight * zoom.scale), viewHeight);
  
  TweenLite.set($image, {
    scale: zoom.scale,
    x: x,
    y: y
  });
}

function onDrag() {
  
  zoom.chaseX = this.x;
  zoom.chaseY = this.y;
}

function onPress() {
  
  throwTween.kill();
  
  zoom.chaseX = this.x;
  zoom.chaseY = this.y;
  
  this.update();
}

function onRelease() {
    
  throwTween = ThrowPropsPlugin.to(zoom, {
      
      throwProps: {
        resistance: 2000,
        chaseX: {
          velocity: tracker.getVelocity("x"),
          min: -(imageWidth  * zoom.scale) - 100,
          max: viewWidth + 100
        },
        chaseY: {
          velocity: tracker.getVelocity("y"),
          min: -(imageHeight  * zoom.scale) - 100,
          max: viewHeight + 100
        }
      },
      onUpdate: function() {
        
        TweenLite.set($image, {
          x: zoom.chaseX,
          y: zoom.chaseY
        });
      }
    }, 2, 0.2, 0.4);
}

function resetView() {
  
  throwTween.kill();
  
  var sx = viewWidth  / imageWidth;
  var sy = viewHeight / imageHeight;
  
  var scale = Math.min(sx, sy);
  
  var x = viewWidth  / 2 - imageWidth  / 2 * scale;
  var y = viewHeight / 2 - imageHeight / 2 * scale;
  
  zoom.chaseScale = scale;
  zoom.chaseX = x;
  zoom.chaseY = y;
  zoom.scale = scale;
  
  resetTween = TweenLite.to($image, firstRun ? 0 : 0.5, {
    ease: Expo.easeOut,
    scale: scale,
    x: x,
    y: y
  });  
}

function resize() {
  viewWidth  = window.innerWidth;
  viewHeight = window.innerHeight;
}

function clamp(value, min, max) {
  return value < min ? min : (value > max ? max : value);
}