
var turn = "X";
var count = 0;
$("#turn").html("<p class = 'alert alert-dark'>X\'s turn</p>");

// Set up event listeners for button clicks
for (var i = 0; i < 3; i++)
{
    for (var j = 0; j < 3; j++)
    {
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
            cell.css('color','black');
            $("#turn").html("<p class = 'alert alert-dark'>" + turn + "\'s turn</p>");
            checkForWinner();
        });
    }
}

function getCellValue(i, j) // where i, j are the coordinates
{
    return $("#id" + i + "" + j).text();
}

function changeCellColor(i, j) // where i, j are the coordinates
{
    $("#id" + i + "" + j).css('color','red');
}

function checkForWinner()
{
    count += 1; // count the number of moves
    // (because 9 moves without a winner means it was a draw)

    // Check for horizontal winner
    for (var row = 0; row < 3; row++)
    {
        if(getCellValue(row, 0) != "" && getCellValue(row, 0) === getCellValue(row, 1) && getCellValue(row, 1) === getCellValue(row, 2))
        {
            var winner = getCellValue(row, 0);
            changeCellColor(row, 0);
            changeCellColor(row, 1);
            changeCellColor(row, 2);
            $("#turn").html("<p class = 'alert alert-dark'><strong>" + winner + " wins!</strong>")
            disableAll();
            return;
        }
    }

    // Check for vertical winner
    for (var col = 0; col < 3; col++)
    {
        if(getCellValue(0, col) != "" && getCellValue(0, col) === getCellValue(1, col) && getCellValue(1, col) === getCellValue(2, col))
        {
            var winner = getCellValue(0, col);
            changeCellColor(0, col);
            changeCellColor(1, col);
            changeCellColor(2, col);
            $("#turn").html("<p class = 'alert alert-dark'><strong>" + winner + " wins!</strong>")
            disableAll();
            return;
        }
    }

    // Check for diagonal winner
    if(getCellValue(0, 0) != "" && getCellValue(0, 0) === getCellValue(1, 1) && getCellValue(1, 1) === getCellValue(2, 2))
    {
        var winner = getCellValue(0, 0);
        changeCellColor(0, 0);
        changeCellColor(1, 1);
        changeCellColor(2, 2);
        $("#turn").html("<p class = 'alert alert-dark'><strong>" + winner + " wins!</strong>")
        disableAll();
        return;
    }
    if(getCellValue(2, 0) != "" && getCellValue(2, 0) === getCellValue(1, 1) && getCellValue(1, 1) === getCellValue(0, 2))
    {
        var winner = getCellValue(2, 0);
        changeCellColor(2, 0);
        changeCellColor(1, 1);
        changeCellColor(0, 2);
        $("#turn").html("<p class = 'alert alert-dark'><strong>" + winner + " wins!</strong>")
        disableAll();
        return;
    }

    if (count == 9) // 9 moves without a winner means it was a draw
    {
        $("#turn").html("<p class = 'alert alert-dark'><strong>It\'s a draw!</strong>")
    }
}

function disableAll()
{
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            let cell = $("#id" + i + "" + j);
            cell.attr("disabled", true);
        }
    }
}

function resetBoard()
{
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            let cell = $("#id" + i + "" + j);
            cell.attr("disabled", false);
            cell.html("");
            cell.css('color','black');
        }
    }
}

function restart()
{
    turn = "X";
    count = 0;
    $("#turn").html("<p class = 'alert alert-dark'>X's turn</p>");
    resetBoard();
}

btn = document.getElementById("btnRestart");
btn.addEventListener("click", restart);
