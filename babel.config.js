console.log("----- Load Babel config ------");

module.exports = {
    "presets": [
        [
            '@babel/preset-env',
            {
                targets: "> 0.25%, not dead",
                useBuiltIns: 'entry',
                corejs: 3,
                modules: false
            }
        ],
        "@babel/preset-react",
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        "babel-plugin-transform-typescript-metadata",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-class-properties",
    ]
}