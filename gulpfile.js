var gulp = require('gulp');
var sass = require('gulp-sass');
var args = require('yargs').argv;




gulp.task('utilToCss', function () {
    var utilName = args.utilName || 'utilities';
    return gulp.src([
        'src/utilities/' + utilName + '.scss'
    ])
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});

///// Atoms
gulp.task('atomToCss', function () {
    var atomName = args.atomName ;
    var src = (atomName) ?  'src/atoms/' + atomName + '/' + atomName + '.scss' : 'src/atoms/atoms.scss';
     
        
    
    return gulp.src([src])
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('res/css'));
});

//////////////////


