for (var i = 1; i <= 3; i++)
{
    for (var j = 1; j <= 3; j++)
    {
        let cell = document.querySelector("#id" + i + "" + j)
        cell.addEventListener("click",function(){
            var text = cell.textContent;
            if (text == "X")
            {
                cell.textContent = "O";
            }
            else if (text == "O")
            {
                cell.textContent = "";
            }
            else
            {
                cell.textContent = "X";
            }
        });
    }
}

btn = document.getElementById("btnRestart")
btn.addEventListener("click", function(){
    for (var i = 1; i <= 3; i++)
    {
        for (var j = 1; j <= 3; j++)
        {
            let cell = document.querySelector("#id" + i + "" + j)
            cell.textContent = ""
        }
    }
})
