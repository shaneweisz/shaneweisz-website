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

k = 1
function changeText()
{
    if (k % 2 == 1)
    {
        header.textContent = "Dwight Schrute";
        img.src = "dwight.jpg";
        k+=1;
    }
    else
    {
        k+=1;
        header.textContent = "or Batman...";
        img.src = "batman.jpg";
        header.style.color = "black";
        clearInterval(interval);
        var audio = new Audio('im-batman.mp3');
        audio.play();
    }
}
function changeTextBack()
{
    if (k % 2 == 0)
    {
        clearInterval(interval);
    }
    interval = setInterval("changeColor()", 500);
    header.textContent = "Shane Weisz";
    img.src = "https://sandtonchronicle.co.za/wp-content/uploads/sites/33/2016/12/shane-st-davids.jpg";
}
header.addEventListener("mouseover", changeText)
header.addEventListener("mouseout", changeTextBack)
