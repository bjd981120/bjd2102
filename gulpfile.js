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
//导入模块
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');

//发布任务
// function fntest() {
//     console.log('测试');
// }

//拷贝到dist中
function fnCopyIndex() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
}
//压缩html
function fnHTML() {
    return gulp.src('./src/pages/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./dist/pages'));
}
//压缩css
function css() {
    return src('./src/sass/*.css')
        // .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/css'));
}
//压缩scss
function fnSass() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(rename({ 'suffix': '.min' }))
        .pipe(gulp.dest('./dist/css'));
}
//压缩js
function fnJS() {
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({ 'suffix': '.min' }))
        .pipe(gulp.dest('./dist/js'));
}
//压缩图片
function fnImg() {
    return gulp.src('./src/imgs/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}
//监听
function fnWatch() {
    gulp.watch('./src/index.html', fnCopyIndex);
    gulp.watch('./src/pages/*.html', fnHTML);
    gulp.watch('./src/sass/*.scss', fnSass);
    gulp.watch('./src/js/*.js', fnJS);

}
//导出模块

exports.copyIndex = fnCopyIndex;
exports.html = fnHTML;
exports.sass = fnSass;
exports.js = fnJS;
exports.default = fnWatch;
exports.img = fnImg;
exports.css = css;