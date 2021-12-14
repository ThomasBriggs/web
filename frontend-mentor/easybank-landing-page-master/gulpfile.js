const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"))

function style() {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream());
}

function watch() {
    gulp.watch("./src/scss/**/*.scss", style);
}

exports.style = style;
exports.watch = watch;