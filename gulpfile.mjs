import gulp from "gulp";
const { src, dest, series, parallel } = gulp;
import imagemin, { mozjpeg } from "gulp-imagemin";
import rename from "gulp-rename";

import webp from "gulp-webp";
import avif from "gulp-avif";

function jpgMin() {
  // place code for your default task here
  return src("src/images/*.jpg")
    .pipe(imagemin([mozjpeg({ quality: 50 })]))
    .pipe(
      rename((path) => {
        path.basename += "-minified";
      })
    )
    .pipe(dest("build/images"));
}

function webpConvert() {
  return src("src/images/**/*.{jpg,png}")
    .pipe(webp({ quality: 50 }))
    .pipe(
      rename((path) => {
        path.basename += "-minified";
      })
    )
    .pipe(dest("build/images"));
}

function avifConvert() {
  return src('src/images/**/*.{jpg,png}')
    .pipe(avif({ quality: 50 }))
    .pipe(
      rename((path) => {
        path.basename += "-minified";
      })
    )
    .pipe(dest("build/images"));
}

export { webpConvert, avifConvert };
export default jpgMin;
