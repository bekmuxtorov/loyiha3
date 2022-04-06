//bot token
var telegram_bot_id = "5151521204:AAGKfwCd-MZ9J74xShC4yvxreyreTmmmSjU"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 1603330179; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message, shortText ;
var ready = function() { 
    u_name = document.getElementById("name").value;
    shortText = document.getElementById("short_text").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nQisqacha xat: " + shortText +  "\nXabar: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("short_text").value = "";
    return false;
};