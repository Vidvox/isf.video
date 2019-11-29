const gulp = require('gulp'),
      sass = require('gulp-sass'),
      ejs = require('gulp-ejs'),
      moveToDirectoryIndex = require('gulp-move-to-directory-indexes'),
      imagemin = require('gulp-imagemin'),
      connect = require('gulp-connect')

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
  return gulp.src([ 'src/views/**/*.ejs',
                    '!src/views/partials/**/*.ejs'])
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

gulp.task('embed-svg',function(){  
  return gulp.src('*.html')
    .pipe(embedSvg())
    .pipe(gulp.dest('docs/'));
})

gulp.task('videos',function(){  
  return gulp.src('src/videos/**/*.*')
    .pipe(gulp.dest('docs/videos/'))
})

gulp.task('redirects',function(){  
  return gulp.src('_redirects')
    .pipe(gulp.dest('docs/'))
})

gulp.task('serve', function() {
  connect.server({
    root: 'docs',
    livereload: true
  })
})

gulp.task('livereload', function () {
  gulp.src('docs/*.html')
    .pipe(gulp.dest('docs/'))
    .pipe(connect.reload());
})

gulp.task('move-google-verification', function(){  
  return gulp.src('google8e356c7d3c1d1496.html')
    .pipe(gulp.dest('docs/'))
})

gulp.task('sitemap', function () {
  gulp.src('build/**/*.html', {
          read: false
      })
      .pipe(sitemap({
          siteUrl: 'https://isf.video'
      }))
      .pipe(gulp.dest('./docs'))
})

gulp.task('watch', function() {  
    gulp.watch('src/styles/**/*.scss', ['sass'])
    gulp.watch('src/js/**/*.js', ['scripts'])
    gulp.watch('src/views/**/*.ejs', ['ejs'])
    gulp.watch('src/images/**/*.*', ['images'])
    gulp.watch('src/videos/**/*.*', ['videos'])
    gulp.watch(['docs/**'], ['livereload']);
})

gulp.task('build', ['sass', 'scripts', 'ejs', 'images', 'videos'])

gulp.task('deploy', ['sass', 'scripts', 'ejs', 'images-minified', 'videos', 'redirects', 'move-google-verification', 'sitemap'])

gulp.task('default', ['build', 'serve', 'watch'])