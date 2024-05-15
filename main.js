var darkmode = false;

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function changeToDark(e, index, num){
    e.style.color="white";
    if (e.constructor == HTMLAnchorElement){
        e.style.color="#03fcc6";
    }

}
function darkToLight(e, index, num){
    e.style.color="";
}


function scrollToTop(){    
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function scrollToLast(){
    var scroll = getCookie('scroll');
    window.scrollTo(0, parseInt(scroll));
}

window.onload = function(){ // https://stackoverflow.com/questions/9778888/uncaught-typeerror-cannot-set-property-onclick-of-null
    if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
    }
    addEventListener("scroll", (event) => {
	document.cookie = `scroll=${window.scrollY}`
    });
    var docelm = document.getElementById('bigdiv');
    //docelm.addEventListener("animationend", scrollToTop(), {}, false);
    var darkmodeImage = document.getElementById("darkmodeimage");

    if (getCookie('darkmode')==null){
        document.cookie = "darkmode=false;";
    }

    document.getElementById("darkmode").onclick = function() {switchDarkOrLight()};
    if (getCookie('darkmode')=='true'){
        document.body.style.backgroundColor="black";
        hOnes = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li");
        hOnes.forEach(changeToDark);
        darkmodeImage.src='static/images/lightmode.png';
    }

    function switchDarkOrLight() {
        if (getCookie('darkmode')=='false'){
            document.cookie = "darkmode=true";
        }
        else{
            document.cookie = "darkmode=false";
        }

        hOnes = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li, ul");
        if (getCookie('darkmode')=='true'){
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
    scrollToLast();
    
}
