$(document).ready(function map(){
    var map_display;
    var map_array = new Array();
    var map_array2 = new Array();
    for(var i=0;i<=19;i++){
        map_array2[i] = new Array();
    }
     $.ajax({
                 url : "http://127.0.0.1:8000/api/MapInfo/?format=json",
                 dataType : 'json',
                 success : function(data){
                     map_display=data[0].map;
                     map_array=map_display.split('s');

                     for(var i=0; i<=19; i++){
                       map_array2[i]=map_array[i].split(', ');
                     }

                     for(var i=0; i<=19; i++){
                         for(var j=0; j<=19; j++){
                         var span = document.createElement("span");
                         span.setAttribute("id", 'design');
                         if(map_array2[i][j]==0){
                         $("#map").append('<img src="/static/img/white.jpg" width="25px" height="25px" display="block" border="0" padding="0px 0px 0px 0px">');
                         }
                         else if(map_array2[i][j]==1){
                         $("#map").append('<img src="/static/img/black.jpg" width="25px" height="25px" display="block" border="0" padding="0px 0px 0px 0px">');
                         }
                         else if(map_array2[i][j]==3){
                         $("#map").append('<img src="/static/img/green.jpg" width="25px" height="25px" display="block" border="0" padding="0px 0px 0px 0px">');
                         }
                         else if(map_array2[i][j]==5){
                         $("#map").append('<img src="/static/img/red.jpg" width="25px" height="25px" display="block" border="0" padding="0px 0px 0px 0px">');
                         }
                         }
                        $("#map").append("<br>");
                     }
                 }
      });
});
function car_point(){
    var xx = document.getElementById("x").value;
    var yy = document.getElementById("y").value;
    $.ajax({
            type : 'POST',
            url : 'http://127.0.0.1:8000/map/car_point',
            data : {
            'xxx' : xx,
            'yyy' : yy
            },
            dataType:'json',
            success: function(){
            }
        });
    window.location.reload()
}
function destination_point(){
    var aa = document.getElementById("a").value;
    var bb = document.getElementById("b").value;
    $.ajax({
            type : 'POST',
            url : 'http://127.0.0.1:8000/map/destination_point',
            data : {
            'aaa' : aa,
            'bbb' : bb
            },
            dataType:'json',
            success: function(){
            }
        });
    window.location.reload()
}