module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: false,
          optimization: 2,
        },
        files: {
          'public/css/app.css': 'resources/assets/less/main.less',
         
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      styles: {
        files: [
          'resources/assets/less/**/*.less',
          
        ],
        tasks: ['less'],
      },
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
