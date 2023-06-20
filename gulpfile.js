// const gulp = require("gulp");
const { src, dest, series } = require("gulp");
const clean = require("gulp-clean");

cssClean = () => {
    return src("bundles/*.css")
    .pipe(src("bundles/*.css.map"))
    .pipe(clean());
}

cssTranspile = done => {
    console.log("Compile Sass");
    done();
}

cssMinify = done => {
    console.log("Minify");
    done();
}

exports.cssClean = cssClean;
exports.cssTranspile = cssTranspile;
exports.cssMinify = cssMinify;
exports.default = series(clean, cssTranspile, cssMinify); 