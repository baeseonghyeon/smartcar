function input(){
    var name_car = document.getElementById("carname").value;
    var container_car = document.getElementById("container").value;
    var speed_car = document.getElementById("speed").value;
    var battery_car = document.getElementById("battery").value;
    var communication_car = document.getElementById("communication").value;
    var drivingmode_car = document.getElementById("drivingmode").value;
    $.ajax({
            type : 'POST',
            url : 'http://127.0.0.1:8000/main/car_input',
            data : {
                    'carname' : name_car,
                    'container' : container_car,
                    'speed' : speed_car,
                    'battery' : battery_car,
                    'communication' : communication_car,
                    'drivingmode' : drivingmode_car,
            },
            dataType:'json',
            success: function(){
            }
        });
    alert('차량을 성공적으로 등록 하였습니다.');
    $("#container").val('');
    $("#speed").val('');
    $("#battery").val('');
    $("#communication").val('');
    $("#drivingmode").val('');
    $("#carname").val('');
}

