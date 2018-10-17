bui.ready(function(){
    // var input = $("#datepicker_input");
    var timeVal = $('.timeVal')
		var uiPickerdate = bui.pickerdate({
				handle:"#datepicker_input",
				// input 显示的日期格式
                formatValue: "yyyy-MM-dd",
                cols: {
                    hour: "none",
                    minute:"none",
                    second: "none"
            },
				onChange: function(value) {
                        // input.val(value); 
                        timeVal.html(value)
				}
				// 如果不需要按钮,设置为空
				// buttons: null
		});
    var uiDialog = bui.dialog({
            id: "#uiDialog",
            height: 200,
            callback: function () {
                    uiDialog.close();
            }
    });
    $('#btnOpen').on("click",function (argument) {
            uiDialog.open();
            $('.inner').removeClass('circleActive')
    })
    
    $('.outCircle').on('click', function() {
        $(this).children().addClass('circleActive')
        $(this).parent().parent().siblings().find('.outCircle').children().removeClass('circleActive')
    })
})