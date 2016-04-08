'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

// package.json 에서 name 을 읽어 들이는 함수를 선언
var getProjectName = function() {
  require('./package.json').name;
};

// uglify 테스크 구현
gulp.task('uglify', function() {
  var name = getProjectName();

  return gulp.src('src/' + name + '.js')
      .pipe(uglify({mangle: false}))
      .pipe(gulp.dest('build/' + name + '.min.js'));
  };
});

// default 테스크
gulp.task('default', ['uglify']);
