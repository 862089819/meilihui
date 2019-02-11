//1 通过require()导入所需插件
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssnano =require('gulp-cssnano');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

//2创建并发布任务
//gulp.task('test',function(){
//	console.log('hellow,小马')
//})
 gulp.task('js',function(){
 	gulp.src('src/js/*.js')
	.pipe(rename({"suffix" : ".min"}))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'));
})
 gulp.task('default',function(){
	gulp.watch('./src/js/*.js',['js']);
	//gulp.watch('./src/js/*.js',gulp.series('js'));
});

gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'));
})
gulp.task('img',function(){
 	gulp.src('src/img/*.*')
	.pipe(imagemin())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/img'));
})
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/js/*.js',['js']);
	gulp.watch('./src/img/*.img',['img']);
	
})