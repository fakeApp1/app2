"use strict";

bui.ready(function () {
    // 初始化
    var dialog = bui.dialog({
        id: '#dialog3'
    });
    if (/Android [4-6]/.test(navigator.appVersion)) {
        window.addEventListener("resize", function () {
            if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        });
    }
    $('.redbag').on('click', function (_) {
        dialog.open();
    });
    // 密码框输入事件
    var str = '';
    var no = 0;
    var psdArr = [];
    var list = $('.passwordDiv ul li');
    $('.number .no').on('click', function (e) {
        $(list).eq(no).text('•');
        psdArr.push($(this).text());
        no++;
        if (no > 6) {
            no = 6;
            psdArr.splice(6);
        }
    });
    // 点击密码框清除密码
    $('.number .deleteBtn').on('click', function () {
        no--;
        $(list).eq(no).text('');
        psdArr.pop();
        if (no < 0) {
            no = 0;
            psdArr = [];
        }
    });
    //点击跳转
    $(".jump").on("click", function (e) {
        bui.load({ url: "/pages/chat/chat.html" });
    });
    //红包记录跳转
    $('.redRecord').on("click", function (e) {
        console.log(111);

        bui.load({ url: "/pages/redRecord/redRecord.html" });
    });

    //返回
    $(".icon-back").on("click", function (e) {
        history.back();
    });
});