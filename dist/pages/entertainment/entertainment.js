"use strict";

bui.ready(function () {
    // 快速初始化
    var uiSlideTab = bui.slide({
        id: "#uiSlideTab",
        menu: ".bui-nav",
        children: ".bui-tab-main > .tabPage",
        scroll: true
    });
    var tab = bui.slide({
        id: "#tabFoot",
        menu: "#tabFootNav",
        children: ".bui-tab-main > ul",
        scroll: true
    });
    var uiSlide = bui.slide({
        id: "#slide",
        height: 200,
        zoom: true
    });
    $('.nav-item').on('click', function () {
        console.log($(this));
        $(this).children;
        $(this).children().addClass('activity');
        $(this).siblings().children().removeClass('activity');
    });
});