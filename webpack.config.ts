import { Configuration } from 'webpack';

const config: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    optimization: { usedExports: true },
    entry: {
        'better-hold-action': './src/index.ts',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: 'commonjs',
                                targets: '> 5%, not dead',
                            },
                        ],
                    ],
                    plugins: ['@babel/plugin-transform-template-literals', '@babel/plugin-proposal-class-properties'],
                },
            },
            {
                test: /\.(js)$/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
            { test: /\.(ts)$/, loader: 'ts-loader' },
        ],
    },
    output: {
        filename: '[name].js',
    },
};

export default config;
