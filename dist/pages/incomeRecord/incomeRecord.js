"use strict";

bui.ready(function () {
        var uiDialog = bui.dialog({
                id: "#uiDialog",
                height: 200,
                callback: function callback() {
                        uiDialog.close();
                }
        });
        $('#btnOpen').on("click", function (argument) {
                uiDialog.open();
                $('.inner').removeClass('circleActive');
        });

        $('.outCircle').on('click', function () {
                $(this).children().addClass('circleActive');
                $(this).parent().parent().siblings().find('.outCircle').children().removeClass('circleActive');
        });
});