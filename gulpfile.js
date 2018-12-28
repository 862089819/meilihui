//1 通过require()导入所需插件
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
//2创建并发布任务
//gulp.task('test',function(){
//	console.log('hellow,小马')
//})
 gulp.task('js',function(){
 	gulp.src('src/js/*.js').pipe(concat('index.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
})
 gulp.task('default',function(){
	gulp.watch('./src/js/*.js',['js']);
	//gulp.watch('./src/js/*.js',gulp.series('js'));
});
