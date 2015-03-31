
$(document).ready(function() {
    $('#menu-items li').on('click', function(e) {
    	e.preventDefault();
        var index = $(this).data('id');
        $('#menu-items li').removeClass('active');
        $(this).addClass('active');
        $('.menu_section').hide();
        $('#menu_'+index).show();
    });
});

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
                 scrollTop: target.offset().top -38
            }, 1000);
            return false;
        }
    }
});
