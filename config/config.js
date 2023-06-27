module.exports = {
    /**
     * Name of the integration which is displayed in the Polarity integrations user interface
     *
     * @type String
     * @required
     */
    name: "VulnDB",
    /**
     * The acronym that appears in the notification window when information from this integration
     * is displayed.  Note that the acronym is included as part of each "tag" in the summary information
     * for the integration.  As a result, it is best to keep it to 4 or less characters.  The casing used
     * here will be carried forward into the notification window.
     *
     * @type String
     * @required
     */
    acronym: "VDB",
    defaultColor: 'light-pink',
    /**
     * Description for this integration which is displayed in the Polarity integrations user interface
     *
     * @type String
     * @optional
     */
    description: "Risk Based Security's VulnDB allows the lookup of CVEs by CVE ID.",
    entityTypes: [/*'ipv4'*/],
    customTypes: [
        {
            key: 'cve',
            regex: /CVE-\d{4}-\d{4,7}/
        }
    ],
    /**
     * An array of style files (css or less) that will be included for your integration. Any styles specified in
     * the below files can be used in your custom template.
     *
     * @type Array
     * @optional
     */
    "styles": [
        "./styles/vulndb.less"
    ],
    /**
     * Provide custom component logic and template for rendering the integration details block.  If you do not
     * provide a custom template and/or component then the integration will display data as a table of key value
     * pairs.
     *
     * @type Object
     * @optional
     */
    block: {
        component: {
            file: "./components/vulndb-block.js"
        },
        template: {
            file: "./templates/vulndb-block.hbs"
        }
    },
    request: {
        // Provide the path to your certFile. Leave an empty string to ignore this option.
        // Relative paths are relative to the integration's root directory
        cert: '',
        // Provide the path to your private key. Leave an empty string to ignore this option.
        // Relative paths are relative to the integration's root directory
        key: '',
        // Provide the key passphrase if required.  Leave an empty string to ignore this option.
        // Relative paths are relative to the integration's root directory
        passphrase: '',
        // Provide the Certificate Authority. Leave an empty string to ignore this option.
        // Relative paths are relative to the integration's root directory
        ca: '',
        // An HTTP proxy to be used. Supports proxy Auth with Basic Auth, identical to support for
        // the url parameter (by embedding the auth info in the uri)
        proxy: ""
    },
    logging: {
        // directory is relative to the this integrations directory
        // e.g., if the integration is in /app/polarity-server/integrations/virustotal
        // and you set directoryPath to be `integration-logs` then your logs will go to
        // `/app/polarity-server/integrations/integration-logs`
        // You can also set an absolute path.  If you set an absolute path you must ensure that
        // the directory you specify is writable by the `polarityd:polarityd` user and group.

        //directoryPath: '/var/log/polarity-integrations',
        level: 'info',  //trace, debug, info, warn, error, fatal
    },
    /**
     * Options that are displayed to the user/admin in the Polarity integration user-interface.  Should be structured
     * as an array of option objects.
     *
     * @type Array
     * @optional
     */
    options: [
        {
            key: "key",
            name: "Client Key",
            description: "The Client Key to authenticate with, created via \"API > Overview > Register new application\"",
            default: "",
            type: "text",
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: "secret",
            name: "Client Secret",
            description: "The Client Secret to authenticate with, created via \"API > Overview > Register new application\"",
            default: "",
            type: "password",
            userCanEdit: false,
            adminOnly: true
        }
    ]
};
