/*
 * assemble-examples <https://github.com/assemble/assemble-examples>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    // Metadata
    site: grunt.file.readYAML('.assemblerc.yml'),

    assemble: {
      options: {
        flatten: true,

        // Add `site` to the context
        site: '<%= site %>',

        // Extensions
        helpers: '<%= site.helpers %>/*.js',

        // Templates
        partials: ['<%= site.includes %>/*.hbs'],
        layoutdir: '<%= site.layouts %>',
        layoutext: '<%= site.layoutext %>',
        layout: '<%= site.layout %>'
      },
      site: {
        files: {
          '<%= site.dest %>/blog/': ['<%= site.content %>/*.md'],
          '<%= site.dest %>/': ['<%= site.templates %>/*.hbs']
        }
      }
    }
  });

  // Load the Assemble plugin.
  grunt.loadNpmTasks('assemble');

  // The default task to run with the `grunt` command.
  grunt.registerTask('default', ['assemble']);
};
