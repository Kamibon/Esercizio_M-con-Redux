const {src, dest, pipe, task} = require('gulp')
const uglify = require('gulp-uglify')


task( 'minify', ()=> src('prova.js').pipe(uglify()).pipe(dest('./components/minified'))
)