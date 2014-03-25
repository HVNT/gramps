
$(document).ready(function() {

    /* AutoScroll */
    $("#navbar ul li a[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });
    });

    /* throw checkout */
    $('#checkout-trig').click(function() {
        //window.location.href = "http://localhost:63342/gramps_v1/checkout.html";
        window.location.replace("http://localhost:63342/gramps_v1/checkout.html");
    });
});
