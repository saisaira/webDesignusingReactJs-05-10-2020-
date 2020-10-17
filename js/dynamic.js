
// XMlHttpRequest(AJAX Call)
function getJson(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function() {
	if (xhr.readyState === 4 && xhr.status ===200) {
       callback(xhr.responseText);
	}
}
xhr.send();
}
// function calling
getJson("../data.json",function(text){
	var d=JSON.parse(text);
	console.log(d);
    basics(d.details);
});


var main = document.querySelector(".main-div");


function basics(s){
var n=document.createElement("h1");
n.textContent=s.name;
n.classList.add("my-name");
main.appendChild(n);

var n1=document.createElement("h1");
n1.textContent=s.email;
n1.classList.add("my-name");
main.appendChild(n1);

var n2=document.createElement("h1");
n2.textContent=s.mobile;
n2.classList.add("my-name");
main.appendChild(n2);


}

