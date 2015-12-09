var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('latex', function() {
    return gulp.src('ana-lsg.tex')
    .pipe(shell(["pdflatex -interaction=nonstopmode -output-directory=output <%= file.path %>"]).on('error', function(){}))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
    gulp.watch('*.tex', ['latex']);
});

gulp.task('default', ['latex']);
