module.exports = function (gulp, plugins, paths) {
    return function () {
        gulp.src(paths.sass)
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass({
          outputStyle: 'compressed',
          includePaths: [paths.sassFolder]
        }).on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(paths.css));
    };
};
