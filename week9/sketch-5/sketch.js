// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js

var path;

// The mouse has to drag at least 20pt
// before the next drag event is fired:
tool.minDistance = 20;

function onMouseDown(event) {
  if (path) {
    path.selected = false;
  }
  path = new Path();
  path.strokeColor = "black";
  path.fullySelected = true;
}

function onMouseDrag(event) {
  path.add(event.point);
}

function onMouseUp(event) {
  path.selected = false;
  path.smooth();
}
// download link
function onKeyDown(event) {
  if (event.key === "s") {
    downloadAsSVG();
  }
}

function downloadAsSVG(fileName) {
  // use default name if not provided
  fileName = fileName || "output.svg";

  // create a data url of the file
  var svgData = project.exportSVG({ asString: true });
  var url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

  // create a link to the data, and "click" it
  var link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  link.click();
}
