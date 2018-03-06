const gulp = require('gulp')
const fs = require('fs')

gulp.task('post_build', function(){
    const file1 = fs.readFileSync('../../public/admin/dist/index.html')
    fs.writeFileSync('../../views/backend_site_index.tmpl', file1);
})