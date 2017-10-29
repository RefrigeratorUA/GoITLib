module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    concat: {
       js: {
           options: {
               separator: ';'
           },
           src: ['src/js/*.js'],
           dest: 'dist/js/script.main.js'
       },
       css: {
           src: ['src/css/*.css'],
           dest: 'dist/css/style.main.css'
       }
    },
    uglify: {
       js: {
           src: ['dist/js/script.main.js'],
           dest: 'dist/js/script.main.min.js'
       }
    },
    cssmin: {
       css: {
           src: ['dist/css/style.main.css'],
           dest: 'dist/css/style.main.min.css'
       }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
  grunt.registerTask('watch', ['watch']);


};
