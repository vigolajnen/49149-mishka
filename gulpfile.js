"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var include = require("posthtml-include");
var imagemin = require("gulp-imagemin");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var server = require("browser-sync").create();
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var webp = require("gulp-webp");
var del = require("del");
var run = require("run-sequence");
var concat = require("gulp-concat");

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("style", function () {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg,webp}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});


gulp.task("sprite", function () {
  return gulp.src("source/img/icon/icon-*.svg")
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("build"));
});

gulp.task("vendor", function () {
  gulp.src([
      "source/js/picturefill.min.js",
      "source/js/svg4everybody.min.js",
    ])
    .pipe(concat("vendor.min.js"))
    .pipe(gulp.dest("build/js"));
});

gulp.task("jsmin", function () {
  gulp.src(["source/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest("build/js"));
});

gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/js/**/*.js", ["jsmin"]);
  gulp.watch("source/*.html", ["html"]).on("change", server.reload);
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "images",
    "style",
    "sprite",
    "html",
    "vendor",
    "jsmin",
    done
  );
});
