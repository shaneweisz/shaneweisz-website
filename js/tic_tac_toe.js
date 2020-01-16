$("#turn").html("<p class = 'alert alert-dark'>X\'s turn</p>");
var turn = "X";
var grid = [];
var count = 0;
for (var i = 1; i <= 3; i++)
{
    var row = [];
    for (var j = 1; j <= 3; j++)
    {
        row.push("");
        let cell = $("#id" + i + "" + j);
        cell.on("click", function()
        {
            if (turn == "X")
            {
                cell.html("X");
                turn = "O";
            }
            else
            {
                cell.html("O");
                turn = "X";
            }
            cell.attr("disabled", true);
            cell.css('color','black')
            $("#turn").html("<p class = 'alert alert-dark'>" + turn + "\'s turn</p>");
            checkForWinner();
        });
    }
    grid.push(row);
}

function checkForWinner()
{
    count += 1; // count the number of moves
    // (because 9 moves without a winner means it was a draw)

    // Check for horizontal winner
    for (var row = 0; row < 3; row++)
    {
        if(grid[row][0] === grid[row][1] && grid[row][0] === grid[row][1])
        {

        }
    }

    if (count == 9) // 9 moves without a winner means it was a draw
    {
        $("#turn").html("<p class = 'alert alert-dark'><strong>It\'s a draw!</strong>")
    }
}

btn = document.getElementById("btnRestart")
btn.addEventListener("click", function(){
    turn = "X";
    count = 0;
    grid = [];
    for (var i = 1; i <= 3; i++)
    {
        var row = [];
        for (var j = 1; j <= 3; j++)
        {
            row.push("");
        }
        grid.push(row);
    }

    $("#turn").html("<p class = 'alert alert-dark'>" + turn + "\'s turn</p>");
    for (var i = 1; i <= 3; i++)
    {
        for (var j = 1; j <= 3; j++)
        {
            let cell = document.querySelector("#id" + i + "" + j);
            cell.textContent = "";
            cell.enabled = "enabled";

        }
    }
})
