/////////////////////// Off-Canvas Menu
$(function() {    
    // Toggle Menu
    $('.menu-toggle').on('click', function(e){
        e.stopPropagation();
        $('body').toggleClass('show-menu');
        return false;
    });
    
    // Hide menu if click is outside of menu
    $(document).on('click', function (e) {
        $('body').removeClass('show-menu');
    });
    
    // Toggle second level navigation
    $('.off-canvas-menu .hs-menu-wrapper > ul > li.hs-item-has-children > a').click(function() {
        $(this).parent().toggleClass('show-menu');
        return false;
    });
});
