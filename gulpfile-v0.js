var gulp = require('gulp');
var sass = require('gulp-sass');
var args = require('yargs').argv;




gulp.task('createUtil', function () {
    var utilName = args.utilName || 'utilities';
    return gulp.src([
       'src/utilities/' + utilName +'.scss'
        ])
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});



/**
 gulp.task('allUtilities', function () {
    return gulp.src([
        'src/utilities/utilities.scss'
    ])
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});

gulp.task('floatUtility', function () {
    return gulp.src([
        'src/utilities/floating.scss'
    ])


        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});




gulp.task('marginUtility', function () {
    return gulp.src([
        'src/utilities/margins.scss'
    ])


        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});


gulp.task('paddingUtility', function () {
    return gulp.src([
        'src/utilities/padding.scss'
    ])


        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});



gulp.task('displayUtility', function () {
    return gulp.src([
        'src/utilities/display.scss'
    ])

        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});
 */
gulp.task('textColors', function () {
    return gulp.src([
        'src/utilities/text-colors.scss'
    ])

        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});

gulp.task('bgColors', function () {
    return gulp.src([
        'src/utilities/bg-colors.scss'
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
