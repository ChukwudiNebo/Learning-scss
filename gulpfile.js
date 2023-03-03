const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require('sass'));


function buildStyles(){
    return src('index.scss') //relative scss source file
    .pipe(sass()) // this will compile our sass file
    .pipe(dest('css')) // destination function contains relative folder
}

function watchTask(){
    watch([`index.scss`], buildStyles)
}

exports.default = series(buildStyles, watchTask)