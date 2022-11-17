var windowWidth = window.innerWidth ;
// console.log(windowWidth)

var horizontalLength = document.querySelector(".element-wrapper")
.scrollWidth ;
// console.log(horizontalLength)

var distFromTop = document.querySelector(".horizontal-section")
.offsetTop;
// console.log(distFromTop)

var scrollDistance = distFromTop + horizontalLength - windowWidth ;
// console.log(scrollDistance)

document.querySelector(".horizontal-section")
.style.height = horizontalLength + "px" ;

// window.onscroll = function() {
//     var scrollTop = window.pageYOffset ;

//     if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
//     document.querySelector(".element-wrapper")
//     .style.tranform = "translateX(-"+(scrollTop - distFromTop)+"px)";
//     }
// }

window.onscroll = function(){
    var scrollTop = window.pageYOffset;
    
    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
      document.querySelector(".element-wrapper")
      .style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
    }
}



var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function () {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}

player.onpause = function () {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function () {
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);
    //progress
    let duration = player.duration;
    prog=Math.floor((ct*100) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if ( seconds < 10) {
        seconds = "0"+seconds;
    }

    return minutes + ":" + seconds;
}

// var vids = $("video");
// $.each(vids, funcion(){
//     this.controls = false;
// });
