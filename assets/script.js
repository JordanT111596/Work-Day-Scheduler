//creates array for time
var timeArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var timeCheckArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//sets currentDay element to the actual current day using moment.js
$("#currentDay").text("Today is " + (moment().format("dddd, MMMM Do, YYYY")));

//create a loop out of this
for (var i = 0; i < timeArr.length; i++) {
    
//creates row
var newRow = $("<div>");
//adds css class to row
newRow.addClass("row");
//appends row to the container
$(".container").append(newRow);

//creates column for hour
var newTimeColumn = $("<div>");
//adds css class to column
newTimeColumn.addClass("col-md-12 time-block");
//appends column to row
newRow.append(newTimeColumn);

//creates time block
var timeBlock = $("<div>");
//adds css class to time block for hour
timeBlock.addClass("hour float-left");
//sets text to the time of the block
timeBlock.text(timeArr[i]);
//appends the hour to the time block
newTimeColumn.append(timeBlock);

//creates text area box
var newTextArea = $("<textarea>");
//adds css class to text box
newTextArea.addClass("description");
//assigns time data attribute
newTextArea.attr("data-time", timeCheckArr[i]);
//appends textarea to the time block
newTimeColumn.append(newTextArea);

//creates save button
var saveButton = $("<button>");
//creates save icon
var saveIcon = $("<i>");
//adds css class to text box
saveButton.addClass("saveBtn float-right");
//adds css class to save icon
saveIcon.addClass("fas fa-save");
//appends save button to the time block
newTimeColumn.append(saveButton);
//appends save icon to the save button
saveButton.append(saveIcon);



//sets box color based on time
//if the time is before the current time, make it a grey past box
if (newTextArea.attr("data-time") < parseInt((moment().format("H")))) {
    newTextArea.addClass("past");
}

//if the time box is at the current time, make it a red present box
else if (newTextArea.attr("data-time") === parseInt((moment().format("H")))) {
    newTextArea.addClass("present");
}

//if the time is after the current time, make it a green future box
else {
    newTextArea.addClass("present");
}
}