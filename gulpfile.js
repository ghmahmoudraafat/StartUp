var gulp = require('gulp');
var sass = require('gulp-sass');
var args = require('yargs').argv;




gulp.task('utilToCss', function () {
    var utilName = args.utilName || 'utilities';
    return gulp.src([
       'src/utilities/' + utilName +'.scss'
        ])
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});

 

//////////////////
///// Atoms
gulp.task('nav', function () {
    return gulp.src([
        'src/atoms/nav/nav.scss'
    ])
         
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/atoms/css'));
});
gulp.task('notification', function () {
    return gulp.src([
        'src/atoms/Notification/notification.scss'
    ])
         
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/atoms/css'));
});
