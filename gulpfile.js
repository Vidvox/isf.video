const gulp = require('gulp'),
      sass = require('gulp-sass'),
      ejs = require('gulp-ejs'),
      moveToDirectoryIndex = require('gulp-move-to-directory-indexes'),
      imagemin = require('gulp-imagemin')

gulp.task('sass', function () {
  return gulp.src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('docs/styles'))
})

gulp.task('scripts', function() {  
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('docs/scripts'))
})

gulp.task('ejs',function(){  
  return gulp.src('src/views/*.ejs')
    .pipe(ejs({},{}, {ext:'.html'}))
    .pipe(moveToDirectoryIndex())
    .pipe(gulp.dest('docs/'))
})

gulp.task('images',function(){  
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('docs/images/'))
})

gulp.task('images-minified',function(){  
  return gulp.src('src/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('docs/images/'))
})

gulp.task('videos',function(){  
  return gulp.src('src/videos/**/*.*')
    .pipe(gulp.dest('docs/videos/'))
})

gulp.task('watch', function() {  
    gulp.watch('src/styles/**/*.scss', ['sass'])
    gulp.watch('src/js/**/*.js', ['scripts'])
    gulp.watch('src/views/**/*.ejs', ['ejs'])
    gulp.watch('src/images/**/*.*', ['images'])
    gulp.watch('src/videos/**/*.*', ['videos'])
})

gulp.task('build', ['sass', 'scripts', 'ejs', 'images', 'videos'])

gulp.task('deploy', ['sass', 'scripts', 'ejs', 'images-minified', 'videos'])

gulp.task('default', ['build', 'watch'])