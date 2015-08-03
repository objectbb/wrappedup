/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */
'use strict';
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		watch: {
			scripts: {
				files: ['./web/js/**/*.js', './web/js/**/*.html','./web/css/*.css'],
				tasks: ['concat'],
				options: {
					spawn: false,
				},
			},
		},
		cssmin: {
			target: {
				files: [{
					'./web/dist/main.min.css': ['./web/dist/*.css']
				}]
			}
		},
		jshint: {
			all: ['./web/js/app/**/*.js'],
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				node: true
			}
		},
		concat: {
			lib: {
				src: ['.//web/js/libs/bootstrap.min.js'],
				dest: './web/dist/wrappedup.lib.min.js'
			},
			app: {
				src: ['./web/js/app/feature/app.js', './web/js/app/feature/calendar/calendar.js',  './web/js/app/feature/dialog.js'],
				dest: './web/dist/wrappedup.app.min.js'
			},
			css: {
				src: ['./web/css/*.css'],
				dest: './web/dist/main.min.css'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'./web/dist/wrappedup.app.min.js': ['./web/dist/wrappedup.app.min.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// "npm test" runs these tasks
	grunt.registerTask('prod', ['concat', 'uglify', 'cssmin']);
	grunt.registerTask('dev', ['concat']);
	grunt.registerTask('hint', ['jshint']);

};