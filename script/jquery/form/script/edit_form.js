$(document).ready(function () {
$("#onstart").click(function () {
scrollTo(0, 0);
});
$("#send").click(function () {
var name = $("#name").val();
var sname = $("#sname").val();
var city = $("#city").val();
var phone = $("#phone").val();
var mail = $("#mail").val();
var debug = $("#debug").val();
regExpName = /[a-zA-Zа-яА-Я]/,
regExpPhone = /\d{10}/,
regExpMail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
if( name.search(regExpName) != 0) {
$("#name_err").css("visibility","visible");
}
else {
$("#name_err").css("visibility","hidden");
}
if(sname.search(regExpName) != 0){
$("#sname_err").css("visibility","visible");
}
else {
$("#sname_err").css("visibility","hidden");
}

if(phone.search(regExpPhone) != 0){
$("#phone_err").css("visibility","visible");
}
else {
$("#phone_err").css("visibility","hidden");
}
if(mail.search(regExpMail) != 0){
$("#mail_err").css("visibility","visible");
}
else {
$("#mail_err").css("visibility","hidden");
}
if ( !debug) {
$("#debug_err").css("visibility","visible")
}
else {
$("#debug_err").css("visibility","hidden")
};
$("#name_info").text(name);
$("#sname_info").text(sname);
$("#phone_info").text(phone);
$("#mail_info").text(mail);
});
}) // end of document
