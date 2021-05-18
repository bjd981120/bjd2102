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
$(".inp1").focus(function () {
    $(".inp1").css("border-bottom", "2px solid #0072de");
    $(".sp1").css({ "font-size": "12px", "top": 258, "color": "#0072de" }).animate(300)
})
$(".inp1").blur(function () {
    $(".inp1").css("border-bottom", "1px solid #8c8c8c");
    $(".sp1").css({ "font-size": "18px", "top": 287, "color": "#8c8c8c" })
})

$(".inp2").focus(function () {
    $(".inp2").css("border-bottom", "2px solid #0072de");
    $(".sp2").css({ "font-size": "12px", "top": 340, "color": "#0072de" }).animate(300)
})
$(".inp2").blur(function () {
    $(".inp2").css("border-bottom", "1px solid #8c8c8c");
    $(".sp2").css({ "font-size": "18px", "top": 364, "color": "#8c8c8c" })
})

// $(".sp3").click(function () {
//     if ($(".sp3").css("background", "white")) {
//         $(".sp3").css("background", "rgb(62,145,255)");
//         console.log(2);
//     } else if ($(".sp3").css("background", "rgb(62,145,255)")) {
//         $(".sp3").css("background", "white");
//         console.log(1);
//     }
// })

$(".a2").click(function () {
    location.href = "../pages/registered.html";
})