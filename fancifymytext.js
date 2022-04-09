//document.getElementById("boring").addEventListener("click", helloWorld);


document.getElementById("big").addEventListener("click", bigger);
document.getElementById("fancy").addEventListener("click", fancy);
document.getElementById("boring").addEventListener("click", unFancy);
document.getElementById("moos").addEventListener("click", moo);
function helloWorld() {
    alert("Hello, world!");
  }

  function bigger() {
    document.getElementById("modText").style.fontSize='24px';

}
function fancy() {
    if(document.getElementById('fancy').checked == true)
        {
        document.getElementById("modText").style.fontWeight="bold";
        document.getElementById("modText").style.color="blue";
        document.getElementById("modText").style.textDecoration = "underline";
        }
}

function unFancy(){
    if(document.getElementById('boring').checked == true)
        {
        document.getElementById("modText").style.fontWeight="normal";
        document.getElementById("modText").style.color="black";
        document.getElementById("modText").style.textDecoration = "none";
        }
    
}
function moo(){
    var tBox= document.getElementById("modText").value
    var parts = tBox.split("."); 
    tBox = parts.join("-Moo");
    document.getElementById("modText").value=tBox;

}

