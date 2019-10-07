// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getInputValue() {
    var inputCaptured = document.getElementById("inputString").value;
    //var outputCaptured;

    $.ajax('https://localhost:44361/home/encoder',   // request url
        {
            data: { input : inputCaptured },
            type: 'get',
            async: false,
            success: function (data) {// success callback function
                $("#textoutput").append(data);
            }
        });
    return false;
}

