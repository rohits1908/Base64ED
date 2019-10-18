function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}
$("#inputString").keyup(delay(function (e) {
    var toggleSwitchStatus = document.getElementById("togBtn").checked;
    var url = 'https://localhost:44361/home';
    var newUrl;
    var inputCaptured = document.getElementById("inputString").value;
    if (toggleSwitchStatus) {
        newUrl = url + "/" + "encoder";
    }
    else {
        newUrl = url + "/" + "decoder"
    }

    $.ajax(newUrl,   // request url
        {
            data: { input: inputCaptured },
            type: 'get',
            async: false,
            success: function (data) {// success callback function
                $("#textoutput").html(data);
            }
        }) 
},1000));



