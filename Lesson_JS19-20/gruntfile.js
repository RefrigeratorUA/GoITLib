module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
       js: {
           options: {
               separator: ';'
           },
           src: ['src/js/*.js'],
           dest: 'dest/js/script.main.js'
       },
       css: {
           src: ['src/css/*.css'],
           dest: 'dest/css/style.main.css'
       }
    },
    uglify: {
       js: {
           src: ['dest/js/script.main.js'],
           dest: 'dest/js/script.main.min.js'
       }
    },
    cssmin: {
       css: {
           src: ['dest/css/style.main.css'],
           dest: 'dest/css/style.main.min.css'
       }
   },
   sass: {
       dist: {
           files: [{
               expand: true,
               cwd: 'src/css',
               src: ['*.scss'],
               dest: 'src/css',
               ext: '.css'
           }]
       }
   },
   watch: {
       sass: {
           // We watch and compile sass files as normal but don't live reload here
           files: ['src/css/*.scss'],
           tasks: ['sass']
       }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);

};
