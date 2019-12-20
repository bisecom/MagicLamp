$(document).ready(function(){
$('#switcher').click(function(){
    if($("#switcher").attr("src") == "off.png"){
        $("#switcher").attr("src", "on.png");
        $("#lamp").attr("src", "lamp.png");
        $("#mainContainer").attr("class", "bgImgCenter");
    }
    else{
        $("#switcher").attr("src", "off.png");
        $("#lamp").attr("src", "lamp-off.png");
        $("#mainContainer").attr("class", "");
    }
});
});