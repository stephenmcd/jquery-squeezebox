// Replacement for jquery.ui.accordion to avoid dealing with 
// jquery.ui theming.
//
// Usage: $('#container').squeezebox(options);
// where the direct child elements of '#container' are 
// sequential pairs of header/panel elements, and options 
// is an optional object with any of the following properties:
//
// activeHeaderClass:  Class name to apply to the active header
// headerSelector:     Selector for the header elements
// nextPanelSelector:  Selector for the next panel from a header
// speed:              Animation speed

(function($) {
    $.fn.squeezebox = function(options) {

        // Default options.
        options = $.extend({
            activeHeaderClass: 'squeezebox-header-on',
            headerSelector: '> *:even', 
            nextPanelSelector: ':first', 
            speed: 500
        }, options);

        var headers = this.find(options.headerSelector);

        // When a header is clicked, iterate through each of the 
        // headers, getting their corresponding panels, and opening 
        // the panel for the header that was clicked (slideDown), 
        // closing the others (slideUp).
        headers.click(function() {
            var clicked = this;
            $.each(headers, function(i, header) {
                var panel = $(header).next(options.nextPanelSelector);
                if (clicked == header) {
                    panel.slideDown(options.speed);
                    $(header).addClass(options.activeHeaderClass);
                } else {
                    panel.slideUp(options.speed);
                    $(header).removeClass(options.activeHeaderClass);
                }
            });
        });

    };
})(jQuery);