var answers = ["E: Abstract Algebra", "C: Michu", "A: Scotch Game", "B: Forrest Gump", "B: Python", "C: 1 minute 30 seconds", "E: Friends", "E: Carly Rose Sonenclar", "C: Hamilton", "C: The Fruity Loopy Bird"]

btn = document.getElementById("btnSubmit");
btn.addEventListener("click", function(){
    var name = $("#txtEnterName").val();
    if (name == "")
    {
        alert("Please enter your name");
        return;
    }

    btn.disabled = "disabled";

    var count = 0;
    for (var i = 1; i <= 10; i++)
    {
        let q = document.querySelector("#Q" + i);
        q.disabled = "disabled";
        var answer = q.options[q.selectedIndex].text[0];
        if (answer == answers[i-1][0])
        {
            count += 1;
            $("#Q" + i).css("background", "green");
        }
        else
        {
            var oldText = $("#L" + i).text()
            $("#L" + i).html(oldText + " <strong> (Correct answer was " + answers[i-1] + ")</strong>"); // $("#L" + i).text = $("#L" + i).text + " (Correct answer: )";
            $("#Q" + i).css("background", "red");
        }
    }
    alert(name + ", you got " + count + " out of 10 correct!");
    $(subheader).html($(subheader).text() + "<br><br><strong>" + name + ", you got " + count + " out of 10 correct</strong> ");
    $(subheader).css('font-size','2em');

});
