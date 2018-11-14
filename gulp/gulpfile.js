var gulp = require('gulp'); // 找到gulp模块

// gulp.task('index',function (){

// 	return gulp.src("index.html").pipe(gulp.dest('dist'));
// });

// gulp.task("default",function (){
// 	gulp.watch('index.html',["index"]);
// });

var connect = require('gulp-connect');

gulp.task('server',function (){
	connect.server({
		root : 'dist',
		port : 8888,
		livereload : true
	});
});

gulp.task('index',function (){
	return gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});

gulp.task('watch',function (){
	gulp.watch('index.html',['index']);
});

gulp.task('default',['watch','server']);