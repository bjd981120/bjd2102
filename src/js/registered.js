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


var arr = [false, false, false];
//手机号框得焦事件
$(".inp1").focus(function () {
    $(".inp1").css("border-bottom", "2px solid #0072de");
    $(".sp1").css({ "font-size": "12px", "top": 380, "color": "#0072de" })
})
//失焦判断手机号是否正确
$(".inp1").blur(function () {
    let a = $(".inp1").val();
    if (a.length === 0) {
        $(".inp1").css("border-bottom", "1px solid #8c8c8c");
        $(".sp1").css({ "font-size": "18px", "top": 402, "color": "#8c8c8c" });
    } else {
        $(".inp1").css("border-bottom", "1px solid #8c8c8c");
        $(".sp1").css({ "font-size": "12px", "top": 380, "color": "#8c8c8c" });
        let str = /0?(13|14|15|17|18|19)[0-9]{9}/;
        if (!str.test($(".inp1").val())) {
            $(".sp4").show()
        } else {
            $(".sp4").hide();
            arr[0] = true
        }
    }
})

//密码框得焦事件
$(".inp2").focus(function () {
    $(".inp2").css("border-bottom", "2px solid #0072de");
    $(".sp2").css({ "font-size": "12px", "top": 457, "color": "#0072de" })
})
//密码框验证是否为数字和字母组成，且最少8位
$(".inp2").blur(function () {
    let a = $(".inp2").val();
    if (a.length === 0) {
        $(".inp2").css("border-bottom", "1px solid #8c8c8c");
        $(".sp2").css({ "font-size": "18px", "top": 485, "color": "#8c8c8c" });
    } else {
        $(".inp2").css("border-bottom", "1px solid #8c8c8c");
        $(".sp2").css({ "font-size": "12px", "top": 457, "color": "#8c8c8c" });
        // let str = /0?(13|14|15|17|18|19)[0-9]{9}/;
        let str = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        if (!str.test($(".inp2").val())) {
            $(".sp5").show()
        } else {
            $(".sp5").hide();
            arr[1] = true
        }
    }
})

//得焦事件
$(".inp3").focus(function () {
    $(".inp3").css("border-bottom", "2px solid #0072de");
    $(".sp3").css({ "font-size": "12px", "top": 537, "color": "#0072de" })
})

//失焦再次输入密码框验证，是否和第一次输入一样
$(".inp3").blur(function () {
    let a = $(".inp3").val();
    if (a.length === 0) {
        $(".inp3").css("border-bottom", "1px solid #8c8c8c");
        $(".sp3").css({ "font-size": "18px", "top": 570, "color": "#8c8c8c" });
    } else {
        $(".inp3").css("border-bottom", "1px solid #8c8c8c");
        $(".sp3").css({ "font-size": "12px", "top": 537, "color": "#8c8c8c" });
        let inp2 = $(".inp2").val();
        console.log(a);
        console.log(inp2);
        if (a === inp2) {
            $(".sp6").hide();
            arr[2] = true;
        } else {
            $(".sp6").show()
        }
    }
})

$("#login").click(function () {
    location.href = "../pages/login.html";
})
let that = this;
$(".zhuc").click(function () {
    if ($.inArray(false, that.arr) === -1) {
        //获取cookie
        let cookie_str = $.getCookie('users') ? $.getCookie('users') : '';
        //转对象
        let cookie_obj = tools.convertStrToObj(cookie_str);
        //判断后端是否有当前注册的用户
        if (uname in cookie_obj) {
            alert('用户名已注册');
            return;
        } else {
            cookie_obj[uname] = upwd;

        }
        $.cookie('users', JSON.stringify(cookie_obj), { expires: 7, path: "/" });
        $(".win").show(100);
        return false;
    } else {
        alert('请完善信息！');
    }
})
$(document).click(function () {
    $(".win").hide(100);
})

