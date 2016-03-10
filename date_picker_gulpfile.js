/**
 * Created by huxiangtao on 2016/3/9.
 */

var gulp = require('gulp'),
    jsmin = require('gulp-jsmin'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps');

//nodemodules-js
gulp.task('nodeclean',function() {
    return gulp.src('dist/node_modules')
        .pipe(clean());
})
gulp.task('nodemodules',['nodeclean'],function() {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/moment/min/moment.min.js',
        'node_modules/moment/locale/zh-cn.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
    ])
        .pipe(gulp.dest('dist/node_modules'))
})

//bootstrap-sass
gulp.task('bootclean',function() {
    return gulp.src('sass/bootstrap/*')
        .pipe(clean());
})
gulp.task('bootstrap',['bootclean'],function() {
    return gulp.src('node_modules/bootstrap-sass/assets/stylesheets/**')
        .pipe(gulp.dest('sass/bootstrap'))
})

//sass
gulp.task('cssclean',function() {
    return gulp.src('dist/css', {read: false})
       .pipe(clean());
});
gulp.task('sass',['cssclean','bootstrap'],function() {
    return gulp.src('sass/date-picker.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'));
});

//js
gulp.task('jsclean',function() {
    return gulp.src('dist/js', {read: false})
       .pipe(clean());
});
gulp.task('jsmin',['jsclean'],function() {
    return gulp.src('js/**')
        .pipe(sourcemaps.init())
        .pipe(jsmin())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/js'));
});

//fonts
gulp.task('fontsclean',function() {
    return gulp.src('dist/fonts')
        .pipe(clean());
})
gulp.task('fonts',['fontsclean'],function() {
    return gulp.src('fonts/**')
        .pipe(gulp.dest('dist/fonts'));
})

//images
gulp.task('iamgesclean',function() {
    return gulp.src('dist/images')
        .pipe(clean());
})
gulp.task('images',['iamgesclean'],function() {
    return gulp.src('images/**')
        .pipe(gulp.dest('dist/images'));
})

gulp.task('datepickerbuild',[/*'nodemodules','sass',*/'jsmin'/*,'fonts','images'*/]);


