'use strict';

// require modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var gcleancss = require('gulp-clean-css');
var ghtmlmin = require('gulp-htmlmin');
var gimagemin = require('gulp-imagemin');
var gfilecache = require('gulp-file-cache');
var gclean = require('gulp-clean');
var gnodemon = require('gulp-nodemon');
var guglify = require('gulp-uglify');
var gconcat = require('gulp-concat');

var browsersync = require('browser-sync');

// configures
const DIR = {
    SRC: '../src',
    DST: '../dist'
};

const SRC = {
    JS: DIR.SRC + '/public/js/*.js',
    CSS: DIR.SRC + '/public/css/*.css',
    IMG: DIR.SRC + '/public/img/*',
    VIEWS: DIR.SRC + '/views/*.ejs',
    ROUTES: DIR.SRC + '/routes/**/*.js'
};

const DST = {
  JS: DIR.DST + '/public/js',
  CSS: DIR.DST + '/public/css',
  IMG: DIR.DST + '/public/img',
  VIEWS: DIR.DST + '/views',
  ROUTES: DIR.DST + '/routes'
};

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting gnodemon
var BROWSER_SYNC_RELOAD_DELAY = 500;

// clean dist directory
gulp.task('clean', () => {
    return gulp.src(DIR.DST+'/*', {read: false})
    .pipe(gclean({force: true}));
});

gulp.task('css', () => {
    return gulp.src(SRC.CSS)
           .pipe(gcleancss({compatibility: 'ie8'}))
           .pipe(gulp.dest(DST.CSS));
});

gulp.task('img', () => {
    return gulp.src(SRC.IMG)
           .pipe(gimagemin())
           .pipe(gulp.dest(DST.IMG));
});

// combine js files to one file.
gulp.task('combine-js', function () {
	return gulp.src(SRC.ROUTES)
		.pipe(gconcat('script.js'))
		.pipe(guglify())
		.pipe(gulp.dest(DST.ROUTES));
});

gulp.task('start', function (cb) {
  var called = false;
  return gnodemon({
    // gnodemon our expressjs server
    script: './bin/www',
    // watch core server file(s) that require server restart on change
    ext: 'js html',
    env: { 'DEVELOPMENT':'DEVELOPMENT'}
  }).on('start', function onStart() {
    // ensure start only got called once
    if (!called) { cb(); }
    called = true;
  }).on('restart', function onRestart() {
    // reload connected browsers after a slight delay
//    setTimeout(function reload() {
//      browserSync.reload({
//        stream: false
//      });
//    }, BROWSER_SYNC_RELOAD_DELAY);
  });
});

//gulp.task('browser-sync', ['gnodemon'], function () {
//
//  // for more browser-sync config options: http://www.browsersync.io/docs/options/
//  browserSync({
//
//    // informs browser-sync to proxy our expressjs app which would run at the following location
//    proxy: 'http://localhost:3000',
//
//    // informs browser-sync to use the following port for the proxied app
//    // notice that the default port is 3000, which would clash with our expressjs
//    port: 4000,
//
//    // open the proxied app in chrome
//    browser: ['google-chrome']
//  });
//});
