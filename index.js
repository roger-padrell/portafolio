//load the data
getData().then(r => window.dt = r)

//kursor
let k = new kursor({
    type: 1,
    removeDefaultCursor: true
})

//mouse animation on run button
let inButton = true;
runButton.onmouseenter = function(){
    if(inButton){
        k.kursor.classList.add("--hover")
        k.color("#00BFFF")
    }
}
runButton.onmouseleave = function(){
    if(inButton){
        k.kursor.classList.remove("--hover")
        k.color("#000")
    }
}

function run(){
    inButton = false;
    k.kursor.classList.remove("--hover")
    k.color("#FFF")
    document.getElementsByTagName("lcont")[0].style.zIndex = "2";
    //liquids fall
    let arr = Array.from(document.getElementsByTagName("liquid"));
    for(let a in arr){
        arr[a].style.transition = "transform " + (Math.random()*3+1) + "s"
        arr[a].style.transform = "translate(0, 90%)";
    }

    mainTitle.setLenght = 0;

    //show title
    window.a = anime({
        target: "#mainTitle",
        setLenght: 20,
        round: 1,
        easing: 'linear',
        autoplay: true,
        duration: 5000,
        delay: 4000,
        update: function(){
            console.log(mainTitle.setLenght);
            mainTitle.setLenght += 20/300;
            //string with lenght setLenght
            mainTitle.innerHTML = "Roger Padrell Casar ".slice(0,Math.floor(mainTitle.setLenght));
        }
    })
}