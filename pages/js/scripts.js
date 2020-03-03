$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        items: 10
    });

    $('.link').on('click', function (event) {
        var $this = $(this);
        if ($this.hasClass('clicked')) {
            $this.removeAttr('style').removeClass('clicked');
        } else {
            $this.css('background', '#7fc242').addClass('clicked');
        }
    });

});