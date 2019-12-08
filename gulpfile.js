var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plugins = require('gulp-load-plugins')();
var imagemin = require('gulp-imagemin');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var sourcemaps    = require('gulp-sourcemaps');
var gutil         = require('gulp-util');

var paths = {
	sass: './assets/scss/style.scss',
	sassAll: './assets/scss/**/*.scss',
	sassFolder: './assets/scss/',
    scripts: './assets/scripts',
	css: './assets/css/',
	rootPublicFolder: './'
};

var config_bs = {
    bs: {
        opts: {
            injectChanges: true,
            notify: false,
						proxy: "localhost/bizutti/",
						host: "localhost"
        },
        watch: [
            paths.sassAll,
            paths.rootPublicFolder + "**/*.php"
        ]
    }
};

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, paths);
}

gulp.task('sass', getTask('project-sass'));

gulp.task('images', function() {
    gulp.src('./assets/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./assets/img  loading="lazy"'))
});

gulp.task('minify-js', function () {
  gulp.src([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/slick-carousel/slick/slick.js',
      './assets/scripts/**/*.js'
      ])
  .pipe(sourcemaps.init())
  .pipe(concat('script.js'))
  .pipe(uglify())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./assets/js/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('browser-sync', function() {
    browserSync.init( config_bs.bs.opts );
		gulp.watch(paths.sassAll, ['sass']).on('change', browserSync.reload);
        gulp.watch('./assets/scripts/**/*.js', ['minify-js']);
		gulp.watch(paths.rootPublicFolder + "**/*.php").on('change', browserSync.reload);
    browserSync.watch( paths.sassAll ).on('change',function(){
			gulp.start('sass');
		});
    browserSync.watch( config_bs.bs.watch ).on('change', browserSync.reload);

});

gulp.task('default', ['sass', 'images' , 'browser-sync', 'minify-js' ]);
