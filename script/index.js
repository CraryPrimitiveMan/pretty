var flag = true;
var $container = $('#container')
$(document).ready(function() {
    var page = 1;
    $(window).scroll(function() {
        if ($(document).height() - $(this).scrollTop() - $(this).height() <= 100) {
            if (flag) {
                getList(page);
                page++;
            }
        }
    });
});

function getList(page) {
    $.getJSON('./index.php?page=' + page, function(data) {
        var boxes = [];
        if (data['imgs']) {
            var images = data['imgs'];
            for (var i = 0; i < images.length - 1; i++) {
                boxes.push('<div class="box box' + page + '"><img src="' + images[i]['shareUrl'] + '"/></div>');
            };
        }
        var $boxes = $(boxes.join(""));
        $container.append($boxes);
        var imgNum = boxes.length;
        $('.box' + page + ' img').load(function(){
            if(!--imgNum){
                $container.waterfall({
                    selector:'.box' + page,     //子元素class, 可留空
                    columnCount:3,              // 列数,  纯数字, 可留空
                    //columnWidth:400,          // 列数,  纯数字, 可留空
                    isResizable:true,           // 自适应浏览器宽度, 默认false
                    end:function(){
                        $container.css('visibility','visible');
                    },           // 回调函数
                });
            }
        })
    });
}
getList(0);