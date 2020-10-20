$(document).ready(function () {
    $("currentDay").text(moment().format("MMMM DD YYYY, h:mm:ss a"));
    
    $(".saveBtn").click(function () {
        
        console.log(this);
        var text = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, text);
    })
});

$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12am .description").val(localStorage.getItem("12am"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

function hourHand() {
    var CurrentTime = moment().hours();
    $(".time-block").each(function() {
        var blockhour = parseInt($(this).attr("id").split("hour")[1]);
        console.log ( blockhour, Currenttime)

        if (blockHour < CurrentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === CurrentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

}
hourHand();   



