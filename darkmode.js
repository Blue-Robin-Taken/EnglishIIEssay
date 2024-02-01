var darkmode = false;

function changeToDark(e, index, num){
    e.style.color="white";
    if (e.constructor == HTMLAnchorElement){
        e.style.color="#03fcc6"
    }

}
function darkToLight(e, index, num){
    e.style.color=""
}

window.onload = function(){ // https://stackoverflow.com/questions/9778888/uncaught-typeerror-cannot-set-property-onclick-of-null
    document.getElementById("darkmode").onclick = function() {switchDarkOrLight()};
    var darkmodeImage = document.getElementById("darkmodeimage");
    var darkmode = false;
    function switchDarkOrLight() {
    darkmode = !darkmode
    

    hOnes = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a");
    if (darkmode){
        document.body.style.backgroundColor="black";
        hOnes.forEach(changeToDark);
        darkmodeImage.src='static/images/lightmode.png';
    }
    else{
        document.body.style.backgroundColor="white";
        hOnes.forEach(darkToLight);
        darkmodeImage.src='static/images/MOON.png';
    }
    }
}