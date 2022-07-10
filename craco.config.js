const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest')

const aliases = {
    "paths": {
        "@api": ["./src/api/index.ts"],
        "@components": ["./src/components/index.ts"],
        "@containers": ["./src/containers/index.ts"],
        "@config": ["./src/config/index.ts"],
        "@utils": ["./src/utils/index.ts"],
        "@types": ["./src/types/index.d.ts"],
    }
}

module.exports = {
    jest: {
        configure: {
            moduleNameMapper: {
                ...pathsToModuleNameMapper(aliases.paths, { prefix: "<rootDir>/" }),
            },
        },
    },
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
