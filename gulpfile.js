var gulp = require('gulp');
var sass = require('gulp-sass');
var args = require('yargs').argv;




gulp.task('utilToCss', function () {
    var name = args.name || 'utilities';
    return gulp.src([
        'src/utilities/' + name + '.scss'
    ])
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});

///// Atoms
gulp.task('atomToCss', function () {
    var name = args.name ;
    var src = (name) ?  'src/atoms/' + name + '/' + name + '.scss' : 'src/atoms/atoms.scss';
    return gulp.src([src])
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});

//////////////////

gulp.task('sass', function () {
    var name = args.name ;
    var src = (name) ?  'src/**/**/' + name + '.scss' : 'src/atoms/atoms.scss';
    return gulp.src([src])
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});
