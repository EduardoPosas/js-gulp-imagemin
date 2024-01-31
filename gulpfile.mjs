import gulp from "gulp"
const { src, dest, series, parallel } = gulp
import imagemin, { mozjpeg, optipng } from "gulp-imagemin"
import rename from "gulp-rename"

import webp from "gulp-webp"
import avif from "gulp-avif"

function jpgMin() {
  // place code for your default task here
  return src("src/images/*.jpg")
    .pipe(imagemin([mozjpeg({ quality: 65 })]))
    .pipe(
      rename((path) => {
        path.basename += "-min"
      })
    )
    .pipe(dest("build/images/jpg"))
}

function pngMin() {
  return src('src/images/*.png')
    .pipe(imagemin([optipng({ optimizationLevel: 3 })]))
    .pipe(
      rename((path) => {
        path.basename += "-min"
      })
    )
    .pipe(dest('build/images/png'))
}

function webpFormat() {
  return src("src/images/**/*.{jpg,png}")
    .pipe(webp({
      quality: 65,
      // resize: {
      //   width: 1920,
      //   height: 640
      // }
    }))
    .pipe(dest("build/images/webp"))
}

function avifFormat() {
  return src('src/images/**/*.{jpg,png}')
    .pipe(avif({
      quality: 65,
    }))
    .pipe(dest("build/images/avif"))
}

// export { webpConvert, avifConvert }
// export default jpgMin
export {
  jpgMin,
  pngMin
}
export default parallel(webpFormat, avifFormat)
