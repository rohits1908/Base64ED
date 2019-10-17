//ajax function to hit api and get data

//$("#togBtn").change(function () {
    
//    liveMode(toggleSwitchStatus);
//});
//function liveMode(toggleSwitchStatus) {
    
//}

$("#inputString").keyup(function () {
    var toggleSwitchStatus = document.getElementById("togBtn").checked;
    var inputCaptured = document.getElementById("inputString").value;
    if (toggleSwitchStatus) {
        
        $.ajax('https://localhost:44361/home/encoder',   // request url
            {
                data: { input: inputCaptured },
                type: 'get',
                async: false,
                success: function (data) {// success callback function
                    $("#textoutput").html(data);
                }
            });
    }
    else {
        $.ajax('https://localhost:44361/home/decoder',
            {
                data: { input: inputCaptured },
                type: 'get',
                async: false,
                success: function (data) {
                    $("#textoutput").html(data);
                }
            });
    }
});



//function getInputValue() {
//    var inputCaptured = document.getElementById("inputString").value;
//    //var outputCaptured;

//    $.ajax('https://localhost:44361/home/encoder',   // request url
//        {
//            data: { input : inputCaptured },
//            type: 'get',
//            async: false,
//            success: function (data) {// success callback function
//                $("#textoutput").append(data);
//            }
//        });
//    return false;
//}
//getting status of toggleswitch

//    $("#togBtn").change(function () {
        
//        var toggleSwitchStatus = $(this).is(':checked');
//        getInputValue(toggleSwitchStatus);
//    });

//function getInputValue(toggleSwitchStatus){
//    var inputCaptured = document.getElementById("inputString").value;
//    if (toggleSwitchStatus){
//        $.ajax('https://localhost:44361/home/encoder',   // request url
//            {
//                data: { input: inputCaptured },
//                type: 'get',
//                async: false,
//                success: function (data) {// success callback function
//                    $("#textoutput").append(data);
//                }
//            });
//    }
//    else {
//        var inputCaptured = document.getElementById("inputString").value;
//        $.ajax('https://localhost:44361/home/decoder',  
//            {
//                data: { input: inputCaptured },
//                type: 'get',
//                async: false,
//                success: function (data) {
//                    $("#textoutput").append(data);
//                }
//            });
//    }
//}


