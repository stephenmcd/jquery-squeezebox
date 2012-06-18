Created by [Stephen McDonald](http://twitter.com/stephen_mcd)

Replacement for jquery.ui.accordion to avoid dealing with
jquery.ui theming.

    Usage: $('#container').squeezebox(options);

where the direct child elements of '#container' are
sequential pairs of header/panel elements, and options
is an optional object with any of the following properties:

    activeHeaderClass:  Class name to apply to the active header
    headerSelector:     Selector for the header elements
    nextPanelSelector:  Selector for the next panel from a header
    speed:              Animation speed
