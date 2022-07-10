const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.join(path.resolve(__dirname, './src')),
            '@api': path.join(path.resolve(__dirname, './src/api')),
            '@components': path.join(path.resolve(__dirname, './src/components')),
            '@containers': path.join(path.resolve(__dirname, './src/containers')),
            '@config': path.join(path.resolve(__dirname, './src/config')),
            '@utils': path.join(path.resolve(__dirname, './src/utils')),
            '@types': path.join(path.resolve(__dirname, './src/types/index.d.ts')),
        },
    },
};
