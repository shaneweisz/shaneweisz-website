var player1 = "Player 1";
var player2 = "Player 2";

$(".lead").html("<strong>" + player1 + "'s turn (Red) </strong>");
$(".lead").css('color','red');
var turn = 0;

var cells = $("table button");
console.log(cells);

var board = [];
for (var i = 0; i < 6; i++)
{
    var row = []
    for(var j = 0; j < 7; j++)
    {
        row.push(-1);
    }
    board.push(row);
}


function clearBoard()
{
    for(var i = 0; i < cells.length; i++)
    {
        cells.eq(i).css("background-color","gray");
        var row = parseInt(i/7);
        var col = i % 7;
        board[row][col] = -1;
    }
}

function restart() {
    clearBoard();
    enableAll();
    $(".lead").html("<strong>" + player1 + "'s turn (Red) </strong>");
    $(".lead").css('color','red');
    turn = 0;
}

$("#btnRestart").on('click',restart);

function right()
{
    for (var row = 0; row <= 5; row++)
    {
        for(var col = 0; col <= 3; col++)
        {
            if(board[row][col] !== -1)
            {
                if(board[row][col] === board[row][col+1] && board[row][col] === board[row][col+2]  && board[row][col] === board[row][col+3] )
                {
                    return board[row][col];
                }
            }
        }
    }
    return -1; //not found
}

function down()
{
    for (var col = 0; col <= 6; col++)
    {
        for(var row = 0; row <= 2; row++)
        {
            if(board[row][col] !== -1)
            {
                if(board[row][col] === board[row+1][col] && board[row][col] === board[row+2][col]  && board[row][col] === board[row+3][col] )
                {
                    return board[row][col];
                }
            }
        }
    }
    return -1; //not found
}

function diag()
{
    for (var row = 0; row <= 2; row++)
    {
        for(var col = 0; col <= 4; col++)
        {
            if(board[row][col] !== -1)
            {
                if(board[row][col] === board[row+1][col+1] && board[row][col] === board[row+2][col+2]  && board[row][col] === board[row+3][col+3] )
                {
                    return board[row][col];
                }
            }
        }
    }

    for (var row = 0; row <= 2; row++)
    {
        for(var col = 6; col >= 3; col--)
        {
            if(board[row][col] !== -1)
            {
                if(board[row][col] === board[row+1][col-1] && board[row][col] === board[row+2][col-2]  && board[row][col] === board[row+3][col-3] )
                {
                    return board[row][col];
                }
            }
        }
    }

    return -1; //not found
}

function disableAll()
{
    for(var i = 0; i < cells.length; i++)
    {
        cells.eq(i).attr("disabled", true);
    }
}

function enableAll()
{
    for(var i = 0; i < cells.length; i++)
    {
        cells.eq(i).attr("disabled", false);
    }
}

function checkForWinner()
{
    rt = right();
    if(rt === 0)
    {
        $(".lead").html("<strong>" + player1 + " WON!! </strong>");
        $(".lead").css('color','red');
        disableAll();
    }
    else if(rt === 1)
    {
        $(".lead").html("<strong>" + player2 + " WON!! </strong>");
        $(".lead").css('color','blue');
        disableAll();
    }
    dn = down();
    if(dn === 0)
    {
        $(".lead").html("<strong>" + player1 + " WON!! </strong>");
        $(".lead").css('color','red');
        disableAll();
    }
    else if(dn === 1)
    {
        $(".lead").html("<strong>" + player2 + " WON!! </strong>");
        $(".lead").css('color','blue');
        disableAll();
    }
    dg = diag();
    if(dg === 0)
    {
        $(".lead").html("<strong>" + player1 + " WON!! </strong>");
        $(".lead").css('color','red');
        disableAll();
    }
    else if(dg === 1)
    {
        $(".lead").html("<strong>" + player2 + " WON!! </strong>");
        $(".lead").css('color','blue');
        disableAll();
    }

}

for(var i = 0; i < cells.length; i++)
{
    let column = i % 7;
    cells.eq(i).on("click", function()
    {
        for (var row = 5; row >= 0; row--)
        {
            if(board[row][column] === -1)
            {
                let cell = row*7 + column;
                board[row][column] = turn;
                if(turn === 0)
                {
                    cells.eq(cell).css('background-color','red');
                    $(".lead").html("<strong>" + player2 + "'s turn (Blue) </strong>");
                    $(".lead").css('color','blue');
                    checkForWinner();
                }
                else
                {
                    cells.eq(cell).css('background-color','blue');
                    $(".lead").html("<strong>" + player1 + "'s turn (Red) </strong>");
                    $(".lead").css('color','red');
                    checkForWinner();
                }
                turn = (turn + 1) % 2;
                break;
            }
        }
    })
}
