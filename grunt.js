module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        img: {
            src:
        },
        lint: {
            grunt: ['grunt.js', 'tasks/*.js']
        },
        watch: {
            files: '<config:lint.grunt>',
            tasks: 'lint:grunt'
        },
        jshint: {
            options: {
                es5: true,
                node: true,
                curly: false,
                eqeqeq: true,
                immed: true,
                latedef: false,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true
            }
        }
    });

    grunt.registerTask('default', 'lint');

    grunt.loadTasks('./support/');
};
