const { src, dest, series } = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

cssClean = () => {
    return src("bundles/*")
    .pipe(src("common.blocks/*.css"))
    .pipe(src("common.blocks/*.css.map"))
    .pipe(clean());
}

cssTranspile = () => {
    return src("common.blocks/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(dest("common.blocks"))
}

cssMinify = () => {
    return src("bundles/styles.css")
    .pipe(rename("bundles/styles.min.css"))
    .pipe(cleanCSS())
    .pipe(dest("."))
}

exports.cssClean = cssClean;
exports.cssTranspile = cssTranspile;
exports.cssMinify = cssMinify;
exports.default = series(cssClean, cssTranspile, cssMinify); 