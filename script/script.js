$(document).ready(function () {

$("#clickHere").hide();
$("#findAndChange, #changeDatasInput, #findAndChangeMenu").dialog({
autoOpen : false
});
$("#clickHere").click(function () {
$("#findAndChange").dialog("open");
});

var dialog = $("#dialog");
dialog.dialog({
autoOpen: false,
height: 300,
width: 350,
modal: true,
show: {
effect: "blind",
duration: 1000
}
});
$("#d").tooltip({
position: {
my: "left top",
at:"right bottom"
}
});
$("#d").click (function() {
dialog.dialog("open");
});
var flag  = 0;
$("#date").datepicker();
var info = $("#info");
info.dialog({
autoOpen: false,
height: 300,
width: 350,
modal: true,
show: {
effect: "blind",
duration: 1000
}
});
$("#send").click(function () {
var d = $("#date").datepicker(),
date = d.val(),
name = $("#name").val(),
sal = $("#salary").val(),
num = Math.floor(Math.random() * (1000 + 1));
if(!allObj && !obj) {
var allObj = [],
obj = {};
obj.name = name;
obj.salary = sal;
obj.date = date;
obj.idNum = num;
}
allObj.push(obj);

var createLine = "<tr id='tab"+flag+"'><td class='a'>"+name+"</td><td class='b'>"+sal+"</td><td>"+num+"</td><td class='c'>"+date+"</td></tr>";
// #if START
if($("#name").val() != "" || $("#salary").val() != "") {
$("#tbody").append(createLine);
$("#clickHere").show();
$("#tab"+flag+"").append(addButton(flag));
function addButton(id){
// delete button start
return $("<button>")
.attr("title","Delete current user")
.attr("id","delButton")
.text("Delete")
.hover(function (){
 // hover start
$(this).css({background: "red", color: "#fff"})
},
function () {
$(this).css({background: "transparent", color: "#000"})
})         //hover end
.click(function () {          //click on this (delete) button
$(this).parents('tr').eq(0).remove();
// delete button end
allObj.forEach(function (i, num, arr){
if(arr[num].idNum = num) {
delete i;
}
})
})
}
// Click on table row START
$("#tab"+flag+"").click(function () {
var row = this;
$("#changeDatasInput").dialog("open");
// Change button click
// Open Change dialog  (#1)
$("#change_name").val($(row).find(".a").text());
$("#change_salary").val($(row).find(".b").text());
$("#change_date").val($(row).find(".с").text()).datepicker();
$("#change_send").click(function () {
$(this).off();
var ch_name = $("#change_name").val(),
ch_sal = $("#change_salary").val(),
ch_date = $("#change_date").val();
$(row).find(".a").text(ch_name);
$(row).find(".b").text(ch_sal);
$(row).find(".c").text(ch_date);
allObj.forEach(function (i, num, arr) {
if(arr[num].idNum == $("#findForID").val()){
i.name = ch_name;
i.salary = ch_sal;
i.date = ch_date;
}
})
$("#changeDatasInput").dialog("close");
})
// Change window Close button
$("#change_close").click(function () {
$("#changeDatasInput").dialog("close");
})// Change window Close button End
//Close Change  dialog (#1)
});// Click on table row END
}// #if END
flag++;
$("#name, #salary, #date").val("");
//findForIndexButton.click start
$("#findForIndexButton").click(function () {
var findForIndex = $("#findForID").val();
allObj.forEach(function (a, num, arr) {
if(arr[num].idNum == findForIndex) {
$(".result").text("Find user with name: " + arr[num].name + ". (salary: " + arr[num].salary + ")");
}
else {
$(".result").text("ID no found");
}
})
}); // findForIndexButton.click end
})
$("#close").click(function () {
dialog.dialog("close");
});
//
//
// test div
var test = $("#test");
test.dialog({
autoOpen : false,
height : 500,
width: 600,
modal : true,
show: {
effect: "blind",
duration: 1000
}
})
$("#testbtn").click(function () {
test.dialog("open");
})
$("#infClose").click(function () {
test.dialog("close");
})
})
