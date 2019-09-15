$(document).ready(function(){
playMap = setInterval(function() {
    $.ajax({
        url : "http://127.0.0.1:8000/api/CarInfo/?format=json",
        dataType : 'json',
        success : function (data) {
            if(data[0].car_route != "1"){
            map()
            console.log(data[0].car_route)
            data_car(data[0].car_route, data[0].id)
            clearInterval(playMap);
            }
        }
    });
}, 3000);
var x = 0
playCap = setInterval(function() {
    $.ajax({
        url : "http://127.0.0.1:8000/api/CarInfo/?format=json",
        dataType : 'json',
        success : function (data) {
        console.log(data[0].for_commute)
            if(data[0].for_commute == 2*x){
                console.log(data[0].now_behavior+'실행');
                console.log('x', data[0].now_x)
                console.log('y', data[0].now_y)
                x += 1;
                moving1(data[0].id, data[0].now_behavior)
                sleep(100)
                if(data[0].car_finish == '99'){
                    console.log('끝!')
                    map()
                    clearInterval(playCap)
                }
            }
        }
    });
}, 1000);
// 차 2대일때
//playMap1 = setInterval(function() {
//    $.ajax({
//        url : "http://127.0.0.1:8000/api/CarInfo/?format=json",
//        dataType : 'json',
//        success : function (data) {
//            if(data[1].car_route != "1"){
//            map()
//            console.log(data[1].car_route)
//            data_car(data[1].car_route)
//            clearInterval(playMap1);
//            }
//        }
//    });
//}, 3000);
})
function data_car(x, id){
	$.ajax({
        type : 'POST',
        url : 'http://127.0.0.1:8000/main/pi_test4',
        dataType:'json',
        data : {
            'code': x,
            'car_id': id,
        },
        success: function(){
        }
    });
}
function sample(){
	$.ajax({
        type : 'POST',
        url : 'http://127.0.0.1:8000/main/pi_test3',
        dataType:'json',
        data : {
            'sample_car_id': '1',
			'x': '12',
			'y': '12',
			'con_id': 'c1',
        },
        success: function(){
        }
    });
}
function position_refresh(){
    var clicked_car = document.getElementById("car_number").value
    var target_x = document.getElementById("a").value
    var target_y = document.getElementById("b").value
    $.ajax({
        type : 'POST',
        url : 'http://127.0.0.1:8000/map/refresh',
        dataType:'json',
        data : {
            'car_number': clicked_car,
            'target_x': target_x,
            'target_y': target_y
        },
        success: function(){
        }
    });
}
function moving1(i, code){
        if(code==11){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
        if(code==12){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
        if(code==13){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
        if(code==14){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
        if(code==21){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
                     $(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
        if(code==22){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
                     $(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
        if(code==23){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
                     $(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
        if(code==24){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
                     $(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
        if(code==31){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
                     $(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
        if(code==32){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
                     $(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
        if(code==33){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
                     $(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
        if(code==34){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
                     $(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
}
function m11(i){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
function m12(i){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
function m13(i){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
function m14(i){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
function m21(i){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
                $(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
function m22(i){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
                $(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
function m23(i){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
                $(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
function m24(i){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
                $(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
function m31(i){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
                $(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
function m32(i){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
                $(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
function m33(i){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
                $(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
function m34(i){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
                $(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}