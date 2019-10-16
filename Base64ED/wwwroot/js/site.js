// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//ajax function to hit api and get data
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

    $("#togBtn").change(function () {
        
        var toggleSwitchStatus = $(this).is(':checked');
        //document.getElementById("textoutput").innerHTML = toggleSwitchStatus;
        getInputValue(toggleSwitchStatus);
    });

function getInputValue(toggleSwitchStatus){
    var inputCaptured = document.getElementById("inputString").value;
    if (toggleSwitchStatus){
        $.ajax('https://localhost:44361/home/encoder',   // request url
            {
                data: { input: inputCaptured },
                type: 'get',
                async: false,
                success: function (data) {// success callback function
                    $("#textoutput").append(data);
                }
            });
    }
    else {
        var inputCaptured = document.getElementById("inputString").value;
        $.ajax('https://localhost:44361/home/decoder',   // request url
            {
                data: { input: inputCaptured },
                type: 'get',
                async: false,
                success: function (data) {// success callback function
                    $("#textoutput").append(data);
                }
            });
    }
}
//function getInputValueOfDecoder() {
//    var inputCaptured = document.getElementById("inputString").value;
//    $.ajax('https://localhost:44361/home/decoder',   // request url
//        {
//            data: { input: inputCaptured },
//            type: 'get',
//            async: false,
//            success: function (data) {// success callback function
//                $("#textoutput").append(data);
//            }
//        });
//}

