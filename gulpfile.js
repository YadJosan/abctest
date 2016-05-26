var gulp = require('gulp');
var ts = require('gulp-typescript');

 
gulp.task('scripts', function () {
	
	
	
	return gulp.src('./app/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: 'output.js'
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('/app/**/*.ts', ['scripts']);
});