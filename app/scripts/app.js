/*global Ember */
var EmberChat = window.EmberChat = Ember.Application.create({
    /**
     * log transitions in console
     * @var boolean
     */
    LOG_TRANSITIONS: true,

    // used for version check on connect to server
    versionWebApp: '@@package_version',
    versionServer: null,

    homepageUrl : '@@package_homepage',
    githubUrl: '@@package_repository_url',
    /**
     * Connection Settings
     * @property server
     */
    server: {
        host: window.location.hostname,
        port: '8589',
        path: window.location.pathname + 'emberchat/socket'
    },

    encryption: {
        // key length for RSA encryption, will probably be changeable by user in future
        rsa: 512
    }
});

/**
 * Create the properties.js file to overwrite settings above
 */
require('scripts/properties');

require('scripts/Environments/*');
require('scripts/Prototypes');
require('scripts/Classes/*');
require('scripts/Objects/*');
require('scripts/Controllers/*');
require('scripts/store');
require('scripts/Models/*');
require('scripts/Routes/*');
require('scripts/Components/*');
require('scripts/Handlebars');
require('scripts/Views/*');
require('scripts/router');
require('scripts/TemplateProxies/*');
