//creates array for time to be written out as user-friendly strings
var timeArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
//creates array so we can check the time
var timeCheckArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//sets currentDay element to the actual current day using moment.js
$("#currentDay").text("Today is " + (moment().format("dddd, MMMM Do, YYYY")));

//create a loop out of this
for (var i = 0; i < timeArr.length; i++) {

    //creates row for time block
    var newRow = $("<div>");
    //adds css class to row
    newRow.addClass("row time-block");
    //appends row to the container
    $(".container").append(newRow);

    //creates hour block
    var timeBlock = $("<div>");
    //adds css class to time block for hour
    timeBlock.addClass("hour col-md-1");
    //sets text to the time of the block
    timeBlock.text(timeArr[i]);
    //appends the hour to the time block row
    newRow.append(timeBlock);

    //creates text area box
    var newTextArea = $("<textarea>");
    //adds css class to text box
    newTextArea.addClass("description col-md-10");
    //assigns time data attribute
    newTextArea.attr("data-time", timeCheckArr[i]);
    //assigns id attribute
    newTextArea.attr("id", "hour" + timeCheckArr[i]);
    //appends textarea to the time block row
    newRow.append(newTextArea);

    //creates save button
    var saveButton = $("<button>");
    //creates save icon
    var saveIcon = $("<i>");
    //adds css class to text box
    saveButton.addClass("saveBtn col-md-1");
    //adds css class to save icon
    saveIcon.addClass("fas fa-save");
    //appends save button to the time block row
    newRow.append(saveButton);
    //appends save icon to the save button
    saveButton.append(saveIcon);



    //sets box color based on time
    //if the time is before the current time, make it a grey past box
    if (newTextArea.attr("data-time") < parseInt((moment().format("H")))) {
        newTextArea.addClass("past");
    }

    //if the time is after the current time, make it a green future box
    else if (newTextArea.attr("data-time") > parseInt((moment().format("H")))) {
        newTextArea.addClass("future");
    }

    //if the time box is at the current time, make it a red present box
    else {
        newTextArea.addClass("present");
    }
}

//functionality for save button
$(".saveBtn").on("click", function () {
    //grabs text from user input and stores to variable
    var userText = $(this).siblings(".description").val();
    //grabs time from where user input and stores to variable
    var timeSlot = $(this).siblings(".description").attr("data-time");
    //sets the variables into local storage so the info can be saved
    localStorage.setItem(timeSlot, userText);
});

//sets each schedule block with the text last saved from local storage
$("#hour9").val(localStorage.getItem("9"));
$("#hour10").val(localStorage.getItem("10"));
$("#hour11").val(localStorage.getItem("11"));
$("#hour12").val(localStorage.getItem("12"));
$("#hour13").val(localStorage.getItem("13"));
$("#hour14").val(localStorage.getItem("14"));
$("#hour15").val(localStorage.getItem("15"));
$("#hour16").val(localStorage.getItem("16"));
$("#hour17").val(localStorage.getItem("17"));