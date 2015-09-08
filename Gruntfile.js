module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.initConfig({
    htmlmin: { // Minify HTML
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'build.html' // 'destination': 'source'
        }
      }
    },

    concatHTML: { // HTML Concat
      options: {
        separator: '\n'
      },
      dist: {
        src: [
          'parts/html-head.html',
          'parts/main.html',
          'parts/footer.html',
          'parts/html-foot.html'
        ], // In order of concat.
        dest: 'build.html'
      }
    },

    // Optional, in-lines JS & CSS files into the HTML file
    // processhtml: {
    //   dist: {
    //     files: {
    //       'index.html': ['build.html']
    //     }
    //   }
    // },

    scsslint: {
      all: [
        'sass/_partials/*.scss',
        'sass/*.scss'
      ]
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'style.css': 'sass/style.scss'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'js/jquery-2.1.4.min.js',
          'js/ga.js',
          'js/main.js'
        ],
        dest: 'main.min.js'
      }
    },

    uglify: {
      options: {
        mangle: false // Change to true on release
      },
      my_target: {
        files: {
          'main.min.js': ['main.min.js']
        }
      }
    },

    watch: {
      css: {
        files: ['sass/_partials/*.scss', 'sass/style.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },

      html: {
        files: ['parts/*.html'],
        tasks: ['concatHTML', 'htmlmin']
      },

      javascript: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });

  // Concatenate HTML
  // Hack: https://github.com/gruntjs/grunt-contrib-concat/issues/113
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.renameTask('concat', 'concatHTML');
  // Concatenate JS
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Minify HTML
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-scss-lint'); // SCSS Lint sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-serve'); // Local server

  grunt.registerTask('default', [
    'scsslint',
    'concatHTML', 'htmlmin',
    'concat', 'uglify',
    'sass'
  ]);

  // Optional
  // grunt.loadNpmTasks('grunt-processhtml'); // Inline JS & CSS
  // grunt.registerTask('optimize', ['default', 'processhtml']);

  // Optional
  // Heroku Travis CI development
  // var heroku_grunt_tasks = 'concatHTML htmlmin concat uglify sass';
  // grunt.registerTask('heroku:development', heroku_grunt_tasks);

};
