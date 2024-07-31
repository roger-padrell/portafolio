//load the data
getData().then(r => window.dt = r)

//mouse animation on run button
let mouseOnRunButton = false;
runCursor.style.transform = "scale(0,0)";
runButton.onmousemove = function(e){
    runCursor.style.left = e.clientX - ((screen.width/2)-410);
    runCursor.style.top = e.clientY - ((screen.height/2)-110);
    runCursorText.style.left = 0 - (e.clientX - ((screen.width/2)-410)) + 21;
    runCursorText.style.top = 0 - (e.clientY - ((screen.height/2)-110)) + 7;
    mouseOnRunButton=true;
}
runButton.onmouseleave = function(){
    mouseOnRunButton=false;
}
document.body.onmousemove = function(e){
    if(!mouseOnRunButton){
        runCursor.style.transform = "scale(0,0)";
    }
    else{
        runCursor.style.transform = "none";
    }
}

function run(){
    document.getElementsByTagName("lcont")[0].style.zIndex = "2";
    //liquids fall
    let arr = Array.from(document.getElementsByTagName("liquid"));
    for(let a in arr){
        arr[a].style.transition = "transform " + (Math.random()*3+1) + "s"
        arr[a].style.transform = "translate(0, 90%)";
    }

    mainTitle.setLenght = 0;

    //show title
    anime({
        target: mainTitle,
        setLenght: "Roger Padrell Casar".length,
        round: 1,
        easing: 'linear',
        update: function(){
            //string with lenght setLenght
            mainTitle.innerHTML = ""
        }
    })
}