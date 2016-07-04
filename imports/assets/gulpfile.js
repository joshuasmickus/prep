var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function () {
	return gulp
		.src('./styles/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleancss())
		.pipe(sourcemaps.write('../../client/stylesheets/maps'))
		.pipe(gulp.dest('../../client/stylesheets'));
});