var text = "";



var myObj =document.getElementById('root');
var myBtn = document.getElementById('myButton');
var myText = document.getElementById('copytext');

myBtn.addEventListener('click',myFunction);

function myFunction(){
    var selectText = window.getSelection().toString();
    myText.innerHTML = selectText;
    
}