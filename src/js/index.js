// const { src } = require("gulp");

/***
 *                    _ooOoo_
 *                   o8888888o
 *                   88" . "88
 *                   (| -_- |)
 *                    O\ = /O
 *                ____/`---'\____
 *              .   ' \\| |// `.
 *               / \\||| : |||// \
 *             / _||||| -:- |||||- \
 *               | | \\\ - /// | |
 *             | \_| ''\---/'' | |
 *              \ .-\__ `-` ___/-. /
 *           ___`. .' /--.--\ `. . __
 *        ."" '< `.___\_<|>_/___.' >'"".
 *       | | : `- \`.;`\ _ /`;.`/ - ` : | |
 *         \ \ `-. \_ __\ /__ _/ .-` / /
 * ======`-.____`-.___\_____/___.-`____.-'======
 *                    `=---='
 *
 * .............................................
 *          佛祖保佑             永无BUG
 */
$(document).scroll(function () {
    var top = $("#nav").offset().top;
    if ($(document).scrollTop() > top) {
        $("#nav").css({ "position": "fixed", "top": 0, "z-index": 99999, "background-color": "white" });
    } else {
        $("#nav").css({ "position": " sticky", "top": 0, "z-index": 9999, "background-color": "white " });
    }
    if ($(document).scrollTop() > 400) {
        $("#btn").show(200);
    } else {
        $("#btn").hide(200);
    }
    $("#btn").click(function () {
        $("html").stop().animate({ scrollTop: '0px' }, 300);
    })
})

$(".o_li").mouseover(function () {
    $(".yincang").stop().show(300);
})
$(".o_li").mouseout(function () {
    $(".yincang").stop().hide(300);
})

$(".yincang").mouseover(function () {
    $(".yincang").stop().show(300);
})
$(".yincang").mouseout(function () {
    $(".yincang").stop().hide(300);
})



$("#login").click(function () {
    location.href = "../dist/pages/login.html";
})
