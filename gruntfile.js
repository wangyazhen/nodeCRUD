module.exports = function(grunt) {

	grunt.initConfig({

		jshint: {
            server: [
                '**/*.js',
                '!node_modules/**/*.js'
            ],
            options: {
                node: true
            }
        },

		 watch: {	      
	      js: {
	        files: ['dao/*.js', 'routes/*.js', 'db/*.js', 'services/*.js'],
	        options: {
	          livereload: true
	        }
	      }	      
	    },

	    nodemon: {
	      dev: {
	        options: {
	          file: 'app.js',
	          args: [],
	          //ignoredFiles: ['node_modules/**', '*.log'],
	          watchedExtensions: ['js'],
	          watchedFolders: ['./'],
	          //debug: true,
	          delayTime: 1,
	          env: {
	            PORT: 3000
	          }
	          //cwd: __dirname
	        }
	      }
	    },

	    concurrent: {
	      tasks: ['nodemon', 'watch', 'jshint'],
	      options: {
	        logConcurrentOutput: true
	      }
	    }
	});


	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-nodemon');
  	grunt.loadNpmTasks('grunt-concurrent');
  	grunt.loadNpmTasks('grunt-contrib-jshint');

  	grunt.option('force', true);

  	grunt.registerTask('default', ['concurrent']);
};

/*
module.exports = function (grunt) {
    grunt.initConfig({
        concurrent: {
            dev: [
                'jshint',
                'watch'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
        jshint: {
            server: [
                '**//*.js',
                '!node_modules/**//*.js'
            ],
            options: {
                node: true
            }
        },
        watch: {
            files: ['dao/*.js', 'routes/*.js', 'db/*.js', 'services/*.js'],
            tasks: [
                'jshint'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'concurrent'
    ]);
};
*/