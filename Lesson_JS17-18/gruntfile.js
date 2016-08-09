module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
       options: {
         separator: ';'
       },
       dist: {
         src: ['js/*.js'],
         dest: 'js/dest/script.main.js'
       }
   },
   uglify: {
       dist: {
           src: ['js/dest/script.main.js'],
           dest: 'js/dest/script.main.min.js'
       }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
