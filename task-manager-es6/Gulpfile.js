var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var del = require('del');
var concat = require('gulp-concat');

gulp.task('babel', function () {
    return gulp.src('js/**/*.js')
        .pipe(babel())
        .on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(gulp.dest('dist'));
});

gulp.task('browserify', ['babel'], function() {
    return gulp.src('dist/app.js')
        .pipe(browserify())
        .on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify'], function() {
    del(['dist/components']);
});

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['default']);
});

gulp.on('error', function(err){
  console.log(err);
});