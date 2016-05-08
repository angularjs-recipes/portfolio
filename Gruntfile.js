module.exports = function (grunt) {
	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

			// concatenation configuration
			concat: {
				js: {
					src: [
						'./bower_components/angular/angular.min.js',
						'./bower_components/angular-route/angular-route.min.js',
						'./bower_components/angular-messages/angular-messages.min.js',
						'./app/app.module.js',
						'./app/app.routes.js',
						'./app/components/homePage.component.js',
						'./app/components/aboutPage.component.js',
						'./app/components/projectPage.component.js',
						'./app/components/contactPage.component.js',
						'./app/components/errorPage.component.js',
						'./app/components/projectListItem.component.js',
						'./app/directives/activeMenu.directive.js',
						'./app/services/projects.factory.js',
						'./app/services/contact.factory.js'
					],
					dest: './app/app.js'
				}
			}
			,

			// minification configuration
			uglify: {
				js: {
					src: ['./app/app.js'],
					dest: './app/app.min.js'
				}
			}
		}
	);

	//load grunt tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//register grunt default task
	grunt.registerTask('production', ['concat', 'uglify']);
};