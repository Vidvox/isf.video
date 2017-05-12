var gulp = require('gulp'),
    sass = require('gulp-sass'),
    ejs = require("gulp-ejs")

gulp.task('sass', function () {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('docs/styles'))
})

gulp.task('scripts', function() {  
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('docs/scripts'))
})

gulp.task('ejs',function(){  
  return gulp.src('src/views/**/*.ejs')
    .pipe(ejs({},{}, {ext:'.html'}))
    .pipe(gulp.dest("docs/"))
})

gulp.task('assets',function(){  
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest("docs/images/"))
})

gulp.task('watch', function() {  
    gulp.watch('src/styles/**/*.scss', ['styles'])
    gulp.watch('src/js/**/*.js', ['scripts'])
    gulp.watch('src/views/**/*.ejs', ['ejs'])
    gulp.watch('src/images/**/*.*', ['assets'])
})

gulp.task('default', ['sass', 'scripts', 'ejs', 'assets'])