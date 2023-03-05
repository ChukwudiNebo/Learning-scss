const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require('sass'));


function buildStyles(){
    return src('scss/**/*.scss') //relative scss source file
    .pipe(sass()) // this will compile our sass file
    .pipe(dest('css')) // destination function contains relative folder
}

function watchTask(){
    watch([`scss/**/*.scss`], buildStyles);
}

exports.default = series(buildStyles, watchTask)