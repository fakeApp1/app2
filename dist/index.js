"use strict";

bui.ready(function () {
    //点击跳转
    $("#jumpChat").on("click", function (e) {
        console.log(111);
        bui.load({ url: "pages/chat/chat.html" });
    });

    $("#jumpRoom").on("click", function (e) {
        bui.load({ url: "pages/roomList/roomList.html" });
    });
    $("#jumpEntertainment").on("click", function (e) {
        bui.load({ url: "pages/entertainment/entertainment.html" });
    });
    $("#jumpGroupDetail").on("click", function (e) {
        bui.load({ url: "pages/jumpGroupDetail/jumpGroupDetail.html" });
    });
});