document.addEventListener("keypress",function(event){
    playsound(event.key);
});

function playsound(key){
    switch(key){
        case "w":
        var s1=new Audio("./crash.mp3");
        s1.play();
        break;
        
        case "a":
        var s2=new Audio("./kick-bass.mp3");
        s2.play();
        break;

        case "s":
        var s3=new Audio("./snare.mp3");
        s3.play();
        break;

        case "d":
        var s4=new Audio("./tom-1.mp3");
        s4.play();
        break;

        case "j":
        var s5=new Audio("./tom-2.mp3");
        s5.play();
        break;

        case "k":
        var s6=new Audio("./tom-3.mp3");
        s6.play();
        break;

        case "l":
        var s7=new Audio("./tom-4.mp3");
        s7.play();
        break;







    }
}
