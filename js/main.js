$(document).ready(function() {
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 2000);
        return false;
    });
});