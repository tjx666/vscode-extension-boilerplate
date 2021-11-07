import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { BannerPlugin, Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import args from './args';
import commonWebpackConfig from './webpack.common';

const mergedConfiguration: Configuration = merge(commonWebpackConfig, {
    mode: 'production',
    plugins: [
        new BannerPlugin({
            banner: '/** @preserve powered by vscode-extension-boilerplate(https://github.com/tjx666/vscode-extension-boilerplate) */',
            raw: true,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
            }),
        ],
    },
});

let prodWebpackConfiguration = mergedConfiguration;
if (args.analyze) {
    mergedConfiguration.plugins!.push(new BundleAnalyzerPlugin() as any);
    const smp = new SpeedMeasurePlugin();
    prodWebpackConfiguration = smp.wrap(mergedConfiguration);
}

export default prodWebpackConfiguration;
