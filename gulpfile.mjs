import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
import gulpSourcemaps from "gulp-sourcemaps";

const sass = gulpSass(dartSass);

const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dist/css'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images'
    },
    bootstrap: {
        src: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        dest: 'dist/js'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(gulpSourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulpSourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(terser())
        .pipe(gulp.dest(paths.scripts.dest));
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}

function bootstrapJS() {
    return gulp.src(paths.bootstrap.src)
        .pipe(gulp.dest(paths.bootstrap.dest));
}

function watchFiles() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}

const build = gulp.series(gulp.parallel(styles, scripts, bootstrapJS, images));

export { styles, scripts, bootstrapJS, images, watchFiles as watch, build };
