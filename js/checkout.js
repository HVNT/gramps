/**
 * Created with WebStorm.
 * User: hunt
 * Date: 3/27/15
 * Time: 3:29 PM
 * File:
 */
$(document).ready(function () {

    /* STRIPE STUFF */
    var handler = StripeCheckout.configure({
        key: 'pk_live_rTnL1j9Q69tEOQ5hsiGGqtq6',
        image: 'img/doctor-logoV3_small.png',
        token: function(token) {
            //i think this is the callback to redirect after success
            window.location.href = 'thanks.html';
        }
    });

    $('#stripe-checkout').on('click', function(e) {
        // Open Checkout with further options
        handler.open({
            name: 'Surviving PTSD',
            description: 'A dive into what\'s really going on.',
            amount: 1295
        });
        e.preventDefault();
    });

    // Close Checkout on page navigation
    $(window).on('popstate', function() {
        handler.close();
    });
});