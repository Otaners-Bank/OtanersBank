$(document).ready(function () {

    $('#linkInicio').click(function () {
        document.getElementById('content').src = 'pages/info.html';
        if (!$('#linkInicio').hasClass('active')) $('#linkInicio').toggleClass("active");
        if ($('#linkAPI').hasClass('active')) $('#linkAPI').toggleClass("active");
        if ($('#linkSolucoes').hasClass('active')) $('#linkSolucoes').toggleClass("active");
    });

    $('#linkAPI').click(function () {
        document.getElementById('content').src = 'pages/api.html';
        if (!$('#linkAPI').hasClass('active')) $('#linkAPI').toggleClass("active");
        if ($('#linkInicio').hasClass('active')) $('#linkInicio').toggleClass("active");
        if ($('#linkSolucoes').hasClass('active')) $('#linkSolucoes').toggleClass("active");
    });

    $('#linkSolucoes').click(function () {
        document.getElementById('content').src = 'pages/solucoes.html';
        if (!$('#linkSolucoes').hasClass('active')) $('#linkSolucoes').toggleClass("active");
        if ($('#linkInicio').hasClass('active')) $('#linkInicio').toggleClass("active");
        if ($('#linkAPI').hasClass('active')) $('#linkAPI').toggleClass("active");
    });

});