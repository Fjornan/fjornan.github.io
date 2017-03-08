var gulp = require('gulp'),
    less = require('gulp-less'), //将less编译成css
    notify = require('gulp-notify'),//提示error
    plumber = require('gulp-plumber'),//出错后不停止
    autoprefixer = require('gulp-autoprefixer'),//自动加上浏览器前缀，如-webkit，-ms
    livereload = require('gulp-livereload'),//自动刷新浏览器，需安装liverload插件
    uglify = require('gulp-uglify');

gulp.task('less', function() {
    gulp.src('src/less/*.less')
    	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});

gulp.task('htmlreload', function() {
    gulp.src('./*.html')
        .pipe(livereload());
});

gulp.task('jsreload', function() {
    gulp.src('src/js/common.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./*.html',['htmlreload']);
    gulp.watch('src/js/*.js',['jsreload']);
    gulp.watch('src/less/*.less', ['less']);
});