module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  grunt.initConfig({
      sass: {
        dist: {
          files: {
            'web/style.css': [
              'style.scss'
            ]
          }
        }
      },
      jasmine: {
        client: {
          src: 'specs/*.spec.js',
          options: {
            specs: ['test/client/*.spec.js']
          }
        }
      },
      watch: {
        css: {
          files: ['style/style.scss'],
          tasks: ['sass']
        }
      }
    }
  );

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('dev', ['sass', 'watch']);
};
