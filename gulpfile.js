const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps')
const cssmin = require('gulp-cssmin');
//const imagemin = require('gulp-imagemin');
//const replace = require('gulp-replace');
const autoprefixer = require('gulp-autoprefixer')
//const rename = require("gulp-rename");
// const svgSprite = require('gulp-svg-sprite');

gulp.task('default', function () {
    // test
});

gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
	.pipe(sourcemaps.write('maps/'))
	.pipe(gulp.dest('css/'))

	//for production to extrant minified version
	.pipe(cssmin())
	.pipe(rename({ extname: '.min.css' }))
	.pipe(sourcemaps.write('maps/'))
 	.pipe(gulp.dest('css/'))
    ;

});

gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});



// deploy tasks

gulp.task('deploy', ['DeployCss']);


gulp.task('DeployCss', function () {
    return gulp.src('css/**/*.css')
	.pipe(cssmin())
	.pipe(gulp.dest('./css/'));
});
