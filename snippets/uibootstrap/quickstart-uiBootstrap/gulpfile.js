/**
 *
 *  Quickstart gulpfile.js, This file based on Web Starter Kit
 *
 *  Licensed under Apache License, Copyright 2014 Google Inc.
 *  See the LICENSE for more details of licence
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
      .pipe(browserSync.reload({stream: true, once: true}))
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Optimize Images
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
      .pipe($.cache($.imagemin({
        progressive: true,
        interlaced: true
      })))
      .pipe(gulp.dest('dist/images'))
      .pipe($.size({title: 'images'}));
});

// Copy All Files At The Root Level (app)
gulp.task('copy', function () {
  return gulp.src([
    'app/*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
      .pipe($.size({title: 'copy'}));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  var assets = $.useref.assets({searchPath: ['app']});

  return gulp.src('app/**/*.html').on('error', console.error.bind(console))
      .pipe(assets)
      //.pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
      .pipe($.if('*.js', $.ngmin()))
      .pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
      .pipe($.if('*.css', $.csso()))
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe($.if('*.html', $.minifyHtml()))
      .pipe(gulp.dest('dist'))
      .pipe($.size({title: 'html'}));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['dist']));


// Watch Files For Changes & Reload
gulp.task('serve', function () {
  browserSync.init({
    server: './app'
  });

  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch(['app/styles/**/*.css']).on('change', browserSync.reload);
  gulp.watch(['app/scripts/**/*.js'], ['jshint']).on('change', browserSync.reload);
  gulp.watch(['app/images/**/*']).on('change', browserSync.reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function () {
  browserSync.init({
    server: './dist'
  });
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence(['jshint', 'html', 'images', 'copy'], cb);
});