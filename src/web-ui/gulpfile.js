var gp_clean = require('gulp-clean'),
    gp_typescript = require('gulp-typescript'),
    gp_tslint = require('gulp-tslint'),
    gp_svgtocss = require('gulp-svg-to-css');

var sass = require('gulp-sass');

//var Server = require('karma').Server;
var tsProject = gp_typescript.createProject('./src/tsconfig.json');

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var gp_sourcemaps = require('gulp-sourcemaps');
/// Define paths

var srcPaths = {
    boot: ['src/app/boot.js'],
    app: ['src/app/**/*.ts', '!src/app/boot.ts', '!src/app/boot.js'],
    html: ['src/app/**/**/*.html'],
    images: ['src/app/images/*.tiff', 'src/app/images/*.jpg', 'src/app/images/*.png', 'src/assets/images/*.svg'],
    js: [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.min.js',
        'node_modules/bootstrap/**/*.js',
        'node_modules/d3/**/*.js',
        'node_modules/raphael/*.js',
        'src/tiff/*.js',
    ],
    moment: [
        'node_modules/moment/**/*.js',
        'node_modules/moment/**/*.d.ts',
    ],
    angularHighcharts: [
        'node_modules/angular2-highcharts/**/*.js'
    ],
    primeng: [
        'node_modules/primeng/**/*.js'
    ],
    highcharts: [
        'node_modules/highcharts/**/*.js'
    ],
    js_angular: [
        'node_modules/@angular/**'
    ],
    js_rxjs: [
        'node_modules/rxjs/**'
    ],
    icons: [
        'node_modules/bootstrap-sass/assets/fonts/**',
        "node_modules/font-awesome/fonts/fontawesome-webfont.woff",
        "node_modules/font-awesome/fonts/fontawesome-webfont.woff2"
    ],
    sass: [
        'src/assets/sass/styles.scss'
    ],
    startUp: [
        'src/systemjs.config.js', 'src/app/index.html', 'src/systemjs-angular-loader.js'
    ],
    styles: [
        "node_modules/primeng/resources/primeng.min.css",
        "node_modules/primeng/resources/themes/omega/theme.css",
        "node_modules/font-awesome/css/font-awesome.min.css",
    ],
    primeng_fonts: [
        "node_modules/primeng/resources/themes/omega/fonts/roboto-v15-latin-regular.woff",
        "node_modules/primeng/resources/themes/omega/fonts/roboto-v15-latin-regular.woff2",
        "node_modules/primeng/resources/themes/omega/fonts/roboto-v15-latin-regular.eot",
    ],
    primaNovaFonts: [
        "src/assets/primaNovaFonts/**/*.*"
    ]
};

var destPaths = {
    startUp: 'wwwroot/',
    app: 'wwwroot/app/',
    css: 'wwwroot/assets/css',
    js: 'wwwroot/node_modules/',
    primeng: 'wwwroot/node_modules/primeng',
    angularHighcharts: 'wwwroot/node_modules/angular2-highcharts',
    highcharts: 'wwwroot/node_modules/highcharts',
    html: 'wwwroot/app/',
    js_angular: 'wwwroot/node_modules/@angular/',
    js_rxjs: 'wwwroot/node_modules/rxjs/',
    images: 'wwwroot/assets/images',
    icons: 'wwwroot/assets/fonts/',
    primeng_fonts: 'wwwroot/assets/css/fonts/',
    primaNovaFonts: 'wwwroot/assets/primaNovaFonts',
    svg_img_path: 'wwwroot/assets/images/svg',
    moment: 'wwwroot/node_modules/moment/',

};

var specFiles = {
    path: ['src/testing/**/*.ts', 'src/tests/**/**/*.ts']
};

gulp.task('sass', function () {
    return gulp.src(srcPaths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destPaths.css));
});
gulp.task('styles', function () {
    return gulp.src(srcPaths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destPaths.css));
});
gulp.task('styles-prod', function () {
    return gulp.src(srcPaths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(destPaths.css));
});
gulp.task('sass-prod', function () {
    return gulp.src(srcPaths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(destPaths.css));
});
gulp.task('sass:watch', function () {
    gulp.watch(srcPaths.sass, ['sass']);
});

gulp.task('images', function () {
    return gulp.src(srcPaths.images)
        .pipe(gulp.dest(destPaths.images));
});
gulp.task('startUp', function () {
    return gulp.src(srcPaths.startUp)
        .pipe(gulp.dest(destPaths.startUp));
});
gulp.task('boot', function () {
    return gulp.src(srcPaths.boot)
        .pipe(gulp.dest(destPaths.app));
});



gulp.task('html', function () {
    return gulp.src(srcPaths.html)
        .pipe(htmlmin({ collapseWhitespace: true, caseSensitive: true }))
        .pipe(gulp.dest(destPaths.html));
});

gulp.task('ts:app', ['app_clean'], function (cb) {
    gulp.start('html');
    gulp.start('boot');

    var tsResult = gulp.src(srcPaths.app)
        .pipe(gp_sourcemaps.init())
        .pipe(tsProject());
    return tsResult
        .js
        .pipe(gp_sourcemaps.write('/'))
        .pipe(gulp.dest(destPaths.app));
});

gulp.task('ts:app-prod', ['app_clean'], function (cb) {
    gulp.start('html');
    var tsResult = gulp.src(srcPaths.app)
        .pipe(gp_sourcemaps.init())
        .pipe(tsProject());
    return tsResult
        .js
        //.pipe(gp_concat('app.bundle.js'))
        .pipe(gp_uglify({ mangle: false }))
        .pipe(gp_sourcemaps.write('/'))
        .pipe(gulp.dest(destPaths.app));
});
gulp.task('ts:app:rebuild', function () {
    var mergeResults = srcPaths.app.concat(specFiles.app);
    var tsResult = gulp.src(['src/app/**/**/*.ts', 'src/testing/**/*.ts', 'src/tests/**/**/*.ts'], { base: "." })
        .pipe(tsProject());
    return tsResult
        .js
        .pipe(gulp.dest('.'));
})

// Delete wwwroot/app contents
gulp.task('app_clean', function () {
    return gulp.src(destPaths.app + "*", { read: false })
        .pipe(gp_clean({ force: true }));
});

//// Delete wwwroot/js contents
gulp.task('js_clean', function () {
    return gulp.src(destPaths.js + "*", { read: false })
        .pipe(gp_clean({ force: true }));
});

// Copy all JS files from external libraries to wwwroot/js
gulp.task('js', function () {
    gulp.src(srcPaths.js_angular)
        .pipe(gulp.dest(destPaths.js_angular));
    gulp.src(srcPaths.js_rxjs)
        .pipe(gulp.dest(destPaths.js_rxjs));
 
    gulp.src(srcPaths.moment)
        .pipe(gulp.dest(destPaths.moment));
    gulp.src(srcPaths.primeng)
        .pipe(gulp.dest(destPaths.primeng));
    gulp.src(srcPaths.highcharts)
        .pipe(gulp.dest(destPaths.highcharts));
    gulp.src(srcPaths.angularHighcharts)
        .pipe(gulp.dest(destPaths.angularHighcharts));
   
    return gulp.src(srcPaths.js)
        .pipe(gulp.dest(destPaths.js));
});
var specFiles = {
    path: ['src/testing/**/*.ts', 'src/tests/**/**/*.ts']
};


gulp.task('lintApp', () => {
    var targetApp = srcPaths.app.concat(specFiles.path[1]);

    gulp.src(targetApp)
        .pipe(gp_tslint({
            formatter: "stylish"
        }))
        .pipe(gp_tslint.report())
});

gulp.task('lintAppDev', () => {
    var targetApp = srcPaths.app.concat(specFiles.path[1]);

    gulp.src(targetApp)
        .pipe(gp_tslint({
            formatter: "stylish",
            fix: true
        }))
        .pipe(gp_tslint.report())
});


//// Global cleanup task
gulp.task('cleanup', ['app_clean', 'js_clean']);

// Watch specified files and define what to do upon file changes
gulp.task('watch', function () {
    gulp.watch([srcPaths.app, srcPaths.js], ['ts:app', 'js']);
});

gulp.task('icons', function () {
    gulp.src(srcPaths.primeng_fonts)
        .pipe(gulp.dest(destPaths.primeng_fonts));
    return gulp.src(srcPaths.icons)
        .pipe(gulp.dest(destPaths.icons));
});

gulp.task('ts:lint', () => {
    gulp.src(srcPaths.app)
        .pipe(gp_tslint({
            formatter: 'stylish'
        }))
        .pipe(gp_tslint.report());
});

 
gulp.task('copyPrimaFonts', () => {
    return gulp.src(srcPaths.primaNovaFonts)
        .pipe(gulp.dest(destPaths.primaNovaFonts));
});

gulp.task('default', ['startUp', 'ts:app', 'sass-prod', 'js', 'watch', 'images', 'icons', 'styles', 'sass:watch', 'copyPrimaFonts']);

gulp.task('build', ['startUp', 'ts:app-prod', 'sass-prod', 'js', 'images', 'icons', 'styles-prod', 'copyPrimaFonts']);
 