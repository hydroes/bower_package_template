// Include gulp
var gulp = require('gulp');

require('gulp-release-tasks')(gulp);

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var git = require('gulp-git');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var path = require('path');
var pkg = require('./package.json');
var es6transpiler = require('gulp-es6-transpiler');
var karma = require('karma').server;

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(es6transpiler())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Compile less files to css
gulp.task('less', function () {
  return gulp.src('src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist/css'));
});

// Watch Files For Changes and compile scripts and less
gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['lint', 'scripts']);
    gulp.watch('src/less/**/*.less', ['less']);
});

// Travis CI integration
gulp.task('build', ['scripts', 'less']);

// code integration task used travis CI
gulp.task('ci', ['lint', 'build', 'test']);

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'less', 'watch']);
