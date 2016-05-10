/*Document Ready Function
This means it is going to wait until the document is 'ready'
which means all the html is loaded
before running any javascript */
$(document).ready(function(){

	$('h1').css('background-color', 'red');	
});

//respond to click
var button = $('#button-1');
button.click(function(){
//grab the value of input
var value = $('#field-1').val();
console.log(value);
//populate display of value

//you could do it like this:
//var original = document.getElementById('display');
//original.innerHTML = value;
//but thats in javascript

	$('#display').append("<li class = 'lists'>" + value + "</li>");
});