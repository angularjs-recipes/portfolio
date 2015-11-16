module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9000,
                    open: true,
                    keepalive: true
                }
            }
        },
        protractor: {
            options: {
                configFile: "test/conf.js",
                keepAlive: true,
                noColor: false
            },
            all: {},
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', []);
    grunt.registerTask('serve', ['connect:server']);
    grunt.registerTask('test', ['protractor:all']);
};
