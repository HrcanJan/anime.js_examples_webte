function optionBox(){
    var dot1 = document.getElementById('dot1');
    var dot2 = document.getElementById('dot2');
    var dot3 = document.getElementById('dot3');
  
    dot1.onchange = function() { 
        document.getElementById("first").style.display = 'block';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
    };
    dot2.onchange = function() {  
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'flex';
        document.getElementById("third").style.display = 'none';
    }; 
    dot3.onchange = function() {  
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'block';
        startPath();
    };  
}

var display = true;

function displayMenu(){
    if(display){
        display = false;
        anime({
            targets: '.nav_links2 li',
            translateX: [0, -2000],
            scale: [1, 1],
            opacity: [1, 0],
            easing: "easeOutExpo",
            duration: 1500,
            delay: anime.stagger(100)
        })
        
    }
    else{
        display = true;
        anime({
            targets: '.nav_links2 li',
            translateX: [1000, 0],
            scale: [10, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1500,
            delay: anime.stagger(100)
        })
        
    }
}

const moonPath = 
"M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z";

const sunPath = 
"M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#lightMode");

var daytime = true;

lightMode.addEventListener('click', () => {
    const t = anime.timeline({
        duration: 500,
        easing: "easeOutExpo"
    });   

    if(daytime){
        daytime = false;

        document.getElementById("secondH1").innerHTML = "Nighttime"

        t.add({
            targets: ".sun",
            d: [{value: moonPath}]
        }).add({
            targets: "#lightMode",
            rotate: 320
        }, "-= 350").add({
            targets: "#second",
            backgroundColor: "rgb(22, 22, 22)",
            color: "rgb(225, 225, 225)"
        }, "-=700");
    }
    else {
        daytime = true;

        document.getElementById("secondH1").innerHTML = "Daytime"

        t.add({
            targets: ".sun",
            d: [{value: sunPath}]
        }).add({
            targets: "#lightMode",
            rotate: 40
        }, "-= 350").add({
            targets: "#second",
            backgroundColor: "rgb(220, 255, 191);",
            color: "rgb(22, 22, 22)"
        }, "-=700");
    }
});

let path = anime.path('#pathLine');

function startPath(){

    anime({
        targets: '.electron',
        translateX: path('x'),
        translateY: path('y'),
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(600),
        loop: true
    });
}
