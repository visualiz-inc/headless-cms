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
    ]
}
