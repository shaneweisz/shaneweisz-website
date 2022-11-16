var answers = ["E: Cape Robin-Chat", "C: Michu", "A: Scotch Game", "B: Forrest Gump", "B: Python", "C: 1 minute 30 seconds", "C: Pigeon pose", "E: Friends", "C: Hamilton", "C: The Fruity Loopy Bird"]

btn = document.getElementById("btnSubmit");
btn.addEventListener("click", function () {
    // var name = $("#txtEnterName").val();
    // if (name == "")
    // {
    //     alert("Please enter your name");
    //     return;
    // }
    //
    btn.disabled = "disabled";

    var count = 0;
    for (var i = 1; i <= 10; i++) {
        let q = document.querySelector("#Q" + i);
        q.disabled = "disabled";
        var answer = q.options[q.selectedIndex].text[0];
        if (answer == answers[i - 1][0]) {
            count += 1;
            $("#Q" + i).css("background", "green");
        }
        else {
            var oldText = $("#L" + i).text()
            $("#L" + i).html(oldText + " <strong> (Correct answer was " + answers[i - 1] + ")</strong>"); // $("#L" + i).text = $("#L" + i).text + " (Correct answer: )";
            $("#Q" + i).css("background", "red");
        }
    }
    if (count <= 3) {
        var message = "Crisis, you only got " + count + " out of 10 correct!";
        alert(message);
        $(subheader).html($(subheader).text() + '<br><br>' + '<p class="alert alert-danger" role="alert" id="message1">' + "<strong>" + message + "</strong> </p>");
    }
    else if (count <= 6) {
        var message = "Decent, you got " + count + " out of 10 correct!";
        alert(message);
        $(subheader).html($(subheader).text() + '<br><br>' + '<p class="alert alert-info" role="alert" id="message2">' + "<strong>" + message + "</strong> </p>");
    }
    else {
        var message = "Not too shabby! You got " + count + " out of 10 correct!";
        alert(message);
        $(subheader).html($(subheader).text() + '<br><br>' + '<p class="alert alert-success" role="alert" id="message3">' + "<strong>" + message + "</strong> </p>");

    }

});
