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
    var Currenttime = moment().hours();
    $(".time-block").each(function() {
        var 
    }
}
