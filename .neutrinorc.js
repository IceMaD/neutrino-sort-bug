const react = require('@neutrinojs/react');

module.exports = {
    options: {
        root: __dirname,
    },
    use: [
        react({
            html: {
                title: 'test',
            },
            babel: {
                plugins: [
                    ["@babel/plugin-proposal-class-properties", { "loose": true }],
                    ["@babel/plugin-proposal-decorators", { "legacy": true }]
                ],
            },
        }),

    ],
};
