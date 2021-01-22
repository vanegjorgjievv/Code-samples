var gulp = require('gulp');
var gulpless = require('gulp-less');
var gulpautoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('less', function() {
    return gulp
        .src('./src/bootstrap.less', './src/bootstrap-grid.less', './src/bootstrap-reboot.less')
        .pipe(gulpless())
        .pipe(gulpautoprefixer({browsers: ['last 2 versions','>5%']})
            .pipe(concat("styles.css")))
        .pipe(gulp.dest("./css/"));
});

gulp.task('pack-css', function () {
    //return gulp.src(['./css/bootstrap.css', './css/bootstrap-grid.css', './css/bootstrap-reboot.css'])
    return gulp.src(['./css/styles.css'])
        .pipe(concat('styles.css'))
        .pipe(rename('theme.css'))
        .pipe(gulp.dest('../'));
});

gulp.task('watch', function() {
    return gulp
        .watch("./src/*.less", gulp.series("less", "pack-css"))
});