var typed = new Typed('.animation', {
    strings: [
        "Tabiiy tolalardan to'qilgan gazlama texnalogiyalari"
    ],
    typeSpeed: 80,
    loop: false
});

function addedColor(){
}

$(document).ready(function(){
    $('btnDowload').click(function(e){
        e.preventDefault();
        window.location.href = "simple.docx";
    })
})