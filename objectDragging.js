
// ____________________ DRAGGABLES ______________________________________________________________________

const draggableObjects = ['pant', 'short', 'skirt', 'hat', 'hat_velvet', 'shirt', 'shoes'];

// pass a function to map
draggableObjects.map((names) => {
  console.log(names)
  dragElement(document.getElementById(names));

});

function dragElement(element) {
  var x, y;

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (element != undefined) {
    let handleDragging = element.getElementsByClassName("drag-handle")[0];
    if (handleDragging !== undefined) {
      // if present, the header is where you move the DIV from:
      handleDragging.onmousedown = dragMouseDown;
      handleDragging.ontouchstart = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      element.onmousedown = dragMouseDown;
      element.ontouchstart = dragMouseDown;
    }
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
      let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
      let touch = evt.touches[0] || evt.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
      // element.classList.add("draggin");
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
      x = e.clientX;
      y = e.clientY;

    }

    pos3 = x;
    pos4 = y;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    document.ontouchend = closeDragElement;
    document.ontouchmove = elementDrag;

  }

  function elementDrag(e) {
    e = e || window.event;
    // e.preventDefault();
    // calculate the new cursor position:
    if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
      let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
      let touch = evt.touches[0] || evt.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
      x = e.clientX;
      y = e.clientY;
    }
    pos1 = pos3 - x;
    pos2 = pos4 - y;
    pos3 = x;
    pos4 = y;
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchcancel = null;
    document.ontouchend = null;
    document.ontouchmove = null;

  }
}

// ____________________ MODAL ______________________________________________________________________
var modal = document.getElementById("myModal");

var btn = document.getElementById("aboutBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  // body.style.filter = "blur(20px)"
  // body.style.opacity="0.5"

  // -webkit-filter: blur(8px);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  // body.style.filter = "none"
  // body.style.opacity="1"

}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // body.style.filter = "none"
    // body.style.opacity="1"

  }
}

// ______________ SEX SELECTOR ______________________________________________________________________
// document.getElementById('switchING').addEventListener('click', () => {
//   const grid1 = document.querySelector("#mydiv")
//   const grid2 = document.querySelector("#mydiv2")

//   if (grid1.style.display == 'none') {
//     grid1.style.display = 'block';
//     grid2.style.display = 'none';
//   }
//   else {
//     grid1.style.display = 'none';
//     grid2.style.display = 'block';
//   }


// })

