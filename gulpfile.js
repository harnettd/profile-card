// const gulp = require("gulp");
const { src, dest, series } = require("gulp");

clean = done => {
    console.log("Clean");
    done();
}

cssTranspile = done => {
    console.log("Compile Sass");
    done();
}

cssMinify = done => {
    console.log("Minify");
    done();
}

exports.clean = clean;
exports.cssTranspile = cssTranspile;
exports.cssMinify = cssMinify;
exports.default = series(clean, cssTranspile, cssMinify); 