var dragndrop = (function(){
	var myX = ''; 
	var myY = '';
	var whichArt = ''; //keeps track of the elements I am clicking and dragging

	function resetZ () { 
		var elements = document.querySelectorAll('img');
		for(var i = 0, length1 = elements.length; i < length1; i++){
			elements[i].style.zIndex = 5;
		}
	}

	function moveStart(e) {
		whichArt = e.target; //is the target I have clicked on
		//lets set the position of the element as I clicked
		myX = e.offsetX === undefined ? e.layerX : e.offsetX;
		myY = e.offsetY === undefined ? e.layerY : e.offsetY;
		resetZ();
		//now set the element I clicked on to be top on other elements
		whichArt.style.zIndex = 10;

	}

	//dragover tracks when i am dragging an and putting top of other element
	function moveDragOver(e) {
		e.preventDefault();

	}

	function moveDrop(e) {
		e.preventDefault(); 
		//now lets position the elements that I moved into it's new positions, to calculate that
		whichArt.style.left = e.pageX -myX + 'px';
		whichArt.style.top = e.pageY -myY + 'px';
	}

	function touchStart (e) {
		e.preventDefault(); //preventing the page scrolling in smaller devices
		var whichArt = e.target;
		var touch = e.touches[0];
		var moveoffsetX = whichArt.offsetLeft -touch.pageX;
 		var moveoffsetY = whichArt.offsetTop -touch.pageY;
 		resetZ();
 		whichArt.style.zIndex = 10;

 		whichArt.addEventListener('touchmove', function () {
 			var positionX = touch.pageX + moveoffsetX;
 			var positionY = touch.pageY + moveoffsetY;
 			whichArt.style.left = positionX + 'px';
 			whichArt.style.top = positionY + 'px';
 		}, false);

 	}

	//I am tracking these events 
	document.querySelector('body').addEventListener('dragstart', moveStart, false);
	document.querySelector('body').addEventListener('dragover', moveDragOver, false);
	document.querySelector('body').addEventListener('drop', moveDrop, false);
	//for mobile or tablet devices
	document.querySelector('body').addEventListener('touchstart', touchStart, false);
})();