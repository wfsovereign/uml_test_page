/**
 * Created by wfsovereign on 15-4-7.
 */


var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');
    browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', ['serve']);

gulp.task('styles', function () {
    return sass('./styles/index.scss',{style:'expanded'})
            .pipe(gulp.dest('./styles/css'))
            .pipe(reload({stream:true}));
});


gulp.task('serve', ['styles'], function () {
    // Serve files from the root of this project
    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./styles/index.scss", ['styles']);
    gulp.watch("*.html").on("change", browserSync.reload);
});
