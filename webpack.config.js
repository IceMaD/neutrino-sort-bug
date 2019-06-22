// Whilst the configuration object can be modified here, the recommended way of making
// changes is via the presets' options or Neutrino's API in `.neutrinorc.js` instead.
// Neutrino's inspect feature can be used to view/export the generated configuration.
const neutrino = require('neutrino');

const config = neutrino().webpack();

config.module.rules = config.module.rules.map(rule => {
    if (!rule.use || !rule.use[0].loader.includes('babel')) {
        return rule;
    }

    rule.use[0].options.plugins = rule.use[0].options.plugins.reverse();

    return rule;
});

module.exports = config;
