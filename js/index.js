// Colour Changing Name:

var header = document.querySelector("h1");
var img = document.getElementById("main_image");

function changeColor()
{
    var options = "0123456789ABCDEF";
    var colour = "#";
    for(var i = 1; i <= 6; i++)
    {
        var num = Math.floor(Math.random()*16);
        colour += options[num];
    }
    header.style.color = colour;
}

var interval;
interval = setInterval("changeColor()", 500);

// Batman Text Changing:

// firstTime = true;
function changeText()
{
    header.textContent = "or Batman...";
    img.src = "media/batman.jpg";
    header.style.color = "black";
    clearInterval(interval);
    var audio = new Audio('im-batman.mp3');
    audio.play();
    // if (!firstTime)
    // {
    //     firstTime = true;;
    // }
}
function changeTextBack()
{
    interval = setInterval("changeColor()", 500);
    header.textContent = "Shane Weisz";
    img.src = "https://sandtonchronicle.co.za/wp-content/uploads/sites/33/2016/12/shane-st-davids.jpg";
    // if (count == 1)
    // {
    //     var popup = document.getElementById("myPopup");
    //     popup.classList.toggle("show");
    //     alert("I'm not saying I'm Batman, I'm just saying have you ever seen me and Batman on this website at the same time?");
    //     count += 1;
    // }
}
header.addEventListener("mouseover", changeText)
header.addEventListener("mouseout", changeTextBack)
