function changeImage() {

        var img = document.getElementById('imgClickAndChange').src;
        if (img.indexOf('images/lightOn.jpg')!=-1) {
            document.getElementById('imgClickAndChange').src  = 'images/lightOff.jpg';
        }
         else {
           document.getElementById('imgClickAndChange').src = 'images/lightOn.jpg';
       }
       
       document.getElementById("displayTime").innerHTML = Date();
        
    }
    
function swapImage() {
	var image = document.getElementById("imageToSwap");
	var change = document.getElementById("smMedLrg");
	image.src = change.value;
}
 function clearPage(){
 	document.body.innerHTML = '<div id ="num3"><h1>PAGE CLEARED</h1><button type="button" onclick="reloadPage()">Get It Back!!</button></div>';
 	document.body.style.backgroundColor = 'blue';
 }
 function reloadPage(){
 	location.reload();
 }
function changePara() {
	document.getElementById("para").style.color = "blue";
	document.getElementById("para").innerHTML = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
	document.getElementById("para").style.fontSize = "xx-large";
	console.log(document.getElementById("para").innerHTML);
}

function GPSinfo(){
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("gps").innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    document.getElementById("gps").innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}
function numOps(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var addNum = parseInt(num1) + parseInt(num2);
	var subNum = parseInt(num1) - parseInt(num2);
	var multNum = parseInt(num1) * parseInt(num2);
	var divNum = parseInt(num1) / parseInt(num2);
	var stringNum = num1 + parseInt(num2);
	document.getElementById("add").innerHTML = "Addition: "+ addNum; 
	document.getElementById("sub").innerHTML = "Subtraction: "+ subNum;
	document.getElementById("mult").innerHTML = "Multiplication: "+ multNum;
	document.getElementById("div").innerHTML = "Division: "+ divNum;
	document.getElementById("stringNum").innerHTML = "String + Number: "+ stringNum;
}
function oddEven() {
	var oddEven = document.getElementById("oddEven").value;
	if (oddEven % 2 == 0) {
            document.getElementById('oddEvenRes').innerHTML  = 'NUMBER IS EVEN';
            document.getElementById('oddEvenResPic').src  = 'images/even.jpg';
        }
         else {
           document.getElementById('oddEvenRes').innerHTML  = 'NUMBER IS ODD';
           document.getElementById('oddEvenResPic').src  = 'images/odd.jpg';
       }
}

function incDecChange() {
	if (document.getElementById('decrement').checked) 
  {
      decrement();
  } else
  {
  	  increment();
  }
}

function increment() {
	var num = parseInt(document.getElementById("numIncDec").value);
	var changedNumber = ++num;
	document.getElementById("numIncDec").value = changedNumber;
}

function decrement() {
	var num = document.getElementById("numIncDec").value;
	var changedNumber = --num;
	document.getElementById("numIncDec").value = changedNumber;
}

function displayName(){
	var e = document.getElementById("selName");
    var selected = e.options[e.selectedIndex].text;
    var selectedColor = e.options[e.selectedIndex].value;
    document.getElementById('disName').innerHTML  = selected;
    document.getElementById('disName').style.color = selectedColor;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

var div = document.getElementById( 'number12' );
div.onmouseover = function() {
  this.style.backgroundColor = 'blue';
};
div.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
};
