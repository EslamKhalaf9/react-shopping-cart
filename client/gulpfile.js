//top level function [task = do to a certain function,
// src = look at a certain file and do an action to it,
// dest = it's the output - distenation,
// watch = watch any changes to any file dynamically like nodemon]

const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

/**
 * params
 * 1- task name
 * 2 call back function
 */
// gulp.task('log', async () => console.log('logging'));

// gulp.task('move', async () => {
//   gulp.src('./css1/*.css').pipe(gulp.dest('./css2/'))
// })

// gulp.task('watch', async () => {
//   gulp.watch('./css1/*.css', async() => {
//     gulp.src('./css1/*.css').pipe(gulp.dest('./css2/'))
//   })
// })

gulp.task("sass", async () => {
  gulp.src("src/components/**/*.scss").pipe(sass()).pipe(gulp.dest("src/css"));
});
