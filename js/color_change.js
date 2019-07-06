var header = document.querySelector("h1");

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

setInterval("changeColor()", 500);
