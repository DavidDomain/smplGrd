module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		files: {
			less: ['dev/styles/less/main.less'],
			css: ['dev/styles/smpl-grd.css']
		},
		clean: {
			dev: ['dev/styles/smpl-grd.css', 'dev/styles/smpl-grd.css.map'],
			build: ['build/smpl-grd.min.css']
		},
		less: {
			development: {
				options: {
					banner: '/*\n' +
						' * <%= pkg.name %> - v<%= pkg.version %>\n' +
						' * <%= pkg.repository.url %>\n' +
						' * <%= grunt.template.today(\"yyyy-mm-dd\") %>\n' +
						' * Author: <%= pkg.author %>\n' +
						' * Licensed under the <%= pkg.license %> license.\n' +
						' */',
					syncImport: true,
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: 'http://localhost:8000/styles/smpl-grd.css.map',
					modifyVars: {
						"columns": "12"
					}
				},
				files: {
					'dev/styles/smpl-grd.css': '<%= files.less %>'
				}
			}
		},
		csslint: {
			strict: {
				options: {},
				src: ['<%= files.css %>']
			},
			laxed: {
				options: {
					csslintrc: ".csslintrc"
				},
				src: ['<%= files.css %>']
			}
		},
		cssmin: {
			min: {
				options: {
					"report": "gzip"
				},
				files: [{
					expand: true,
					cwd: 'dev/styles/',
					src: ['*.css', '!*.min.css'],
					dest: 'build/',
					ext: '.min.css'
				}]
			}
		},
		watch: {
			less: {
				files: ['dev/styles/less/*.less'],
				tasks: ['less:development', 'csslint:laxed', 'cssmin']
			},
			livereload: {
				options: {
					livereload: true
				},
				files: ['dev/**/*']
			}
		},
		server: {
			root: 'dev',
			web: {
				port: 8000
			}
		},
		open: {
			dev: {
				path: 'http://localhost:<%= server.web.port %>'
			}
		}
	});
	grunt.loadTasks("tasks");
	require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['clean', 'less:development', 'csslint:laxed', 'cssmin', 'server', 'open', 'watch']);
};
