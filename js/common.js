/**
 * Created by QiuXuening on 2016/5/14.
 */


$(function() {
    var h_height = $(window).height();
    var h_width = $(window).width();
    init();
    //loading
    loading('5%');
    loading('20%');
    loading('40%');
    loading('70%');
    loading('100%');
    setTimeout(function() {
        $(".m-kv-caption").addClass("show");
        $(".js-kv-slide").addClass("show");
        $(".site-header").css({
            'opacity': 1,
            'transform': 'matrix(1, 0, 0, 1, 0, 0)'
        });
        $(".g-contact").css({
            'opacity': 1,
            'transform': 'matrix(1, 0, 0, 1, 0, 0)'
        });
    }, 6800);

    //kv_slide
    var state = 0;
    var i = setInterval(function() {
        if (state == 0) {
            state = 1;
            $(".js-kv-slide:last-child").addClass("show");
            $(".js-kv-slide:first-child").css("z-index", "1");
            $(".js-kv-slide:last-child").css("z-index", "2");
            setTimeout(function() {
                $(".js-kv-slide:first-child").removeClass("show");
            }, 1000);
        } else {
            state = 0;
            $(".js-kv-slide:first-child").addClass("show");
            $(".js-kv-slide:first-child").css("z-index", "2");
            $(".js-kv-slide:last-child").css("z-index", "1");
            setTimeout(function() {
                $(".js-kv-slide:last-child").removeClass("show");
            }, 1000);
        }
    }, 3000);
    //展开联系我
    $(".js-side-contact").click(function() {
        $(".g-wrap").toggleClass("overlay");
        $(".g-contact").toggleClass("open");
        $(".js-side-overlay").toggleClass("open");
        $(".g-contact").css({
            'z-index': 2200,
        });
    });
    //关闭遮罩层
    $(".js-side-overlay").click(function() {
        $(".g-wrap").removeClass("overlay");
        $(".g-contact").removeClass("open");
        $(".js-side-overlay").removeClass("open");
        setTimeout(function() {
            $(".g-contact").css({
                'z-index': 2100,
            });
        }, 1000);
    });
    //resize
    $(window).resize(function () {
        init();
    })
});
//loading
function loading(percent) {
    $('.loader_img--last').animate({
        width: percent
    }, 1000, function() {
        if (percent == '100%') {
            setTimeout(function() {
                $('.loader_img--last').animate({
                    opacity: "0"
                }, 100);
                $("#m-loader").addClass("hide");
                $('.loader_img--last').css("width", "0");
            }, 1000);
        }
    });
}
function init() {
    var h_height = $(window).height();
    var h_width = $(window).width();
    var top_halfheight = h_height / 2 + "px";
    $(".m-kv,.js-kv-slide").height(h_height);
    $(".m-kv,.js-kv-slide").width(h_width);
    $(".m-kv-caption").css("top", top_halfheight);

}