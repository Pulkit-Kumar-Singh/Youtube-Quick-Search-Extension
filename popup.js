document.getElementById("btn").onclick = function() {myFunction()};
function myFunction() {
var x = document.form1.sname.value;
var y = x.split(' ').join('+');
window.open("https://www.youtube.com/results?search_query="+y);
}
