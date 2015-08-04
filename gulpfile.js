var gulp = require('gulp'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
 
gulp.task('home', function() {
    return gulp.src(['scripts/libs/jquery-2.1.1.min.js', 'scripts/libs/bootstrap.js', 'scripts/libs/angular.js', 'scripts/libs/angular-animate.js', 'scripts/libs/angular-route.js', 'scripts/app.js',  'scripts/controllers.js', 'scripts/init.js'])
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));   
});

gulp.task('watch', function() {
    gulp.watch('scripts/*.js', ['home']);
}); 

gulp.task('default', ['home', 'watch']);