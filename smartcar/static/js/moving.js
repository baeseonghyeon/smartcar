$(document).ready(function(){
playMap()
playCap()
playMap2()
playCap2()
})
function sample(){
    //nfc키는 코드
    $.ajax({
        type : 'POST',
        url : 'http://192.168.0.10:8000/',
        dataType:'json',
        data : {
        },
        success: function(){
        }
    });
}
function sample2(){
    //nfc키는 코드
    $.ajax({
        type : 'POST',
        url : 'http://192.168.0.17:8000/',
        dataType:'json',
        data : {
        },
        success: function(){
        }
    });
}
function playMap(){
// 컨테이너 적재여부 검사
playMap = setInterval(function() {
    $.ajax({
        url : "http://127.0.0.1:8000/api/CarInfo/?format=json",
        dataType : 'json',
        success : function (data) {
            if(data[0].car_route != "1"){
            map()
            data_car(data[0].car_code, data[0].id)
<<<<<<< HEAD
            playReturn()
=======
//            playCap()
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
            clearInterval(playMap);
            }
        }
    });
}, 3000);
}
function playMap2(){
// 컨테이너 적재여부 검사
<<<<<<< HEAD
playMap2 = setInterval(function() {
=======
playMap = setInterval(function() {
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
    $.ajax({
        url : "http://127.0.0.1:8000/api/CarInfo/?format=json",
        dataType : 'json',
        success : function (data) {
            if(data[1].car_route != "1"){
            map()
            data_car(data[1].car_code, data[1].id)
<<<<<<< HEAD
            playReturn2()
=======
//            playCap()
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
            clearInterval(playMap2);
            }
        }
    });
}, 3000);
}
function playCap(){
//차량으로부터 수행코드 받음
playCap = setInterval(function() {
    $.ajax({
        url : "http://127.0.0.1:8000/api/CarInfo/?format=json",
        dataType : 'json',
        success : function (data) {
            var xxx = Number(data[0].for_index);
            var yyy = Number(data[0].for_commute)
<<<<<<< HEAD
=======
            console.log('xxx값')
            console.log(xxx)
            console.log(typeof(xxx))
            console.log('commute값')
            console.log(yyy)
            console.log(typeof(yyy))
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
            sleep(50)
            if(yyy == 2*xxx){
                console.log('안에 들어옴')
                moving1(data[0].id, data[0].now_behavior)
                if(data[0].car_finish == '99'){
                    console.log('finish들어옴')
                    console.log('끝!')
                $.ajax({
                    type : 'POST',
                    url : 'http://127.0.0.1:8000/main/reset_index',
                    dataType:'json',
                    data : {
                    'id': data[0].id,
                    },
                    success: function(){
                    }
                });
<<<<<<< HEAD
                map()
=======
                    map()
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
                }
                else{
                console.log('else실행')
                $.ajax({
                    type : 'POST',
                    url : 'http://127.0.0.1:8000/main/change_index',
                    dataType:'json',
                    data : {
                    'id': data[0].id,
                    },
                    success: function(){
                    }
                });
                }
            }
        }
    });
<<<<<<< HEAD
}, 1000);
}
function playCap2(){
//차량으로부터 수행코드 받음
playCap2 = setInterval(function() {
=======
}, 800);
}
function playCap2(){
//차량으로부터 수행코드 받음
var yyy = 1
playCap = setInterval(function() {
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
    $.ajax({
        url : "http://127.0.0.1:8000/api/CarInfo/?format=json",
        dataType : 'json',
        success : function (data) {
<<<<<<< HEAD
            var xxx = Number(data[1].for_index);
            var yyy = Number(data[1].for_commute)
            sleep(50)
            if(yyy == 2*xxx){
                console.log('안에 들어옴')
                sleep(50)
                moving1(data[1].id, data[1].now_behavior)
                if(data[1].now_behavior=='23'){
                    clearInterval(playCap2);
                }
                if(data[1].car_finish == '99'){
                $.ajax({
                    type : 'POST',
                    url : 'http://127.0.0.1:8000/main/reset_index',
                    dataType:'json',
                    data : {
                    'id': data[1].id,
                    },
                    success: function(){
                    }
                });
                    map()
                }
                else{
                console.log('else실행')
                $.ajax({
                    type : 'POST',
                    url : 'http://127.0.0.1:8000/main/change_index',
                    dataType:'json',
                    data : {
                    'id': data[1].id,
                    },
                    success: function(){
                    }
                });
=======
//            var x = int(Number(data[0].for_index)/2) + 1
            sleep(50)
            if(data[1].for_commute == 2*yyy){
                moving1(data[1].id, data[1].now_behavior)
                yyy += 1
                sleep(50)
                if(data[1].car_finish == '99'){
                    console.log('finish들어옴')
                    sleep(1000)
                    console.log('끝!')
                    map()
//                    playReturn()
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
                }
            }
        }
    });
<<<<<<< HEAD
}, 1000);
=======
}, 800);
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
}
function playReturn(){
//컨테이너 떨어졌는지 검사
playReturn = setInterval(function() {
    $.ajax({
        url : "http://127.0.0.1:8000/api/CarInfo/?format=json",
        dataType : 'json',
        success : function (data) {
            if(data[0].container_id == "z"){
            sleep(100)
            map()
            data_car(data[0].car_code, data[0].id)
<<<<<<< HEAD
=======
            console.log(data[0].car_code)
            console.log(data[0].id)
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
            clearInterval(playReturn);
            }
        }
    });
}, 3000);
}
function playReturn2(){
//컨테이너 떨어졌는지 검사
<<<<<<< HEAD
playReturn2 = setInterval(function() {
=======
playReturn = setInterval(function() {
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
    $.ajax({
        url : "http://127.0.0.1:8000/api/CarInfo/?format=json",
        dataType : 'json',
        success : function (data) {
            if(data[1].container_id == "z"){
            sleep(100)
            map()
<<<<<<< HEAD
            data_car2(data[1].car_code, data[1].id)
            clearInterval(playReturn2);
=======
            data_car(data[1].car_code, data[1].id)
            console.log(data[1].car_code)
            console.log(data[1].id)
            clearInterval(playReturn);
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
            }
        }
    });
}, 3000);
}
function data_car(x, id){
<<<<<<< HEAD
    //차량1에 주행코드를 보냄
=======
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
	$.ajax({
        type : 'POST',
        url : 'http://192.168.0.12:8000/',
        dataType:'json',
        data : {
            'code': x,
            'car_id': id,
            'emergency': 'false',
        },
        success: function(){
        }
    });
}
<<<<<<< HEAD
function data_car2(x, id){
    //차량2에 주행 코드를 보냄
	$.ajax({
        type : 'POST',
        url : 'http://192.168.0.18:8000/',
        dataType:'json',
        data : {
            'code': x,
            'car_id': id,
            'emergency': 'false',
=======
function sample(){
    $.ajax({
        type : 'POST',
        url : 'http://192.168.0.10:8000/',
        dataType:'json',
        data : {
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
        },
        success: function(){
        }
    });
}
<<<<<<< HEAD

=======
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
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
		// ->
		if(code==11){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
		// down
		if(code==12){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
		// <-
		if(code==13){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
		// up
		if(code==14){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
		// ⌝ down
		if(code==21){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
<<<<<<< HEAD
                    $(".carcar"+i).css('transform','rotate(90deg)'),
=======
					 $(".carcar"+i).css('transform','rotate(-90deg)'),
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
					 $(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
					}
		// ⌞ up			 
		if(code==22){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
<<<<<<< HEAD
                    $(".carcar"+i).css('transform','rotate(-90deg)'),
					 $(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
		// ⌜>
		if(code==23){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
                    $(".carcar"+i).css('transform','rotate(0deg)'),
					 $(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
		// <⌟
		if(code==24){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
                    $(".carcar"+i).css('transform','rotate(180deg)'),
					 $(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
		// ⌟up
        if(code==31){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
                    $(".carcar"+i).css('transform','rotate(-90deg)'),
					 $(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
		// ⌜down
		if(code==32){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
                     $(".carcar"+i).css('transform','rotate(90deg)'),
					 $(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
		// ⌞>
		if(code==33){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
                    $(".carcar"+i).css('transform','rotate(0deg)'),
					 $(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
		// <⌝
		if(code==34){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
                    $(".carcar"+i).css('transform','rotate(180deg)'),
=======
						$(".carcar"+i).css('transform','rotate(-90deg)'),
					 $(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
		// ⌜>
		if(code==23){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
					$(".carcar"+i).css('transform','rotate(-90deg)'),
					 $(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
		// <⌟
		if(code==24){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
		$(".carcar"+i).css('transform','rotate(-90deg)'),
					 $(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
		// ⌟up
        if(code==31){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
					 $(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
		// ⌜down
		if(code==32){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
		$(".carcar"+i).css('transform','rotate(-90deg)'),
					 $(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
		// ⌞>
		if(code==33){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
		$(".carcar"+i).css('transform','rotate(-90deg)'),
					 $(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
		// <⌝
		if(code==34){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
					$(".carcar"+i).css('transform','rotate(180deg)'),
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80
                    $(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
}
function m11(i){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)}
function m12(i){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)}
function m13(i){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)}
function m14(i){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)}
// ⌝ down
function m21(i){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
				$(".carcar"+i).css('transform','rotate(90deg)'),
				$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
			}
// ⌞ up					
function m22(i){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
				$(".carcar"+i).css('transform','rotate(-90deg)'),
				$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
			}
// ⌜>				
function m23(i){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
				$(".carcar"+i).css('transform','rotate(0deg)'),
				$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
			}
// <⌟				
function m24(i){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
				$(".carcar"+i).css('transform','rotate(180deg)'),
				$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
			}
// ⌟up				
function m31(i){$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
				$(".carcar"+i).css('transform','rotate(-90deg)'),
				$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
			}
// ⌜down
function m32(i){$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
				$(".carcar"+i).css('transform','rotate(90deg)'),
				$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
			}
// ⌞>				
function m33(i){$(".carcar"+i).animate({top: "+=79.1625366210938"}, 500)
				$(".carcar"+i).css('transform','rotate(0deg)'),
				$(".carcar"+i).animate({left: "+=79.1625366210938"}, 500)
			}
// <⌝
function m34(i){$(".carcar"+i).animate({top: "-=79.1625366210938"}, 500)
				$(".carcar"+i).css('transform','rotate(180deg)'),
				$(".carcar"+i).animate({left: "-=79.1625366210938"}, 500)
<<<<<<< HEAD
			}

function normal(){
    $.ajax({
        type : 'POST',
        url : 'http://192.168.0.12:8000/OpenCV',
        dataType:'json',
        data : {
        'data': 0
        },
        success: function(){
        }
    });
}
function slow(){
    $.ajax({
        type : 'POST',
        url : 'http://192.168.0.12:8000/OpenCV',
        dataType:'json',
        data : {
        'data': 1
        },
        success: function(){
        }
    });
}
function stop(){
    $.ajax({
        type : 'POST',
        url : 'http://192.168.0.12:8000/OpenCV',
        dataType:'json',
        data : {
        'data': 2
        },
        success: function(){
        }
    });
}
function turn(){
    $.ajax({
        type : 'POST',
        url : 'http://192.168.0.12:8000/OpenCV',
        dataType:'json',
        data : {
        'data': 3
        },
        success: function(){
        }
    });
}
=======
			}
>>>>>>> 835f799d5ebbddcdbff01e791dc8421ce3c8af80