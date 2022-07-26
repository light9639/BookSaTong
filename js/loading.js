$(document).ready(function(){
    $.ajax({
        url:"header.html",
        dataType:"html",
        success:function(data){
            aa = $("#header").html(data).find("header");
            $("#header").html(aa);
        }
    })
    $.ajax({
        url:"mobilemenu.html",
        dataType:"html",
        success:function(data){
            bb = $("#Mobile").html(data).find(".Mobile");
            $("#Mobile").html(bb);
        }
    })
    $.ajax({
        url:"footer.html",
        dataType:"html",
        success:function(data){
            cc = $("#footer").html(data).find("footer");
            $("#footer").html(cc);
        }
    })
})