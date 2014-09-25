/*
    t: hexagon thickness
    l: length of each side
    d: calculated width of hexagon based on l
    h: calculated height of hexagon based on l
*/

var CONFIG = arguments[0] || {};

$.t = CONFIG.t || 10;
$.l = CONFIG.l || 40;
$.d = $.l * 2;
$.h = $.l * Math.sqrt(3);

$.init = function() {
    // for iOS only
    $.side1.anchorPoint = {x:0, y:0};
    $.side2.anchorPoint = {x:0, y:0};
    $.side3.anchorPoint = {x:0, y:0};
    $.side4.anchorPoint = {x:0, y:0};
    $.side5.anchorPoint = {x:0, y:0};
    $.side6.anchorPoint = {x:0, y:0};

    // side1
    $.side1.top  = 0;
    $.side1.left = $.d * 0.25;
    // side2
    $.side2.top  = 0;
    $.side2.left = $.d * 0.75;
    // side3
    $.side3.top  = $.h * 0.5;
    $.side3.left = $.d;
    // side4
    $.side4.top  = $.h;
    $.side4.left = $.d * 0.75;
    // side5
    $.side5.top  = $.h;
    $.side5.left = $.d * 0.25;
    // side6
    $.side6.top  = $.h * 0.5;
    $.side6.left = 0;

    // rotate
    $.side1.transform = Ti.UI.create2DMatrix().rotate(0);
    $.side2.transform = Ti.UI.create2DMatrix().rotate(60);
    $.side3.transform = Ti.UI.create2DMatrix().rotate(120);
    $.side4.transform = Ti.UI.create2DMatrix().rotate(180);
    $.side5.transform = Ti.UI.create2DMatrix().rotate(240);
    $.side6.transform = Ti.UI.create2DMatrix().rotate(300);
};

$.init();
