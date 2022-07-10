const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.join(path.resolve(__dirname, './src')),
            '@components': path.join(path.resolve(__dirname, './src/components')),
            '@containers': path.join(path.resolve(__dirname, './src/containers')),
            '@config': path.join(path.resolve(__dirname, './src/config')),
            '@utils': path.join(path.resolve(__dirname, './src/utils')),
        },
    },
};
