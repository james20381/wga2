var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var htmlmin = require('gulp-html-minifier');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./public/css"));

});

gulp.task('htmlMinify', function () {
    return gulp.src("./src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./public'));

})

gulp.task('watch', function() {
    gulp.watch("./src/scss/**/*.scss", ['sass']);
    gulp.watch("./src/*.html", ['htmlMinify']);

});