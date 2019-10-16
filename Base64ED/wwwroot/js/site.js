// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//ajax function to hit api and get data

//getting status of toggleswitch

    $("#togBtn").change(function () {
        
        var toggleSwitchStatus = $(this).is(':checked');
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
        $.ajax('https://localhost:44361/home/decoder',  
            {
                data: { input: inputCaptured },
                type: 'get',
                async: false,
                success: function (data) {
                    $("#textoutput").append(data);
                }
            });
    }
}


