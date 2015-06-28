
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

var webserver = require('gulp-webserver');
 
gulp.task('compress', function() {
  return gulp.src(['js/jquery-2.1.4.min.js','js/jquery.mobile-1.4.5.min.js','bootstrap.min.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('jsmin'));
});

gulp.task('minify-css', function() {
  return gulp.src(['css/bootstrap.css', 'css/sidebar.css', 'css/main.css'])
    .pipe(concat('all.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('cssdist'));
});

gulp.task('webserver', function(){
gulp.src('')
    .pipe(webserver({
        fallback: 'index.html',
        host: '0.0.0.0',
	open: true
}));

});

gulp.task('default', ["compress", "minify-css", "webserver"]);
