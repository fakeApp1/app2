bui.ready(function() {
    //点击跳转
    $(".recordList li").on("click", function(e) {
        bui.load({ url: "/pages/redRecordDetail/redRecordDetail.html" });
    })

    //返回
    $(".icon-back").on("click", function(e) {
            history.back()
        })
        //发出的红包和收到的红包
    var uiActionsheet = bui.actionsheet({
        trigger: "#btnOpen",
        buttons: [{ name: "收到的红包", value: "收到的红包" }, { name: "发出的红包", value: "发出的红包" }],
        callback: todo
    })

    function todo(e) {
        var val = $(e.target).attr("value");
        $("#title").text(val)
        uiActionsheet.hide();
    }
})