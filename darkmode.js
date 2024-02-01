var darkmode = false;

function changeToDark(e, index, num){
    e.style.color="white";
}
function darkToLight(e, index, num){
    e.style.color=""
}

window.onload = function(){ // https://stackoverflow.com/questions/9778888/uncaught-typeerror-cannot-set-property-onclick-of-null
    document.getElementById("darkmode").onclick = function() {switchDarkOrLight()};
    var darkmode = false;
    function switchDarkOrLight() {
    darkmode = !darkmode
    
    hOnes = document.querySelectorAll("h1", "h2", 'p');
    if (darkmode){
        document.body.style.backgroundColor="black";
        hOnes.forEach(changeToDark);
    }
    else{
        document.body.style.backgroundColor="white";
        hOnes.forEach(darkToLight);
    }
    }
}