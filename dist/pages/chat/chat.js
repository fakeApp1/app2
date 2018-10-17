"use strict";

var pageview = {};

// 模块初始化定义
pageview.init = function () {
    this.bind();
};
pageview.bind = function () {
    // 发送的内容
    var $chatInput = $("#chatInput"),

    // 发送按钮
    $btnSend = $("#btnSend"),

    // 聊天的容器
    $chatPanel = $(".chat-panel");

    // 绑定发送按钮
    $btnSend.on("click", function (e) {
        var val = $chatInput.val();
        var tpl = chatTpl(val);
        console.log($('#pagemain')[0].scrollHeight);
        console.log($('#pagemain').scrollTop());
        $('#pagemain').scrollTop($('#pagemain')[0].scrollHeight);
        console.log($('#pagemain').scrollTop());
        if (!$(this).hasClass("disabled")) {
            $chatPanel.append(tpl);
            $chatInput.val('');
            $(this).removeClass("primary").addClass("disabled");
        } else {
            return false;
        }
    });

    // 延迟监听输入
    $chatInput.on("input", bui.unit.debounce(function () {
        var val = $chatInput.val();
        if (val) {
            $btnSend.removeClass("disabled").addClass("primary");
        } else {
            $btnSend.removeClass("primary").addClass("disabled");
        }
    }, 100));

    var interval = null;
    var count = 3;
    // 为input绑定事件
    $chatInput.on('focus', function () {
        var target = this;
        // 键盘大小: iphonex: 333 iphone8p:271 iphone8:258 iphonese: 253 iphone6p: 292
        // 使用定时器是为了延迟计算
        interval = setTimeout(function () {
            var winHeight = $(window).height();

            bui.init({
                id: $(".bui-page"),
                height: winHeight
            });
            $(".bui-page")[0].scrollIntoView(true);
        }, 500);
    }).on('blur', function () {
        if (interval) {
            clearTimeout(interval);
        }
        // 使用定时器是为了延迟计算
        interval = setTimeout(function () {
            bui.init({
                id: $(".bui-page")
            });
            $(".bui-page")[0].scrollIntoView(true);
        }, 500);
    });
};

// 聊天模板
var chatTpl = function chatTpl(con, type) {
    var html = "";
    var type = type || 0;
    switch (type) {
        case 0:
            html += '<div class="bui-box-align-top chat-mine">';
            html += '    <div class="span1">';
            html += '<p class="nameRight">昵称</p>';
            html += '        <div class="bui-box-align-right">';
            html += '            <div class="chat-content bui-arrow-right">';
            html += con;
            html += '            </div>';
            html += '        </div>';
            html += '    </div>';
            html += '    <div class="chat-icon"><img src="../../images/2.png" alt=""></div>';
            html += '</div>';
            break;
        case 1:
            html += '<div class="bui-box-align-top chat-target">';
            html += '    <div class="chat-icon"><img src="../../images/3.png" alt=""></div>';
            html += '    <div class="span1">';
            html += '<p class="nameLeft">昵称</p>';
            html += '        <div class="chat-content bui-arrow-left">';
            html += con;
            html += '        </div>';
            html += '    </div>';
            html += '</div>';
            break;
    }

    return html;
};

bui.ready(function () {
    // 业务逻辑需要在这里写
    pageview.init();
    //弹出红包框
    var dialog = bui.dialog({ id: "#dialog3" });
    $('.leftN').on("click", function () {
        dialog.open();
    });
    //关闭红包框
    $('.closeRed').on("click", function () {
        dialog.close();
    });

    //点击进入发红包
    $("#redEnvelopes").on("click", function (e) {
        // location.href = "/pages/redEnvelopes/redEnvelopes.html"
        bui.load({ url: "/pages/redEnvelopes/redEnvelopes.html" });
    });
    //点击进入红包记录
    $("#redRecord").on("click", function (e) {
        // location.href = "/pages/redRecord/redRecord.html"
        bui.load({ url: "/pages/redRecord/redRecord.html" });
    });
});